import { promises } from "dns";
import {BaseApi42} from "../../base/baseApi42";
import { TitlesUser  } from "./titlesUser.type"


export class Accreditations {
    private base: BaseApi42;

    constructor (base: BaseApi42){
        this.base = base;
    }
    /**
     * api: `GET /v2/titles_users`
     * @param params any object or default {}
     * @returns TitlesUser array
     */
    public async get_titles_users(params: any = {}): Promise<TitlesUser>{
        return await this.base.get("/v2/titles_users", params);
    }

}
