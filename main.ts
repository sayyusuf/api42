
import axios from "axios";
import {BaseApi42} from "./base_api42";
import { Api42 } from "./api42";
import { writeFileSync } from "fs";
//"filter[campus_id]" : campus_id.toString()
const api : {client_id: string, client_secret: string, grant_type: string}=  require('./api.json');

	const cursus_id =  21; // Ana eğitim;
	const campus_id = 49; //istanbul
	let data :any;
	(async function () {
		
		const api42 = await Api42.new(api.client_id, api.client_secret, api.grant_type);
		const Bapi = await BaseApi42.new(api.client_id, api.client_secret, api.grant_type);
	 	
		//data = await Bapi.get("/v2/users/ysay");
		//console.log(data)
		//data = await Bapi.get("/v2/cursus/" + cursus_id + "/cursus_users",  {"sort": "-level", "range[blackholed_at]" : "2022-01-21T06:42, 2022-11-30T06:42", "filter[campus_id]" : campus_id.toString()});
		
		data = await api42.users_id("akarahan");
		writeFileSync("./res.json", JSON.stringify(data));
	})() 






	
