
import axios from "axios";
import { writeFileSync } from "fs";
import { ApiData } from "../../../base/types";
import { BaseApi42 } from "../../../base/baseApi42";
import { CommandsApi } from "../commands.api";


//"filter[campus_id]" : campus_id.toString()
const api : {client_id: string, client_secret: string, grant_type: string, code?:string|undefined, redirect_uri?:string|undefined}=  require('../../../tests/api.json');

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
		const baseapi = await BaseApi42.new(apiData)
		const testapi = new CommandsApi(baseapi)
		data = await baseapi.get(`/v2/campus/${campus_id}/products`)
		data = await testapi.get_campus_campusId_products_productId_commands(campus_id, 1042, {});
		writeFileSync("./res.json", JSON.stringify(data));
	})()
