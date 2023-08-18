import { AnyTxtRecord } from "dns";
import { ExpertisesUsersParams } from "./expertisesusers.params.types";
import { ExpertisesUsersTypes } from "./expertisesusers.types";
import {BaseApi42} from "../../base/baseApi42";

export class UsersApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}


    /**
     * api: `GET /v2/expertises_users   `
     * @param 
     * @returns Return all the expertises users
     */
    public async get_expertises_users(params: ExpertisesUsersParams): Promise<ExpertisesUsersTypes>{
        return await this.base.get("/v2/expertises_users", params);
    }

   /**
     * api: `GET /v2/expertises_users/:id    `
     * @param id
     * @returns Get an expertises user
     */
    public async get_expertises_users_id(id: string, params: EventsUsersParams): Promise<ExpertisesTypes>{
        return await this.base.get("/v2/expertises_users/" + id, params);
    }

  /**
     * api: `GET /v2/users/:user_id/expertises_users    `
     * @param user_id
     * @returns Return all the expertises users of the given User
     */
    public async get_expertises_users_user_id(user_id: string, params: EventsUsersParams): Promise<ExpertisesTypes>{
        return await this.base.get("/v2/users/" + user_id + "/expertises_users", params);
    }

    /**
     * api: `GET /v2/expertises/:expertise_id/expertises_users    `
     * @param expertise_id
     * @returns Return all the expertises users of the given Expertise
     */
    public async get_expertises_users_user_id(expertise_id: string, params: EventsUsersParams): Promise<ExpertisesTypes>{
        return await this.base.get("/v2/expertises/" + expertise_id + "/expertises_users", params);
    }
}
