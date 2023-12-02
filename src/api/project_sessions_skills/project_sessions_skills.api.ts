
import { BaseApi42 } from "../../base/baseApi42";
import { ProjectSessionsSkillsParams } from "./project_sessions_skills.params.type";
import { ProjectSessionsSkill } from "./project_sessions_skills.type";

export class ProjectSessionsSkillsApi {
    private base: BaseApi42;

    constructor(base: BaseApi42){
        this.base = base;
    }

    /**
     * `GET /v2/project_sessions_skills`
     */
    public async get_projectSessionsSkills(params?:ProjectSessionsSkillsParams): Promise<ProjectSessionsSkill[]>{
        return await this.base.get("/v2/project_sessions_skills", params);
    }

    /**
     * `GET /v2/project_sessions/:project_session_id/project_sessions_skills`
     * @param project_session_id: number
     * @returns ProjectSessionsSkill array
     */
    public async get_projectSessions_projectSessionId_projectSessionsSkills(project_session_id: number, params?:ProjectSessionsSkillsParams): Promise<ProjectSessionsSkill[]>{
        return await this.base.get("/v2/project_sessions/" + project_session_id + "/project_sessions_skills", params);
    }

    /**
     * `GET /v2/skills/:skill_id/project_sessions_skills`
     *@param skill_id number
     @return ProjectSessionsSkill  array
     */
    public async get_skills_skillId_projectSessionsSkills(skill_id: number, params?:ProjectSessionsSkillsParams): Promise<ProjectSessionsSkill[]>{
        return await this.base.get("/v2/skills/" + skill_id + "/project_sessions_skills", params);
    }

    /**
     * `GET /v2/project_sessions_skills/:id`
     * @param id number
     * @returns ProjectSessionsSkill
     */
    public async get_projectSessionsSkills_id(id: number): Promise<ProjectSessionsSkill>{
        return await this.base.get("/v2/project_sessions_skills/" + id);
    }

    /**
     *`GET /v2/project_sessions/:project_session_id/project_sessions_skills/:id` 
     * @param project_session_id number
     * @param id number
     * @returns ProjectSessionsSkill
     */
    public async get_projectSessions_projectSessionId_projectSessionsSkills_id(project_session_id: number, id: number): Promise<ProjectSessionsSkill>{
        return await this.base.get("/v2/project_sessions/" + project_session_id + "/project_sessions_skills/" + id);
    }
}