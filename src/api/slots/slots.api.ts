import { BaseApi42 } from "../../base/baseApi42";
import { Slot } from "./slots.type";
import { SlotsParams } from "./slots.params.type";

export class SlotsApi {
    private base: BaseApi42;

    constructor(base: BaseApi42) {
        this.base = base;
    }

    /**
     * api: `GET /v2/slots/graph(/on/:field(/by/:interval))`
     * @param field string
     * @param interval string
     * @param params any object or default {}
     * @returns any
     */
    public async get_slots_graph(field: string, interval: string, params: SlotsParams): Promise<any> {
        const route = `/v2/slots/graph` +  (field ? ("/on/" + field): "") + ((field && interval)?("/by/" + interval): "");
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/projects/:project_id/slots/graph(/on/:field(/by/:interval))`
     * @param project_id string | number
     * @param field string
     * @param interval string
     * @param params any object or default {}
     * @returns any
     */
    public async get_projects_projectId_slots_graph(project_id: number | string, field: string, interval: string, params: SlotsParams): Promise<any> {
        const route = `/v2/projects/${project_id}/slots/graph` +  (field ? ("/on/" + field): "") + ((field && interval)?("/by/" + interval): "");
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/users/:user_id/slots/graph(/on/:field(/by/:interval))`
     * @param user_id string | number
     * @param field string
     * @param interval string
     * @param params any object or default {}
     * @returns any
     */
    public async get_users_userId_slots_graph(user_id: number | string, field: string, interval: string, params: SlotsParams): Promise<any> {
        const route = `/v2/users/${user_id}/slots/graph` +  (field ? ("/on/" + field): "") + ((field && interval)?("/by/" + interval): "");
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/slots`
     * @param params any object or default {}
     * @returns Slot array
     */
    public async get_slots(params: SlotsParams): Promise<Slot[]> {
        const route = "/v2/slots";
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/projects/:project_id/slots`
     * @param project_id string | number
     * @param params any object or default {}
     * @returns Slot array
     */
    public async get_projects_projectId_slots(project_id: number | string, params: SlotsParams): Promise<Slot[]> {
        const route = `/v2/projects/${project_id}/slots`;
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/users/:user_id/slots`
     * @param user_id string | number
     * @param params any object or default {}
     * @returns Slot array
     */
    public async get_users_userId_slots(user_id: number | string, params: SlotsParams): Promise<Slot[]> {
        const route = `/v2/users/${user_id}/slots`;
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/me/slots`
     * @param params any object or default {}
     * @returns Slot array
     */
    public async get_me_slots(params: SlotsParams): Promise<Slot[]> {
        const route = "/v2/me/slots";
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/slots/:id`
     * @param id string | number
     * @returns Slot
     */
    public async get_slots_id(id: number | string): Promise<Slot> {
        const route = `/v2/slots/${id}`;
        return await this.base.get(route, {});
    }
}
