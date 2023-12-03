import { BaseApi42 } from "../../base/baseApi42";
import { AppsParams } from "./apps.params.type";
import { App } from "./apps.type";

export class AppsApi {
    private base: BaseApi42;

    constructor (base: BaseApi42){
        this.base = base;
    }

    /**
     * `GET /v2/apps`
     */
    public async get_apps(params?: AppsParams): Promise<App[]>{
        return await this.base.get("/v2/apps", params);
    }

    /**
     * `GET /v2/users/:user_id/apps `
     * @param user_id string | number
     */
    public async get_users_userId_apps(user_id: string | number, params?: AppsParams): Promise<App[]>{
        return await this.base.get("/v2/users/" + user_id + "/apps", params);
    }

    /**
     * `GET /v2/apps/:id`
     * @param id string | number
     */
    public async get_apps_id(id: string | number): Promise<App> {
        return await this.base.get("/v2/apps/" + id);
    }
}