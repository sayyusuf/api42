import { AnyTxtRecord } from "dns";
import { GroupsUsersParams } from "./groupsusers.params.types";
import { GroupsUser  } from "./groupsusers.types";
import {BaseApi42} from "../../base/baseApi42";

export class GroupsUsersApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}


    /**
     * api: `GET /v2/groups_users   `
     * @param 
     * @returns Return all the groups users
     */
    public async get_groupsUsers(params?: GroupsUsersParams): Promise<GroupsUser[]>{
        return await this.base.get("/v2/groups_users", params);
    }

    /**
     * api: `GET /v2/groups_users/:id  `
     * @param id
     * @returns Get a groups user
     */
    public async get_groupsUsers_id(id: string, params?: GroupsUsersParams): Promise<GroupsUser>{
        return await this.base.get("/v2/groups_users/" + id, params);
    }

/**
     * api: `GET /v2/users/:user_id/groups_users  `
     * @param user_id
     * @returns Return all the groups users of the given User
     */
    public async get_users_userId_groupsUsers(user_id: string, params?: GroupsUsersParams): Promise<GroupsUser[]>{
        return await this.base.get("/v2/users/" + user_id + "/groups_users", params);
    }

/**
     * api: `GET /v2/groups/:group_id/groups_users  `
     * @param group_id
     * @returns Return all the groups users of the given Group
     */
    public async get_groups_groupId_groupsUsers(group_id: string, params?: GroupsUsersParams): Promise<GroupsUser[]>{
        return await this.base.get("/v2/groups/" + group_id + "/groups_users", params);
    }
   
}
