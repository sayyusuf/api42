import { BaseApi42 } from "../../base/baseApi42";
import { Subnotion } from "./subnotions.type";
import { SubnotionsParams } from "./subnotions.params.type";

export class SubnotionsApi {
    private base: BaseApi42;

    constructor(base: BaseApi42) {
        this.base = base;
    }

    /**
     * api: `GET /v2/notions/:notion_id/subnotions`
     * @param notion_id string | number
     * @param params any object or default {}
     * @returns Subnotion array
     */
    public async get_notions_notionId_subnotions(notion_id: number | string, params?: SubnotionsParams): Promise<Subnotion[]> {
        const route = `/v2/notions/${notion_id}/subnotions`;
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/subnotions`
     * @param params any object or default {}
     * @returns Subnotion array
     */
    public async get_subnotions(params?: SubnotionsParams): Promise<Subnotion[]> {
        const route = "/v2/subnotions";
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/subnotions/:id`
     * @param id string | number
     * @returns Subnotion
     */
    public async get_subnotions_id(id: number | string): Promise<Subnotion> {
        const route = `/v2/subnotions/${id}`;
        return await this.base.get(route, {});
    }
}
