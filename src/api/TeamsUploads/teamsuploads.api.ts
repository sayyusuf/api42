import { AnyTxtRecord } from "dns";
import { TeamsUploadsParams } from "./teamsuploads.params.types";
import { TeamsUpload } from "./teamsuploads.types";
import {BaseApi42} from "../../base/baseApi42";

export class TeamsUploadsApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}


    /**
     * api: GET /v2/teams_uploads 
     * @param 
     * @returns Return all the teams uploads
     */
    public async get_teamsUploads(params?: TeamsUploadsParams): Promise<TeamsUpload[]>{
        return await this.base.get("/v2/teams_uploads", params);
    }

  /**
     * api: GET /v2/teams_uploads/:id 
     * @param id
     * @returns Get a teams upload
     */
    public async get_teamsUploads_id(id:string, params?: TeamsUploadsParams): Promise<TeamsUpload>{
        return await this.base.get("/v2/teams_uploads/" + id, params);
    }

  /**
     * api: GET /v2/teams/:team_id/teams_uploads 
     * @param team_id
     * @returns Return all the teams uploads of the given Team
     */
    public async get_teams_teamId_teamsUploads(team_id:string, params?: TeamsUploadsParams): Promise<TeamsUpload[]>{
        return await this.base.get("/v2/teams/" + team_id + "/teams_uploads", params);
    }
}