import { AnyTxtRecord } from "dns";

import { EventsUsersParams } from "./eventsusers.params.types";
import {BaseApi42} from "../../base/baseApi42";
import { EventUser } from "./eventusers.types";

export class EventsUsersApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}


    /**
     * api: `GET /v2/events_users/:id  `
     * @param id
     * @returns Get an events user
     */
    public async get_eventsUsers_id(id: string, params?: EventsUsersParams): Promise<EventUser>{
        return await this.base.get("/v2/events_users/" + id, params);
    }

  /**
     * api: `GET /v2/events_users   `
     * @param 
     * @returns Return all the events users
     */
    public async get_eventsUsers(params?: EventsUsersParams): Promise<EventUser[]>{
        return await this.base.get("/v2/events_users", params);
    }

  /**
     * api: `GET /v2/events/:event_id/events_users    `
     * @param event_id
     * @returns Return all the events users of the given Event
     */
    public async get_events_eventId_eventsUsers(event_id : string, params?: EventsUsersParams): Promise<EventUser[]>{
        return await this.base.get("/v2/events/" + event_id + "/event_users", params);
    }

   /**
     * api: `GET /v2/users/:user_id/events_users   `
     * @param user_id
     * @returns Return all the events users of the given User
     */
    public async get_users_userId_eventsUsers(user_id : string, params?: EventsUsersParams): Promise<EventUser[]>{
        return await this.base.get("/v2/users/" + user_id + "/event_users", params);
    }
}
