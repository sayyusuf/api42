
import axios from "axios";
import { trace } from "console";
import { AnyTxtRecord } from "dns";

type Auth42 = {
	access_token		: string,
	token_type			: string,
	expires_in			: number,
	scope				: string,
	created_at			: number,
	secret_valid_until	: number
}

type ApiData = {
	grant_type		: string,
	client_id 		: string,
	client_secret	: string
};


export class BaseApi42
{
	private auth	: Auth42;
	private	prvData	: ApiData;

	static async new(clientId: string, clientSecret: string, grantType = "client_credentials"): Promise<BaseApi42> {		
		
		const prvData = {
			grant_type: grantType,
			client_id : clientId,
			client_secret : clientSecret
		};

		const auth : Auth42 = await BaseApi42.new_auth(clientId, clientSecret, grantType);
		if (!auth)
			throw "bad auth, refresh your api"
		return new BaseApi42(auth, prvData);
	}

	static async new_auth(clientId: string, clientSecret: string, grant_type = "client_credentials"): Promise<Auth42>{		
		const prvData = {
			grant_type		: grant_type,
			client_id		: clientId,
			client_secret	: clientSecret
		}
		const pack : any = {
			url:   "/oauth/token",
			method: 'post',
			baseURL: 'https://api.intra.42.fr',
			data: prvData,
			responseType: 'json',
			responseEncoding: 'utf8',
		};
		try{
			return (await (await axios(pack)).data);
		}catch{
			throw "BaseApi42 -> bad api" 
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
				page : 1,
			},
			responseType: 'json', 
			responseEncoding: 'utf8',
		};

		let res: any;
		let total: number = 0;
		do {
			try{
				res = await axios(pack);
			}catch(err:any){
				if (!(err === undefined )&& err.response.status == 401 || err.response.status == 429)
				{
					if (err.response.status == 401)
						this.auth = await BaseApi42.new_auth(this.prvData.client_id, this.prvData.client_secret, this.prvData.grant_type);
					continue ;
				}
				else throw err;
			}
			if (res.headers['x-per-page']){
				total += Number(res.headers['x-per-page']);	
				data.push(...res.data);
			}
			else
				return res.data;
			pack.params.page++;
		} while (res.headers['x-total'] && res.headers['x-per-page'] && total < Number(res.headers['x-total']))
		
		return data;
	}

}