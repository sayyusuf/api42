import { BaseApi42 } from "../../base/baseApi42";
import { BlocsParams } from "./blocs.params.type";
import { Bloc } from "./blocs.type";

export class BlocsApi {
    private base: BaseApi42;

    constructor (base: BaseApi42) {
        this.base = base;
    }
    /**
     * `GET /v2/blocs`
     */
    public async get_blocs(params?:BlocsParams): Promise<Bloc[]>{
        return await this.base.get("/v2/blocs", params);
    }
    
    /**
     * `GET /v2/blocs/:id`
     * @param id number | string
     */
    public async get_blocs_id(id: number | string):Promise<Bloc>{
        return await this.base.get("/v2/blocs/" + id);
    }
}