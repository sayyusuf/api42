import { BaseApi42 } from "../../base/baseApi42";
import { ProjectsUsersGraphParams , ProjectsUsersInputs, ProjectsUsersParams} from "./projects_users.params.type";
import { ProjectsUser, ProjectsUser2 } from "./projects_users.type";

export class ProjectsUsersApi {
    private base: BaseApi42;

    constructor(base: BaseApi42){
        this.base = base;
    }

    /**
     *  `GET /v2/projects/:project_id/projects_users/graph(/on/:field(/by/:interval)) `
     * @param project_id number | string
     * @param input ProjectSessionsInputs
     * @param params ProjectSessionsParams
     */
    public async get_projects_projectId_projectsUsers_graph(project_id: number, input?: ProjectsUsersInputs, params?: ProjectsUsersGraphParams): Promise<any>{
       return await this.base.get("/v2/projects/" + project_id  + "/projects_users/graph" + ((input && input.field)? ("/on/" + input?.field): "") + ((input && input.field && input.interval)?("/by/" + input?.interval): ""), params) ;
    } 

   /**
     *  `GET /v2/users/:user_id/projects_users/graph(/on/:field(/by/:interval)) `
     * @param user_id number | string
     * @param input ProjectSessionsInputs
     * @param params ProjectSessionsParams
     */
    public async get_users_userId_projectsUsers_graph(user_id: number, input?: ProjectsUsersInputs, params?: ProjectsUsersGraphParams): Promise<any>{
       return await this.base.get("v2/user/" + user_id  + "/projects_users/graph" + ((input && input.field)? ("/on/" + input?.field): "") + ((input && input.field && input.interval)?("/by/" + input?.interval): ""), params) ;
    }

   /**
     *  `GET /v2/projects_users/graph(/on/:field(/by/:interval)) `
     * @param input ProjectSessionsInputs
     * @param params ProjectSessionsParams
     */
    public async get_projectsUsers_graph(input?: ProjectsUsersInputs, params?: ProjectsUsersGraphParams): Promise<any>{
       return await this.base.get("/v2/projects_users/graph" + ((input && input.field)? ("/on/" + input?.field): "") + ((input && input.field && input.interval)?("/by/" + input?.interval): ""), params) ;
    }

    /**
     * `GET /v2/projects/:project_id/projects_users `
     */
    public async get_projects_projectId_projectsUsers(project_id: number, params?: ProjectsUsersParams): Promise<ProjectsUser>{
        return await this.base.get("/v2/projects/" + project_id + "/projects_users", params);
    }

    /**
     * `GET /v2/users/:user_id/projects_users `
     */
    public async get_users_userId_projectsUsers(user_id: number, params?: ProjectsUsersParams): Promise<ProjectsUser>{
        return await this.base.get("/v2/users/" + user_id + "/projects_users", params);
    }
    
    /**
     * `GET /v2/users/:user_id/projects_users `
     */
    public async get_projectsUsers(params?: ProjectsUsersParams): Promise<ProjectsUser>{
        return await this.base.get("/v2/projects_users", params);
    }

    /**
     * ` GET /v2/projects_users/:id `
     */
    public async get_projectsUsers_id(id: number | string, params?: ProjectsUsersParams): Promise<ProjectsUser2>{
        return await this.base.get("/v2/projects_users/" + id, params);
    }


}