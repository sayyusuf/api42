import {BaseApi42} from "../../base/baseApi42"
import { ProjectsParams } from "./projects.params.type";
import { Project } from "./projects.type";

export class ProjectsApi {
    private base: BaseApi42;

    constructor(base: BaseApi42){
        this.base = base;
    }

    /**
     * ` GET /v2/cursus/:cursus_id/projects`
     * @param cursus_id number
     * @param params ProjectsParams
     * @returns Project array
     */
    public async  get_cursus_cursusId_projects(cursus_id: number, params?: ProjectsParams): Promise<Project[]>{
        return await this.base.get("/v2/cursus/" + cursus_id + "/projects", params);
    }

    /**
     * `GET /v2/projects/:project_id/projects`
     * @param project_id number
     * @param params ProjectsParams
     * @returns Project array
     */
    public async get_projects_projectId_projects(project_id: number, params?: ProjectsParams): Promise<Project[]>{
        return await this.base.get("/v2/projects/" + project_id + "/projects", params);
    }

    /**
     * `GET /v2/projects`
     * @param params ProjectsParams
     * @returns Project array 
     */
    public async get_projects(params?:ProjectsParams): Promise<Project[]>{
        return await this.base.get("/v2/projects", params);
    }

     /**
     * `GET /v2/me/projects`
     * @param params ProjectsParams
     * @returns Project array
     */
    public async get_me_projects(params?:ProjectsParams): Promise<Project[]>{
        return await this.base.get("/v2/me/projects", params);
    }

    /**
     * `GET /v2/projects/:id`
     * @param id number
     * @param params ProjectsParams
     * @returns Project array 
     */
    public async get_projects_id(id:number, params?:ProjectsParams): Promise<Project[]>{
        return await this.base.get("/v2/projects/" + id, params);
    }


   
}