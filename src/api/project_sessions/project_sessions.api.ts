import { BaseApi42 } from "../../base/baseApi42";
import { ProjectSessionsParams, ProjectSessionsInputs, ProjectSessionsGraphParams } from "./project_sessions.params.type";
import { ProjectSession } from "./project_sessions.type";

export class ProjectSessionsApi {
    private base: BaseApi42;

    constructor(base: BaseApi42){
        this.base = base;
    }

    /**
     *` GET /v2/projects/:project_id/project_sessions/graph(/on/:field(/by/:interval)) `
     * @param roject_id number | string
     * @param input ProjectSessionsInputs
     * @param params ProjectSessionsParams
     */
    public async  get_projects_projectId_projectSessions_graph(project_id: number | string ,input?: ProjectSessionsInputs, params?:ProjectSessionsGraphParams) :Promise<any>{
       return await this.base.get("/v2/projects/" + project_id + "/project_sessions/graph" + ((input && input.field)? ("/on/" + input?.field): "") + ((input && input.field && input.interval)?("/by/" + input?.interval): ""), params) ;
    }

    /**
     * `GET /v2/project_sessions/graph(/on/:field(/by/:interval))`
     * @param input ProjectSessionsInputs
     * @param params ProjectSessionsParams
     */
    public async get_projectSessions_graph(input?: ProjectSessionsInputs, params?: ProjectSessionsGraphParams) : Promise<any>{
        return await this.base.get("/v2/project_sessions/graph" + ((input && input.field)? ("/on/" + input?.field): "") + ((input && input.field && input.interval)?("/by/" + input?.interval): ""), params) ;
        
    }

    /**
     * `GET /v2/projects/:project_id/project_sessions `
     * @param project_id number
     * @param params ProjectSessionsParams
     */
    public async get_projects_projectId_projectSessions(project_id: number, params?: ProjectSessionsParams): Promise<ProjectSession> {
        return await this.base.get("/v2/projects/" + project_id + "/project_sessions", params);
    }

    /**
     * `GET /v2/project_sessions`
     * @param params ProjectSessionsParams
     */
    public async get_projectSessions(params?: ProjectSessionsParams): Promise<ProjectSession> {
        return await this.base.get("/v2/project_sessions", params);
    }

    /**
     * `GET /v2/project_sessions/:id `
     * @param project_id number
     */
    public async get_projectSessions_id(id: number): Promise<ProjectSession>{
        return await this.base.get("/v2/project_sessions/" + id);
    }

}