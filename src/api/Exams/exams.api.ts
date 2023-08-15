import { AnyTxtRecord } from "dns";
import { ExamsParams } from "./exams.params.types";
import {BaseApi42} from "../../base/baseApi42";

export class UsersApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}


    /**
     * api: `GET /v2/exams/:id  `
     * @param id
     * @returns Get an exam
     */
    public async get_events_users_with_id(id: string, params: EventsUsersParams): Promise<ExamsParams>{
        return await this.base.get("/v2/exams/" + id, params);
    }
}
