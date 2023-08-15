import { BaseApi42 } from "../../base/baseApi42";
import { AchievementsUsersParams } from "./achievements_users.params.type";
import { AchievementsUser } from "./achievements_users.type";

export class AchievementsUsersApi {
    private base: BaseApi42;
    
    constructor(base: BaseApi42){
        this.base = base;
    }

    /**
     * `GET /v2/achievements_users`
     * @param params AchievementsUserParams
     * @returns AchievementsUser array
     */
    public async get_achievementsUsers(params?: AchievementsUsersParams): Promise<AchievementsUser[]>{

        return await this.base.get("/v2/achievements_users", params);
    }

    /**
     * `GET /v2/achievements/:achievement_id/achievements_users`
     * @param achievement_id number
     * @param params AchievementsUserParams
     * @returns AchievementsUser array
     */
    public async get_achievements_achievementId_achievementsUsers(achievement_id : number, params ?:AchievementsUsersParams): Promise<AchievementsUser[]>{

        return await this.base.get("v2/achievements/" + achievement_id + "/achievements_users", params);
    }

    /**
     * `GET /v2/achievements_users/:id `
     * @param id number
     * @returns AchievementsUser
     */
    public async get_achievementsUsers_id(id: number): Promise<AchievementsUser>{

        return await this.base.get("/v2/achievements_users/" + id);
    }

}