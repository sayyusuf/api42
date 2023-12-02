import { BaseApi42 } from "../../base/baseApi42";
import { CampusParams } from "./campus.params.type";
import { Campus } from "./campus.type";

export class CampusApi {
    private base: BaseApi42;

    constructor(base:BaseApi42){
        this.base = base;
    }

    /**
     * `GET /v2/campus`
     */
    public async get_campus(params?: CampusParams):Promise<Campus[]>{
        return await this.base.get("/v2/campus", params);
    }

    /**
     * `GET /v2/campus/id`
     * @param id number | string
     */
    public async get_campus_id(id: number | string):Promise<Campus>{
        return await this.base.get("/v2/campus/" + id);
    }
}