import axios from "axios";
import { trace } from "console";
import { AnyTxtRecord } from "dns";
import { ApiData } from "./types";

type Auth42 = {
	access_token		: string,
	token_type			: string,
	expires_in			: number,
	scope				: string,
	created_at			: number,
	secret_valid_until	: number
}


export class BaseApi42
{
	private auth	: Auth42;
	private	prvData	: ApiData;

	static async new(apiData: ApiData): Promise<BaseApi42> {		
		
		const auth : Auth42 = await BaseApi42.new_auth(apiData);

		if (!auth)
			throw "bad auth, refresh your api"
		return new BaseApi42(auth, apiData);
	}

	static async new_auth(apiData: ApiData): Promise<Auth42>{		
		const pack : any = {
			url:   "/oauth/token",
			method: 'post',
			baseURL: 'https://api.intra.42.fr',
			data: apiData,
			responseType: 'json',
			responseEncoding: 'utf8',
		};
		try{
			return (await (await axios(pack)).data);
		}catch (e){
			throw e
		}
	}

	private constructor (auth: Auth42, prvData: ApiData)
	{
		this.auth = auth;
		this.prvData = prvData;
	}

	public async get(url: string , params: any = {}) : Promise<any> {
		const data: any = [] ;
		const pack : any = {
			url:   url,
			method: 'get',
			baseURL: 'https://api.intra.42.fr',
			headers: {
				'Authorization' :  this.auth.token_type + ' ' + this.auth.access_token,
			},
			params: {
				...params,
			},
			responseType: 'json', 
			responseEncoding: 'utf8',
		};
		if (params[params])
		let res: any;
		do {
			try{
				res = await axios(pack);
			}catch(err:any){
				if (!(err === undefined ) && err.response.status == 401 || err.response.status == 429)
				{
					if (err.response.status == 401)
						this.auth = await BaseApi42.new_auth(this.prvData);
					continue ;
				}
				else throw err;
			}
			if (res.headers['x-per-page'] && res.headers['x-page']){
				console.table(res.headers)
				if (res.data.length == 0)
					return data;
				data.push(...res.data);
				pack.params.page = 1 + Number(res.headers['x-page']);
			}
			else
				return res.data;
		} while (res.headers['x-total'] && res.headers['x-per-page'] && res.headers['x-page'] && res.headers['x-per-page'] * res.headers['x-page'] < Number(res.headers['x-total']))
		
		return data;
	}

}