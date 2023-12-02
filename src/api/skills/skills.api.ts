import { BaseApi42 } from "../../base/baseApi42";
import { Skill } from "./skills.type";
import { SkillsParams } from "./skills.params.type";

export class SkillsApi {
    private base: BaseApi42;

    constructor(base: BaseApi42) {
        this.base = base;
    }

    /**
     * api: `GET /v2/skills`
     * @param params any object or default {}
     * @returns Skill array
     */
    public async get_skills(params?: SkillsParams): Promise<Skill[]> {
        const route = "/v2/skills";
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/cursus/:cursus_id/skills`
     * @param cursus_id string | number
     * @param params any object or default {}
     * @returns Skill array
     */
    public async get_cursus_cursusId_skills(cursus_id: number | string, params?: SkillsParams): Promise<Skill[]> {
        const route = `/v2/cursus/${cursus_id}/skills`;
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/skills/:id`
     * @param id string | number
     * @returns Skill
     */
    public async get_skills_id(id: number | string): Promise<Skill> {
        const route = `/v2/skills/${id}`;
        return await this.base.get(route, {});
    }
}
