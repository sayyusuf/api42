import { BaseApi42 } from "../../base/baseApi42";
import { DashesUser } from "./dashesusers.type";
import { DashesUsersParams } from "./dashesusers.params.type";

export class DashesUsersApi {
    private base: BaseApi42;

    constructor(base: BaseApi42) {
        this.base = base;
    }

    /**
     * api: `GET /v2/dashes_users/graph(/on/:field(/by/:interval))`
     * @param field string
     * @param interval string
     * @param params any object or default {}
     * @returns DashesUser array
     */
    public async get_dashesUsers_graph(field: string, interval: string, params: DashesUsersParams): Promise<any> {
        const route = "/v2/dashes_users/graph" +  (field ? ("/on/" + field): "") + ((field && interval)?("/by/" + interval): "");
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/dashes_users`
     * @param params any object or default {}
     * @returns DashesUser array
     */
    public async get_dashesUsers(params: DashesUsersParams): Promise<DashesUser[]> {
        const route = "/v2/dashes_users";
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/dashes/:dash_id/dashes_users`
     * @param dash_id string | number
     * @param params any object or default {}
     * @returns DashesUser array
     */
    public async get_dashes_dashId_dashesUsers(dash_id: number | string, params: DashesUsersParams): Promise<DashesUser[]> {
        const route = `/v2/dashes/${dash_id}/dashes_users`;
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/dashes_users/:id`
     * @param id string | number
     * @returns DashesUser
     */
    public async get_dashesUsers_id(id: number | string): Promise<DashesUser> {
        const route = `/v2/dashes_users/${id}`;
        return await this.base.get(route, {});
    }
}
