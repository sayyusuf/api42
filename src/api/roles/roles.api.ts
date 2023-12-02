
import { BaseApi42 } from "../../base/baseApi42";
import { RolesParamsType } from "./roles.params.type";
import { Role } from "./roles.type";

export class RolesApi {
    private base: BaseApi42;

    constructor(base: BaseApi42){
        this.base = base;
    }

    /**
     * ` GET /v2/roles `
     */
    public async  get_roles(params?: RolesParamsType) :Promise<Role[]>{
        return await this.base.get("/v2/roles", params);
    }


    /**
     * ` GET /v2/users/:user_id/roles `
     */
    public async  get_users_userId_roles(user_id: number, params?: RolesParamsType) :Promise<Role[]>{
        return await this.base.get("/v2/users/" + user_id + "/roles ", params);
    }

    /**
     * ` GET /v2/roles/id `
     */
    public async  get_roles_id(id: number, params?: RolesParamsType) :Promise<Role>{
        return await this.base.get("/v2/roles/" + id, params);
    }

}
