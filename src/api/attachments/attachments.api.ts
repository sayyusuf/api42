import { BaseApi42 } from "../../base/baseApi42";
import { AttachmentsParams } from "./attachments.params.type";
import { Attachment } from "./attachments.type";

export class AttachmentsApi {
    private base: BaseApi42;

    constructor (base: BaseApi42){
        this.base = base;
    }

    /**
     * ` GET /v2/project_sessions/:project_session_id/attachments `
     * @param project_session_id : number | string
     */
    public async  get_projectSessions_projectSessionId_attachments(project_session_id: number | string, params?: AttachmentsParams):Promise<[]>{
        return await this.base.get("/v2/project_sessions/" + project_session_id + "/attachments ", params);
    }

    /**
     * `GET /v2/projects/:project_id/attachments`
     * @param project_id: number | string
     */
    public async get_projects_projectId_attachments(project_id: number | string, params?: AttachmentsParams): Promise<[]>{
        return await this.base.get("/v2/projects/" + project_id + "/attachments", params);
    }

    /**
     * `GET /v2/attachments`
     */
    public async get_attachments(params?: AttachmentsParams):Promise<[]>{
        return await this.base.get("/v2/attachments", params);
    }

    /**
     * `GET /v2/project_sessions/:project_session_id/attachments/:id `
     * @param project_session_id string | number
     * @param id string | number
     */
    public async get_projectSessions_projectSessionId_attachments_id(project_session_id: number | string, id: number |string): Promise<Attachment>{
        return await this.base.get("/v2/project_sessions/" + project_session_id + "/attachments/" + id);
    }

    /**
     * GET /v2/attachments/:id
     * @pram id number | string
     */
    public async get_attachments_id(id: number | string): Promise<Attachment>{
        return await this.base.get("/v2/attachments/" + id);
    }




}