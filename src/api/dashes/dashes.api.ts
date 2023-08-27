import { BaseApi42 } from "../../base/baseApi42";
import { DashesParams } from "./dashes.params.type";


export class DashesApi {
    private base: BaseApi42;

    constructor(base: BaseApi42) {
        this.base = base;
    }

    /**
     * api:  GET /v2/dashes/graph(/on/:field(/by/:interval))
     * @param field string
     * @param interval string
     * @param params any object or default {}
     * @returns CursusUser array
     */
    public async get_dashes_graph(field: string, interval: string, params: DashesParams): Promise<any> {
        const route = "/v2/dashes/graph" +  (field ? ("/on/" + field): "") + ((field && interval)?("/by/" + interval): "");
        return await this.base.get(route, params);
    }

}
