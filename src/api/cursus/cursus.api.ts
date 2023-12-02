import { BaseApi42 } from "../../base/baseApi42";
import { Cursus } from "./cursus.type";
import { CursusParams } from "./cursus.params.type";

export class CursusApi {
    private base: BaseApi42;

    constructor(base: BaseApi42) {
        this.base = base;
    }

    /**
     * api: `GET /v2/cursus`
     * @param params any object or default {}
     * @returns Cursus array
     */
    public async get_cursus(params?: CursusParams): Promise<Cursus[]> {
        const route = "/v2/cursus";
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/cursus/:id`
     * @param id string | number
     * @returns Cursus
     */
    public async get_cursus_id(id: number | string): Promise<Cursus> {
        const route = `/v2/cursus/${id}`;
        return await this.base.get(route, {});
    }
}
