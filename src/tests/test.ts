
import axios from "axios";
import {BaseApi42} from "../base/baseApi42";
import { IntraApi} from "../intrapi"
import { writeFileSync } from "fs";
//"filter[campus_id]" : campus_id.toString()
const api : {client_id: string, client_secret: string, grant_type: string}=  require('./api.json');

	const cursus_id =  21; // Ana eğitim;
	const campus_id = 49; //istanbul
	let data :any;
	(async function () {
		const intrapi = await IntraApi.new(api.client_id, api.client_secret, api.grant_type)

		data = intrapi.users.users_id("akarahan")
		writeFileSync("./res.json", JSON.stringify(data));
	})() 






	
