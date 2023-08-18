import { AnyTxtRecord } from "dns";
import { TagsUsersParams } from "./tagsusers.params.types";
import {BaseApi42} from "../../base/baseApi42";

export class UsersApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}


    /**
     * api: GET /v2/tags_users/:id `
     * @param id
     * @returns Get a tags user
     */
    public async get_tags_users_id(id: string, params: TagsUsersParams): Promise<Any>{
        return await this.base.get("/v2/tags_users/" + id, params);
    }

   /**
     * api: GET /v2/tags_users 
     * @param
     * @returns Return all the tags users
     */
    public async get_tags_users(params: TagsUsersParams): Promise<Any>{
        return await this.base.get("/v2/tags_users/", params);
    }

   /**
     * api: GET /v2/users/:user_id/tags_users 
     * @param user_id
     * @returns Return all the tags users of the given User
     */
    public async get_tags_users_user_id(params: TagsUsersParams): Promise<Any>{
        return await this.base.get("/v2/users/" + user_id + "/tags_users", params);
    }

   /**
     * api: GET /v2/cursus/:cursus_id/tags_users 
     * @param cursus_id
     * @returns Return all the tags users of the given Cursus
     */
    public async get_tags_users_cursus_id(params: TagsUsersParams): Promise<Any>{
        return await this.base.get("/v2/cursus/" + cursus_id + "/tags_users", params);
    }

  /**
     * api: GET /v2/campus/:campus_id/tags_users 
     * @param campus_id
     * @returns Return all the tags users of the given Campus
     */
    public async get_tags_users_campus_id(params: TagsUsersParams): Promise<Any>{
        return await this.base.get("/v2/campus/" + cursus_id + "/tags_users", params);
    }

  /**
     * api: GET /v2/tags/:tag_id/tags_users 
     * @param tag_id
     * @returns Return all the tags users of the given Tag
     */
    public async get_tags_users_tag_id(params: TagsUsersParams): Promise<Any>{
        return await this.base.get("/v2/tags/" + tag_id + "/tags_users", params);
    }

}