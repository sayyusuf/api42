import { AnyTxtRecord } from "dns";
import { TagsParams } from "./tags.params.types";
import { TagsTypes } from "./tags.types";
import {BaseApi42} from "../../base/baseApi42";

export class TagsApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}


    /**
     * api: GET /v2/tags `
     * @param 
     * @returns Return all the tags
     */
    public async get_tags(params: TagsParams): Promise<TagsTypes>{
        return await this.base.get("/v2/tags/", params);
    }

  
    /**
     * api: GET /v2/tags/:id  `
     * @param id
     * @returns Get a tag
     */
    public async get_tags_id(id: string, params: TagsParams): Promise<TagsTypes>{
        return await this.base.get("/v2/tags/" + id, params);
    }

  /**
     * api: GET /v2/users/:user_id/tags 
     * @param user_id
     * @returns Return all the tags of the given User
     */
    public async get_tag_user_id(user_id: string, params: TagsParams): Promise<TagsTypes>{
        return await this.base.get("/v2/users/" + user_id + "/tags", params);
    }

  /**
     * api: GET /v2/cursus/:cursus_id/tags 
     * @param cursus_id
     * @returns Return all the tags of the given Cursus
     */
    public async get_tags_cursus_id(cursus_id: string, params: TagsParams): Promise<TagsTypes>{
        return await this.base.get("/v2/cursus/" + cursus_id + "/tags", params);
    }

   /**
     * api: GET /v2/notions/:notion_id/tags 
     * @param notion_id
     * @returns Return all the tags of the given Notion
     */
    public async get_tags_notion_id(notion_id: string, params: TagsParams): Promise<TagsTypes>{
        return await this.base.get("/v2/notions/" + notion_id + "/tags", params);
    }

     /**
     * api: GET /v2/issues/:issue_id/tags 
     * @param issue_id
     * @returns Return all the tags of the given Issue
     */
    public async get_tags_issue_id(issue_id: string, params: TagsParams): Promise<TagsTypes>{
        return await this.base.get("/v2/issues/" + issue_id + "/tags", params);
    }
  
     /**
     * api: GET /v2/projects/:project_id/tags 
     * @param project_id
     * @returns Return all the tags of the given Project
     */
    public async get_tags_project_id(project_id: string, params: TagsParams): Promise<TagsTypes>{
        return await this.base.get("/v2/projects/" + project_id + "/tags", params);
    }
}
