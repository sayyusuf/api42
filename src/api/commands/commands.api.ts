import { BaseApi42 } from "../../base/baseApi42";
import { CommandsParams } from "./commands.params.type";

export class CommandsApi {
    private base: BaseApi42;

    constructor(base: BaseApi42) {
        this.base = base;
    }

    /**
     * api: `GET /v2/products/:product_id/commands`
     * @param product_id string | number
     * @param params any object or default {}
     * @returns Command array
     */
    public async get_products_productId_commands(product_id: number | string, params?: CommandsParams): Promise<any[]> {
        const route = `/v2/products/${product_id}/commands`;
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/campus/:campus_id/products/:product_id/commands`
     * @param campus_id string | number
     * @param product_id string | number
     * @param params any object or default {}
     * @returns Command array
     */
    public async get_campus_campusId_products_productId_commands(campus_id: number | string, product_id: number | string, params?: CommandsParams): Promise<any[]> {
        const route = `/v2/campus/${campus_id}/products/${product_id}/commands`;
        return await this.base.get(route, params);
    }
}