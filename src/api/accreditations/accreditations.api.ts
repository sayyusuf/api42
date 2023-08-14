import { promises } from "dns";
import {BaseApi42} from "../../base/baseApi42";
import { Accreditation } from "./accreditations.type"
import { AccreditationParams } from "./accreditations.params.type";


export class Accreditations {
    private base: BaseApi42;

    constructor (base: BaseApi42){
        this.base = base;
    }
    /**
     * api: `GET /v2/accreditations`
     * @param params any object or default {}
     * @returns Accreditation array
     */
    public async get_accreditations(params: AccreditationParams): Promise<Accreditation>{
        return await this.base.get("/v2/accreditations", params);
    }

    /**
     * api: `GET /v2/accreditations/:id`
     * @param id string | number 
     * @param params any object or default {}
     * @returns Accreditation object
     */
    public async get_accreditations_id(id: string | number): Promise<Accreditation>{
        return await this.base.get("/v2/accreditations/" + id);
    }
}
