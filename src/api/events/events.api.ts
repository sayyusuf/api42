import { AnyTxtRecord } from "dns";
import { EventsParams } from "./events.params.type";
import { Event } from "./events.types";
import {BaseApi42} from "../../base/baseApi42";

export class EventsApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}


    /**
     * api: `GET /v2/events `
     * @param 
     * @returns Return all the events
     */
    public async get_events(params?: EventsParams): Promise<Event[]>{
        return await this.base.get("/v2/events", params);
    }

	/**
     * api: `GET /v2/events/:id`
     * @param id
     * @returns Get an event
     */
    public async get_events_id(id: string, params?: EventsParams): Promise<Event>{
        return await this.base.get("/v2/events/" + id, params);
    }

    /**
     * api: `GET /v2/users/:user_id/events  `
     * @param user_id
     * @returns Return all the events of the given User
     */
    public async get_users_userId_events(user_id: string, params?: EventsParams): Promise<Event[]>{
        return await this.base.get("/v2/users/" + user_id + "/events", params);
    }

/**
     * api: `GET /v2/campus/:campus_id/cursus/:cursus_id/events   `
     * @param campus_id, curcus_id
     * @returns Return all the events of the given Cursus, associated with the given Campus
     */
    public async get_campus_campusId_cursus_cursusId_events(campus_id: string, curcus_id: string, params?: EventsParams): Promise<Event[]>{
        return await this.base.get("/v2/campus/" + campus_id + "/cursus/" + curcus_id + "/events", params);
    }

	/**
     * api: `GET /v2/campus/:campus_id/events  `
     * @param campus_id
     * @returns Return all the events of the given Campus
     */
    public async get_campus_campusId_events(campus_id: string, params?: EventsParams): Promise<Event[]>{
        return await this.base.get("/v2/campus/" + campus_id + "/events", params);
    }

	/**
     * api: `GET /v2/cursus/:cursus_id/events  `
     * @param  curcus_id
     * @returns Return all the events of the given Cursus
     */
    public async get_cursus_cursusId_events(cursus_id: string, params?: EventsParams): Promise<Event[]>{
        return await this.base.get("/v2/cursus/" + cursus_id + "/events", params);
    }
}
