import { BaseApi42 } from "../../base/baseApi42";
import { CursusUser } from "./cursususers.type";
import { CursusUsersParams } from "./cursususers.params.type";

export class CursusUsersApi {
    private base: BaseApi42;

    constructor(base: BaseApi42) {
        this.base = base;
    }

    /**
     * api: `GET /v2/cursus_users/graph(/on/:field(/by/:interval))`
     * @param field string
     * @param interval string
     * @param params any object or default {}
     * @returns CursusUser array
     */
    public async get_cursusUsers_graph(field: string, interval: string, params?: CursusUsersParams): Promise<any> {
        const route = "/v2/cursus_users/graph" +  (field ? ("/on/" + field): "") + ((field && interval)?("/by/" + interval): "");
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/cursus_users`
     * @param params any object or default {}
     * @returns CursusUser array
     */
    public async get_cursusUsers(params?: CursusUsersParams): Promise<CursusUser[]> {
        const route = "/v2/cursus_users";
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/users/:user_id/cursus_users`
     * @param user_id string | number
     * @param params any object or default {}
     * @returns CursusUser array
     */
    public async get_users_userId_cursusUsers(user_id: number | string, params?: CursusUsersParams): Promise<CursusUser[]> {
        const route = `/v2/users/${user_id}/cursus_users`;
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/cursus/:cursus_id/cursus_users`
     * @param cursus_id string | number
     * @param params any object or default {}
     * @returns CursusUser array
     */
    public async get_cursus_cursusId_cursusUsers(cursus_id: number | string, params?: CursusUsersParams): Promise<CursusUser[]> {
        const route = `/v2/cursus/${cursus_id}/cursus_users`;
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/cursus_users/:id`
     * @param id string | number
     * @returns CursusUser
     */
    public async get_cursusUsers_id(id: number | string): Promise<CursusUser> {
        const route = `/v2/cursus_users/${id}`;
        return await this.base.get(route, {});
    }
}
