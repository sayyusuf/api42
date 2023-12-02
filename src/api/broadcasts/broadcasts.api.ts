import { BaseApi42 } from "../../base/baseApi42";
import { BroadcastsParam } from "./broadcasts.parasm.type";
import { Broadcast } from "./broadcasts.type";

export class BroadcastApi {
    private base: BaseApi42;

    constructor (base: BaseApi42){
        this.base = base;
    }

    /**
     *  `GET /v2/campus/:campus_id/broadcasts`
     * @param campus_id
     */
    public async get_campus_campusId_broadcasts(campus_id: number | string, params?: BroadcastsParam): Promise<Broadcast[]>{
        return await this.base.get("/v2/campus/" + campus_id + "/broadcasts", params);
    }
}