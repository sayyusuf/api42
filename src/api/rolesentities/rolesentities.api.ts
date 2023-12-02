import { BaseApi42 } from "../../base/baseApi42";
import { RolesEntity } from "./rolesentities.type";
import { RolesEntitiesParams } from "./rolesentities.params.type";

export class RolesEntitiesApi {
    private base: BaseApi42;

    constructor(base: BaseApi42) {
        this.base = base;
    }

    /**
     * api: `GET /v2/roles_entities/graph(/on/:field(/by/:interval))`
     * @param field string
     * @param interval string
     * @param params any object or default {}
     * @returns RolesEntity array
     */
    public async get_rolesEntities_graph(field: string, interval: string, params?: RolesEntitiesParams): Promise<RolesEntity[]> {
        const route = "/v2/roles_entities/graph" +  (field ? ("/on/" + field): "") + ((field && interval)?("/by/" + interval): "");
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/roles/:role_id/roles_entities`
     * @param role_id string | number
     * @param params any object or default {}
     * @returns RolesEntity array
     */
    public async get_roles_roleId_rolesEntities(role_id: number | string, params?: RolesEntitiesParams): Promise<RolesEntity[]> {
        const route = `/v2/roles/${role_id}/roles_entities`;
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/roles_entities`
     * @param params any object or default {}
     * @returns RolesEntity array
     */
    public async get_rolesEntities(params?: RolesEntitiesParams): Promise<RolesEntity[]> {
        const route = "/v2/roles_entities";
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/roles_entities/:id`
     * @param id string | number
     * @returns RolesEntity
     */
    public async get_rolesEntities_id(id: number | string): Promise<RolesEntity> {
        const route = `/v2/roles_entities/${id}`;
        return await this.base.get(route, {});
    }
}