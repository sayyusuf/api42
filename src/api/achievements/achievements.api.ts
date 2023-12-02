import {BaseApi42} from "../../base/baseApi42";
import { Achievement } from "./achievements.type";

export class AchievementsApi {
    private base: BaseApi42;

    constructor (base: BaseApi42){
        this.base = base;
    }
    /**
     * api: `GET /v2/achievements/:id`
     * @param id number
     * @returns Achievements array
     */
    public async get_achievements_id(id: number): Promise<Achievement>{

        return await this.base.get("/v2/achievements/" + id);
    }
}

