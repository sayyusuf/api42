
import {BaseApi42} from "../../../base/baseApi42";
import { writeFileSync } from "fs";
import { ApiData } from "../../../base/types";
import { BlocsApi } from "../blocs.api";


const api : {client_id: string, client_secret: string, grant_type: string, code?:string|undefined, redirect_uri?:string|undefined}=  require('./api.json');
	const cursus_id =  21; // Ana eğitim;
	const campus_id = 49; //istanbul
	let data :any;
	(async function () {
		const apiData: ApiData = {
			client_id:api.client_id,
			client_secret: api.client_secret,
			grant_type:api.grant_type,
			code:api.code,
			redirect_uri:api.redirect_uri
		}

		let base = await BaseApi42.new(apiData);
		let ac = new BlocsApi(base);
		//data = await ac.get_blocs({"filter[campus_id]": [49]});
		data = await ac.get_blocs_id(99);
		console.log(data)
		writeFileSync("./res.json", JSON.stringify(data));
	})() 

	
