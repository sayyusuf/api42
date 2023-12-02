import { BaseApi42 } from "../../base/baseApi42";
import { CoalitionIdParams, CoalitionsParams } from "./coalitions.params.type";
import { Coalition } from "./coalitions.type";

export class CoalitionsApi {
    private base: BaseApi42;

    constructor(base: BaseApi42) {
        this.base = base;
    }

    /**
     * api: `GET /v2/coalitions`
     * @param params any object or default {}
     * @returns Coalition array
     */
    public async get_coalitions(params?: CoalitionsParams): Promise<Coalition[]> {
        const route = "/v2/coalitions";
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/users/:user_id/coalitions`
     * @param user_id string | number
     * @param params any object or default {}
     * @returns Coalition array
     */
    public async get_users_userId_coalitions(user_id: number | string, params?: CoalitionsParams): Promise<Coalition[]> {
        const route = `/v2/users/${user_id}/coalitions`;
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/blocs/:bloc_id/coalitions`
     * @param bloc_id string | number
     * @param params any object or default {}
     * @returns Coalition array
     */
    public async get_blocs_blocId_coalitions(bloc_id: number | string, params?: CoalitionsParams): Promise<Coalition[]> {
        const route = `/v2/blocs/${bloc_id}/coalitions`;
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/coalitions/:id`
     * @param id string | number
     * @returns Coalition array
     */
    public async get_coalitions_id(id: number | string, params?: CoalitionIdParams): Promise<Coalition> {
        const route = `/v2/coalitions/${id}`;
        return await this.base.get(route, params);
    }
}