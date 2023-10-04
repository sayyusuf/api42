import { BaseApi42 } from "../../base/baseApi42";
import { ProjectDataParams } from "./project_data.params.type";
import { ProjectData } from "./project_data.types";

export class ProjectDataApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/project_data
  /**
   *
   * @param params
   * @returns Return all the project data
   */
  public async get_project_data(
    params?: ProjectDataParams
  ): Promise<ProjectData[]> {
    return await this.base.get(`/v2/project_data`, params);
  }

  // GET /v2/project_sessions/:project_session_id/project_data
  /**
   *
   * @param project_session_id
   * @param params
   * @returns Return all the project data of the given Project session
   */
  public async get_project_sessions_projectSessionId_project_data(
    project_session_id?: string,
    params?: ProjectDataParams
  ): Promise<ProjectData[]> {
    return await this.base.get(
      `/v2/project_sessions/${project_session_id}/project_data`,
      params
    );
  }

  // GET /v2/project_data/:id
  /**
   *
   * @param id
   * @returns Get a project datum
   */
  public async get_project_data_id(id: string): Promise<ProjectData> {
    return await this.base.get(`/v2/project_data/${id}`);
  }
}
