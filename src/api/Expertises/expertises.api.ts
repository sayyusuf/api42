import { AnyTxtRecord } from "dns";
import { ExpertisesParams } from "./expertises.params.types";
import { ExpertisesTypes } from "./expertises.types";
import {BaseApi42} from "../../base/baseApi42";

export class ExpertisesApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}


    /**
     * api: `GET /v2/expertises  `
     * @param 
     * @returns Return all the expertises
     */
    public async get_expertises(params: ExpertisesParams): Promise<ExpertisesTypes>{
        return await this.base.get("/v2/expertises", params);
    }

   /**
     * api: `GET /v2/expertises/:id   `
     * @param id
     * @returns Get an expertise
     */
    public async get_expertises_id(id: string, params: ExpertisesParams): Promise<ExpertisesTypes>{
        return await this.base.get("/v2/expertises/" + id, params);
    }
}
