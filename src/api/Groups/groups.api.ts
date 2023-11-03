import { AnyTxtRecord } from "dns";
import { GroupsParams } from "./groups.params.types";
import { Group } from "./groups.types";
import {BaseApi42} from "../../base/baseApi42";

export class GroupsApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}


    /**
     * api: `GET /v2/groups  `
     * @param 
     * @returns Return all the groups
     */
    public async get_groups(params?: GroupsParams): Promise<Group[]>{
        return await this.base.get("/v2/groups", params);
    }

  /**
     * api: `GET /v2/groups/:id  `
     * @param id
     * @returns Get a group
     */
    public async get_groups_id(id: string, params?: GroupsParams): Promise<Group>{
        return await this.base.get("/v2/groups/" + id, params);
    }

   /**
     * api: `GET /v2/users/:user_id/groups  `
     * @param user_id
     * @returns Return all the groups of the given User
     */
    public async get_users_userId_groups(user_id: string, params?: GroupsParams): Promise<Group[]>{
        return await this.base.get("/v2/users/" + user_id + "/groups", params);
    }
   
}