

import { writeFileSync } from "fs";
import { ApiData } from "../src/base/types";
import { IntraApi } from "../src/intrapi";
import apidata from "./api.json"


	const cursus_id =  21; // Ana eğitim;
	const campus_id = 49; //istanbul
	let data :any;
	(async function () {
		
		let api = await IntraApi.new(apidata)
		
		data = await api.campususers.get_campusUsers({
			"filter[campus_id]": [49],
			"page[number]": 1,
			"page[size]": 10,
		})
		writeFileSync("./res.json", JSON.stringify(data));
	})() 

	
