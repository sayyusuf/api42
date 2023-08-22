import { AnyTxtRecord } from "dns";
import { FeedbacksParams } from "./feedbacks.params.types";
import {BaseApi42} from "../../base/baseApi42";

export class FeedbacksApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}


    /**
     * api: `GET /v2/feedbacks   `
     * @param 
     * @returns Return all the feedbacks
     */
    public async get_feedbacks(params?: FeedbacksParams): Promise<any>{
        return await this.base.get("/v2/feedbacks", params);
    }

   /**
     * api: `GET /v2/feedbacks/:id   `
     * @param id
     * @returns Get a feedback
     */
    public async get_feedbacks_id(id: string, params?: FeedbacksParams): Promise<any>{
        return await this.base.get("/v2/feedbacks/" + id, params);
    }

  /**
     * api: `GET /v2/events/:event_id/feedbacks   `
     * @param event_id
     * @returns Return all the feedbacks of the given Event
     */
    public async get_feedbacks_eventId(event_id: string, params?: FeedbacksParams): Promise<any>{
        return await this.base.get("/v2/events/" + event_id + "/feedbacks", params);
    }

  /**
     * api: `GET /v2/scale_teams/:scale_team_id/feedbacks    `
     * @param scale_team_id
     * @returns Return all the feedbacks of the given Scale team
     */
    public async get_feedbacks_scaleTeamId(scale_team_id: string, params?: FeedbacksParams): Promise<any>{
        return await this.base.get("/v2/scale_teams/" + scale_team_id + "/feedbacks", params);
    }

  
  /**
     * api: `GET /v2/events/:event_id/feedbacks/:id    `
     * @param event_id, id
     * @returns Get a feedback of the given Id, associated with the given Event
     */
    public async get_feedbacks_event_id_and_id(event_id: string, id: string, params: FeedbacksParams): Promise<any>{
        return await this.base.get("/v2/events/" + event_id + "/feedbacks/" + id, params);
    }

  /**
     * api: `GET /v2/scale_teams/:scale_team_id/feedbacks/:id   `
     * @param scale_team_id, id
     * @returns Get a feedback of the given Id, associated with the given Scale team
     */
    public async get_feedbacks_eventScale_team_id_and_id(scale_team_id: string, id: string, params: FeedbacksParams): Promise<any>{
        return await this.base.get("/v2/scale_teams/" + scale_team_id + "/feedbacks/" + id, params);
    }
}
