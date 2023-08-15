import { AnyTxtRecord } from "dns";
import { FlagsParams } from "./flags.params.types";
import {BaseApi42} from "../../base/baseApi42";

export class UsersApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}


    /**
     * api: ` GET /v2/flags  `
     * @param 
     * @returns Return all the flags
     */
    public async get_feedbacks(params: FlagsParams): Promise<Any>{
        return await this.base.get("/v2/flags/", params);
    }

}
