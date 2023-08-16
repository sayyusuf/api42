import { BaseApi42 } from "../../base/baseApi42";
import { AnnouncementsParams } from "./announcements.params.type";
import { Announcement } from "./announcements.type";

export class AnnouncementsApi {
    private base: BaseApi42;

    constructor (base: BaseApi42){
        this.base = base;
    }

    /**
     * ` GET /v2/announcements/graph(/on/:field(/by/:interval))`
     */
    public async get_announcements_graph(field: string, params?: AnnouncementsParams) :Promise<any>{
        return await this.base.get("/v2/announcements/graph" + field);
    }

   /**
     * ` GET /v2/announcements/:id`
     * @param id `string | number`
     */
    public async get_announcements_id(id: string | number ) :Promise<Announcement>{
        return await this.base.get("/v2/announcements/" + id);
    }
}