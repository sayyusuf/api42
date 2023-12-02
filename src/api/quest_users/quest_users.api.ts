import { BaseApi42 } from "../../base/baseApi42";
import { QuestUsersGraphParams, QuestUsersInputs, QuestUsersParams } from "./quest_users.params.type";
import { QuestsUser } from "./quest_users.type";

export class QuestsUsersApi {
    private base: BaseApi42;

    constructor(base: BaseApi42){
        this.base = base;
    }

    /**
     * ` GET /v2/quests_users/graph(/on/:field(/by/:interval)) `
     */
    public async  get_questsUsers_graph(input?: QuestUsersInputs, params?: QuestUsersGraphParams): Promise<any>{
        return await this.base.get("GET /v2/quest_users/graph" + ((input && input.field)? ("/on/" + input?.field): "") + ((input && input.field && input.interval)?("/by/" + input?.interval): ""), params) ;
    }

    /**
     * `GET /v2/quests/:quest_id/quests_users `
     */
    public async get_quests_questId_questsUsers(quest_id: number, params?: QuestUsersParams): Promise<QuestsUser[]>{
        return await this.base.get("/v2/quests/" + quest_id + "/quests_users", params);
    }

    /**
     * ` GET /v2/users/:user_id/quests_users `
     */
    public async get_users_userId_questsUsers(user_id: number, params?: QuestUsersParams): Promise<QuestsUser[]>{
        return await this.base.get("/v2/users/" + user_id + "/quests_users", params);
    }

    /**
     * `GET /v2/quests_users `
     */
    public async get_questsUsers(params?: QuestUsersParams): Promise<QuestsUser[]>{
        return await this.base.get("/v2/quests_users", params);
    }

    /**
     * `GET /v2/quests_users/:id `
     */
     public async get_questsUsers_id(id: number | string): Promise<QuestsUser>{
        return await this.base.get("/v2/quests_users/" + id);
    }   


}