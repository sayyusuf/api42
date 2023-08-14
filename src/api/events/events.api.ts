import { AnyTxtRecord } from "dns";
import {BaseApi42} from "../../base/baseApi42";

export class UsersApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}


    /**
     * api: `GET /v2/events `
     * @param params any object or default {}
     * @returns Return all the events
     */
    public async get_events(params: any = {}): Promise<Any>{
        return await this.base.get("/v2/users/", params);
    }

    /**
     * api: `GET /v2/users/:user_id/events  `
     * @param user_id
     * @returns Return all the events of the given User
     */
    public async get_events_with_id(user_id: string, params: any = {}): Promise<Any>{
        return await this.base.get("/v2/users/" + user_id, params);
    }
}
