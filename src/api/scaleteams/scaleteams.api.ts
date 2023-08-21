import { BaseApi42 } from "../../base/baseApi42";
import { ScaleTeam } from "./scaleteams.type";
import { ScaleTeamsParams } from "./scaleteams.params.type";

export class ScaleTeamsApi {
    private base: BaseApi42;

    constructor(base: BaseApi42) {
        this.base = base;
    }

    /**
     * api: `GET /v2/scale_teams/graph(/on/:field(/by/:interval))`
     * @param field string
     * @param interval string
     * @param params any object or default {}
     * @returns ScaleTeam array
     */
    public async get_scaleTeams_graph(field: string, interval: string, params: ScaleTeamsParams): Promise<any> {
        const route = "/v2/scale_teams/graph" +  (field ? ("/on/" + field): "") + ((field && interval)?("/by/" + interval): "");
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/projects/:project_id/scale_teams/graph(/on/:field(/by/:interval))`
     * @param project_id string | number
     * @param field string
     * @param interval string
     * @param params any object or default {}
     * @returns ScaleTeam array
     */
    public async get_projects_projectId_scaleTeams_graph(project_id: number | string, field: string, interval: string, params: ScaleTeamsParams): Promise<any> {
        const route = `/v2/projects/${project_id}/scale_teams/graph` +  (field ? ("/on/" + field): "") + ((field && interval)?("/by/" + interval): "");
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/users/:user_id/scale_teams/graph(/on/:field(/by/:interval))`
     * @param user_id string | number
     * @param field string
     * @param interval string
     * @param params any object or default {}
     * @returns ScaleTeam array
     */
    public async get_users_userId_scaleTeams_graph(user_id: number | string, field: string, interval: string, params: ScaleTeamsParams): Promise<any> {
		const route = `/v2/users/${user_id}/scale_teams/graph` +  (field ? ("/on/" + field): "") + ((field && interval)?("/by/" + interval): "");
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/project_sessions/:project_session_id/scale_teams`
     * @param project_session_id string | number
     * @param params any object or default {}
     * @returns ScaleTeam array
     */
    public async get_projectSessions_projectSessionId_scaleTeams(project_session_id: number | string, params: ScaleTeamsParams): Promise<ScaleTeam[]> {
        const route = `/v2/project_sessions/${project_session_id}/scale_teams`;
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/scale_teams`
     * @param params any object or default {}
     * @returns ScaleTeam array
     */
    public async get_scaleTeams(params: ScaleTeamsParams): Promise<ScaleTeam[]> {
        const route = "/v2/scale_teams";
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/projects/:project_id/scale_teams`
     * @param project_id string | number
     * @param params any object or default {}
     * @returns ScaleTeam array
     */
    public async get_projects_projectId_scaleTeams(project_id: number | string, params: ScaleTeamsParams): Promise<ScaleTeam[]> {
        const route = `/v2/projects/${project_id}/scale_teams`;
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/users/:user_id/scale_teams/as_corrector`
     * @param user_id string | number
     * @param params any object or default {}
     * @returns ScaleTeam array
     */
    public async get_users_userId_scaleTeams_asCorrector(user_id: number | string, params: ScaleTeamsParams): Promise<ScaleTeam[]> {
        const route = `/v2/users/${user_id}/scale_teams/as_corrector`;
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/users/:user_id/scale_teams/as_corrected`
     * @param user_id string | number
     * @param params any object or default {}
     * @returns ScaleTeam array
     */
    public async get_users_userId_scaleTeams_asCorrected(user_id: number | string, params: ScaleTeamsParams): Promise<ScaleTeam[]> {
        const route = `/v2/users/${user_id}/scale_teams/as_corrected`;
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/users/:user_id/scale_teams`
     * @param user_id string | number
     * @param params any object or default {}
     * @returns ScaleTeam array
     */
    public async get_users_userId_scaleTeams(user_id: number | string, params: ScaleTeamsParams): Promise<ScaleTeam[]> {
        const route = `/v2/users/${user_id}/scale_teams`;
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/me/scale_teams/as_corrector`
     * @param params any object or default {}
     * @returns ScaleTeam array
     */
    public async get_me_scaleTeams_asCorrector(params: ScaleTeamsParams): Promise<ScaleTeam[]> {
        const route = "/v2/me/scale_teams/as_corrector";
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/me/scale_teams/as_corrected`
     * @param params any object or default {}
     * @returns ScaleTeam array
     */
    public async get_me_scaleTeams_asCorrected(params: ScaleTeamsParams): Promise<ScaleTeam[]> {
        const route = "/v2/me/scale_teams/as_corrected";
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/me/scale_teams`
     * @param params any object or default {}
     * @returns ScaleTeam array
     */
    public async get_me_scaleTeams(params: ScaleTeamsParams): Promise<ScaleTeam[]> {
        const route = "/v2/me/scale_teams";
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/project_sessions/:project_session_id/scale_teams/:id`
     * @param project_session_id string | number
     * @param id string | number
     * @returns ScaleTeam
     */
    public async get_projectSessions_projectSessionId_scaleTeams_id(project_session_id: number | string, id: number | string, params: { project_session_id: string }): Promise<ScaleTeam> {
        const route = `/v2/project_sessions/${project_session_id}/scale_teams/${id}`;
        return await this.base.get(route, params);
    }

    /**
     * api: `GET /v2/scale_teams/:id`
     * @param id string | number
     * @returns ScaleTeam
     */
    public async get_scaleTeams_id(id: number | string, params: { project_session_id: string }): Promise<ScaleTeam> {
        const route = `/v2/scale_teams/${id}`;
        return await this.base.get(route, params);
    }
}
