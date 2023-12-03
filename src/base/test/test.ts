import {BaseApi42} from "../baseApi42";
import { writeFileSync } from "fs";
import { ApiData } from "../types";

const api : {client_id: string, client_secret: string, grant_type: string, code?:string|undefined, redirect_uri?:string|undefined}=  require('./api.json');
	const cursus_id =  21; // Ana eğitim;

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
		data = await base.get("/v2/campus_users", {  "page[number]": 1});
		//data = await base.get("/v2/flags");
		console.log(data)
		writeFileSync("./res.json", data);
	})();
