import { AnyTxtRecord } from "dns";
import { TeamsUsersParams } from "./teamsusers.params.types";
import { TeamsUsersTypes } from "./teamsusers.types";
import {BaseApi42} from "../../base/baseApi42";

export class UsersApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}


    /**
     * api: GET /v2/teams_users/:id 
     * @param id
     * @returns Get a teams user
     */
    public async get_teams_users_id(id: string, params: TeamsUsersParams): Promise<TeamsUsersTypes>{
        return await this.base.get("/v2/teams_users/" + id, params);
    }

  
    /**
     * api: GET /v2/teams_users 
     * @param 
     * @returns Return all the teams users
     */
    public async get_teams_users( params: TeamsUsersParams): Promise<TeamsUsersTypes>{
        return await this.base.get("/v2/teams_users", params);
    }

    /**
     * api: GET /v2/users/:user_id/teams_users 
     * @param user_id
     * @returns Return all the teams users of the given User
     */
    public async get_teams_users_user_id(user_id: string, params: TeamsUsersParams): Promise<TeamsUsersTypes>{
        return await this.base.get("/v2/users" + user_id + "/teams_users", params);
    }

    /**
     * api: GET /v2/teams/:team_id/teams_users 
     * @param team_id
     * @returns Return all the teams users of the given Team
     */
    public async get_teams_users_team_id(team_id: string, params: TeamsUsersParams): Promise<TeamsUsersTypes>{
        return await this.base.get("/v2/teams" + team_id + "/teams_users", params);
    }

}
