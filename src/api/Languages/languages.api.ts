import { AnyTxtRecord } from "dns";
import { LanguagesParams  } from "./languages.params.types";
import { LanguageType  } from "./languages.types";
import {BaseApi42} from "../../base/baseApi42";

export class LanguagesApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}


    /**
     * api: `GET /v2/languages   `
     * @param 
     * @returns Return all the languages
     */
    public async get_languages(params: LanguagesParams): Promise<LanguageType>{
        return await this.base.get("/v2/languages", params);
    }


    /**
     * api: `GET /v2/languages/:id  `
     * @param id
     * @returns Get a language
     */
    public async get_languages_id(id: string, params: LanguagesParams): Promise<LanguageType>{
        return await this.base.get("/v2/languages/" + id, params);
    }


   
}
