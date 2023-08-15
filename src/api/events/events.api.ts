import { AnyTxtRecord } from "dns";
import { EventsParams } from "./events.params.type";
import { EventsType } from "./events.type";
import {BaseApi42} from "../../base/baseApi42";

export class UsersApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}


    /**
     * api: `GET /v2/events `
     * @param params any object or default {}
     * @returns Return all the events
     */
    public async get_events(params: EventsParams): Promise<EventsType>{
        return await this.base.get("/v2/events/", params);
    }

    /**
     * api: `GET /v2/users/:user_id/events  `
     * @param user_id
     * @returns Return all the events of the given User
     */
    public async get_events_with_id(user_id: string, params: EventsParams): Promise<EventsType>{
        return await this.base.get("/v2/users/" + user_id + "/events", params);
    }

/**
     * api: `GET /v2/campus/:campus_id/cursus/:cursus_id/events   `
     * @param campus_id, curcus_id
     * @returns Return all the events of the given Cursus, associated with the given Campus
     */
    public async get_events_with_campus_id(campus_id: string, curcus_id: string, params: EventsParams): Promise<EventsType>{
        return await this.base.get("/v2/campus/" + campus_id + "/cursus/" + curcus_id + "/events", params);
    }

	/**
     * api: `GET /v2/campus/:campus_id/events  `
     * @param campus_id
     * @returns Return all the events of the given Campus
     */
    public async get_events_with_campus_id(campus_id: string, params: EventsParams): Promise<EventsType>{
        return await this.base.get("/v2/campus/" + campus_id + "/events, params);
    }

	/**
     * api: `GET /v2/cursus/:cursus_id/events  `
     * @param  curcus_id
     * @returns Return all the events of the given Cursus
     */
    public async get_events_with_campus_id(cursus_id: string, params: EventsParams): Promise<EventsType>{
        return await this.base.get("/v2/cursus/" + cursus_id + "/events, params);
    }
}
