import { AnyTxtRecord } from "dns";
import { ExamsParams } from "./exams.params.types";
import { ExamsTypes } from "./exams.types";
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
    public async get_exams(id: string, params: ExamsParams): Promise<ExamsTypes>{
        return await this.base.get("/v2/exams/" + id, params);
    }
}
