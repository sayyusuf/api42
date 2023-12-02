import { AnyTxtRecord } from "dns";
import { Exam } from "./exams.types";
import { ExamsParams  } from "./exams.params.types";
import {BaseApi42} from "../../base/baseApi42";

export class ExamsApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}


    /**
     * api: `GET /v2/exams/:id  `
     * @param id
     * @returns Get an exam
     */
    public async get_exams_id(id: string, params?: ExamsParams): Promise<Exam>{
        return await this.base.get("/v2/exams/" + id, params);
    }
}
