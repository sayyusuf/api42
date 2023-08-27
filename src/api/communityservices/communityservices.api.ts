import { BaseApi42 } from "../../base/baseApi42";
import { CommunityServicesParams } from "./communityservices.params.type";
import { CommunityService } from "./communityservices.type";

export class CommunityServicesApi {
    private base: BaseApi42;

    constructor(base: BaseApi42) {
        this.base = base;
    }

    /**
     * api: `GET /v2/community_services/graph(/on/:field(/by/:interval))`
     * @param field string
     * @param interval string
     * @param params any object or default {}
     * @returns CommunityService array
     */
    public async get_communityServices_graph(field: string, interval: string, params?: CommunityServicesParams): Promise<any> {
        const route = "/v2/community_services/graph" +  (field ? ("/on/" + field): "") + ((field && interval)?("/by/" + interval): "");
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/closes/:close_id/community_services`
     * @param close_id string | number
     * @param params any object or default {}
     * @returns CommunityService array
     */
    public async get_closes_closeId_communityServices(close_id: number | string, params?: CommunityServicesParams): Promise<CommunityService[]> {
        const route = `/v2/closes/${close_id}/community_services`;
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/community_services`
     * @param params any object or default {}
     * @returns CommunityService array
     */
    public async get_communityServices(params?: CommunityServicesParams): Promise<CommunityService[]> {
        const route = "/v2/community_services";
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/community_services/:id`
     * @param id string | number
     * @returns CommunityService
     */
    public async get_communityServices_id(id: number | string): Promise<CommunityService> {
        const route = `/v2/community_services/${id}`;
        return await this.base.get(route, {});
    }
}
