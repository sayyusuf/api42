import { AnyTxtRecord } from "dns";
import { TeamsParams } from "./teams.params.types";
import { TeamsTypes } from "./teams.params.types";
import {BaseApi42} from "../../base/baseApi42";

export class TeamsApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}


    /**
     * api: GET /v2/teams/:id 
     * @param id
     * @returns Get a team
     */
    public async get_teams_id(id: string, params: TeamsParams): Promise<TeamsTypes>{
        return await this.base.get("/v2/teams/" + id, params);
    }

   /**
     * api: GET /v2/teams 
     * @param 
     * @returns Return all the teams
     */
    public async get_teams(params: TeamsParams): Promise<TeamsTypes>{
        return await this.base.get("/v2/teams", params);
    }

  /**
     * api: GET /v2/cursus/:cursus_id/teams 
     * @param cursus_id
     * @returns Return all the teams of the given Cursus
     */
    public async get_teams_cursus_id(cursus_id: string, params: TeamsParams): Promise<TeamsTypes>{
        return await this.base.get("/v2/cursus/" + cursus_id, params);
    }

  /**
     * api: GET /v2/users/:user_id/teams 
     * @param user_id
     * @returns Return all the teams of the given User
     */
    public async get_teams_user_id(user_id: string, params: TeamsParams): Promise<TeamsTypes>{
        return await this.base.get("/v2/users/" + user_id + "/teams", params);
    }

  /**
     * api: GET /v2/users/:user_id/projects/:project_id/teams 
     * @param user_id, project_id
     * @returns Return all the teams of the given Project, associated with the given User
     */
    public async get_teams_user_id_project_id(user_id: string, project_id:string, params: TeamsParams): Promise<TeamsTypes>{
        return await this.base.get("/v2/users/" + user_id + "/projects" + project_id + "/teams", params);
    }

    /**
     * api: GET /v2/projects/:project_id/teams 
     * @param project_id
     * @returns Return all the teams of the given Project
     */
    public async get_teams_project_id( project_id:string, params: TeamsParams): Promise<TeamsTypes>{
        return await this.base.get("/v2/projects/" + project_id + "/teams", params);
    }

  /**
     * api: GET /v2/project_sessions/:project_session_id/teams 
     * @param project_session_id
     * @returns Return all the teams of the given Project session
     */
    public async get_teams_project_session_id( project_session_id:string, params: TeamsParams): Promise<TeamsTypes>{
        return await this.base.get("/v2/project_sessions/" + project_session_id + "/teams", params);
    }

    /**
     * api: GET /v2/me/teams 
     * @param 
     * @returns Return all the teams for the current resource owner
     */
    public async get_teams_me( params: TeamsParams): Promise<TeamsTypes>{
        return await this.base.get("/v2/me/teams", params);
    }



}
