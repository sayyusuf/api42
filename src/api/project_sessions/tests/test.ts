
import {BaseApi42} from "../../../base/baseApi42";
import { writeFileSync } from "fs";
import { ApiData } from "../../../base/types";
import { ProjectSessionsApi } from "../project_sessions.api";


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
		let ac = new ProjectSessionsApi(base);
		//data = await ac.get_projectSessions_graph({field:"updated_at", interval:"year"}, {"filter[id]": [100]});
		//data = await ac.get_projects_projectId_projectSessions_graph(1,{field:"updated_at", interval:"year"}, {"filter[id]": [100]});
		//data = await ac.get_projectSessions({"page[number]": 1, "page[size]": 2});
		//data = await ac.get_projects_projectId_projectSessions(5);
		data = await ac.get_projectSessions_id(5);
		console.log(data)
		writeFileSync("./res.json", JSON.stringify(data));
	})() 

	
