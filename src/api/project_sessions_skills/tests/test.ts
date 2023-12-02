
import {BaseApi42} from "../../../base/baseApi42";
import { writeFileSync } from "fs";
import { ApiData } from "../../../base/types";
import { ProjectSessionsSkillsApi } from "../project_sessions_skills.api";


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
		let ac = new ProjectSessionsSkillsApi(base);
		//data = await ac.get_projectSessionsSkills({ "range[project_session_id]": "1,4"})
		//data = await ac.get_projectSessionsSkills_id(1);
		//data = await ac.get_projectSessions_projectSessionId_projectSessionsSkills(2);
		//data = await ac.get_projectSessions_projectSessionId_projectSessionsSkills_id(302, 1);
		data = await ac.get_skills_skillId_projectSessionsSkills(6, {"page[number]": 1,"paage[size]": 4});

		console.log(data)
		writeFileSync("./res.json", JSON.stringify(data));
	})() 

	
