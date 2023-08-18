import { AnyTxtRecord } from "dns";
import { GroupsUsersParams } from "./groupsusers.params.types";
import { GroupsUsersTypes } from "./groupsusers.types";
import {BaseApi42} from "../../base/baseApi42";

export class UsersApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}


    /**
     * api: `GET /v2/groups_users   `
     * @param 
     * @returns Return all the groups users
     */
    public async get_groups_users(params: GroupsUsersParams): Promise<GroupsUsersTypes>{
        return await this.base.get("/v2/groups_users", params);
    }

    /**
     * api: `GET /v2/groups_users/:id  `
     * @param id
     * @returns Get a groups user
     */
    public async get_groups_users_id(id: string, params: GroupsUsersParams): Promise<GroupsUsersTypes>{
        return await this.base.get("/v2/groups_users/" + id, params);
    }

/**
     * api: `GET /v2/users/:user_id/groups_users  `
     * @param user_id
     * @returns Return all the groups users of the given User
     */
    public async get_groups_users_user_id(user_id: string, params: GroupsUsersParams): Promise<GroupsUsersTypes>{
        return await this.base.get("/v2/users/" + user_id + "/groups_users", params);
    }

/**
     * api: `GET /v2/groups/:group_id/groups_users  `
     * @param group_id
     * @returns Return all the groups users of the given Group
     */
    public async get_groups_users_group_id(group_id: string, params: GroupsUsersParams): Promise<GroupsUsersTypes>{
        return await this.base.get("/v2/groups/" + group_id + "/groups_users", params);
    }
   
}
