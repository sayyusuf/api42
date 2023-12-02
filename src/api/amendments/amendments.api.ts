import { BaseApi42 } from "../../base/baseApi42";
import { AmendmentsParams, AmendmentsParams2 } from "./amendments.params.type";

export class AmendmentsApi {
    private base: BaseApi42

    constructor(base: BaseApi42){
        this.base = base;
    }

    /**
     * `GET /v2/amendments`
     * 
     */
    public async get_amendments(params?: AmendmentsParams): Promise<any>{
        return await this.base.get("/v2/amendments", params);
    }

    /**
     * `GET /v2/users/:user_id/amendments`
     * 
     */
    public async get_users_userId_amendments(user_id:number, params?: AmendmentsParams): Promise<any>{
        return await this.base.get("GET /v2/users/" + user_id + "/amendments", params);
    }
     
   /**
     * `GET /v2/internships/:internship_id/amendments`
     * 
     */
    public async get_internships_internshipId_amendments(internship_id:number, params?: AmendmentsParams): Promise<any>{
        return await this.base.get("/v2/internships/" + internship_id + "/amendments", params);
    }

    /**
     * `GET /v2/amendments/:id`
     * 
     */
    public async get_amendments_id(id: number, params?: AmendmentsParams2): Promise<any>{
        return await this.base.get("/v2/amendments/" + id, params);
    }



}