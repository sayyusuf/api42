import { BaseApi42 } from "../../base/baseApi42";
import { CoalitionsUserParams } from "./coalitionsusers.params.type";
import { CoalitionsUser } from "./coalitionsusers.type";

export class CoalitionsUsersApi {
    private base: BaseApi42;

    constructor(base: BaseApi42) {
        this.base = base;
    }

    /**
     * api: `GET /v2/coalitions/:coalition_id/coalitions_users`
     * @param coalition_id string | number
     * @param params any object or default {}
     * @returns CoalitionsUser array
     */
    public async get_coalitions_coalitionId_coalitionsUsers(coalition_id: number | string, params: CoalitionsUserParams): Promise<CoalitionsUser[]> {
        const route = `/v2/coalitions/${coalition_id}/coalitions_users`;
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/coalitions_users`
     * @param params any object or default {}
     * @returns CoalitionsUser array
     */
    public async get_coalitionsUsers(params: CoalitionsUserParams): Promise<CoalitionsUser[]> {
        const route = "/v2/coalitions_users";
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/users/:user_id/coalitions_users`
     * @param user_id string | number
     * @param params any object or default {}
     * @returns CoalitionsUser array
     */
    public async get_users_userId_coalitionsUsers(user_id: number | string, params: CoalitionsUserParams): Promise<CoalitionsUser[]> {
        const route = `/v2/users/${user_id}/coalitions_users`;
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/coalitions_users/:id`
     * @param id string | number
     * @returns CoalitionsUser array
     */
    public async get_coalitionsUsers_id(id: number | string, params: any): Promise<CoalitionsUser> {
        const route = `/v2/coalitions_users/${id}`;
        return await this.base.get(route, params);
    }
}