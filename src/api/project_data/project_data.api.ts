import { BaseApi42 } from "../../base/baseApi42";

export class ProjectDataApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/project_data
  /**
   * Return all the project data
   */
  public async get_project_data() {
    return await this.base.get(`/v2/project_data`);
  }

  // GET /v2/project_sessions/:project_session_id/project_data
  /**
   * Return all the project data of the given Project session
   */
  public async get_project_sessions_projectSessionId_project_data(
    project_session_id?: string,
    sort?: string,
    filter?: string,
    range?: string
  ) {
    return await this.base.get(
      `/v2/project_sessions/${project_session_id}/project_data`
    );
  }

  // GET /v2/project_data/:id
  /**
   * Get a project datum
   */
  public async get_project_data_id(id: string) {
    return await this.base.get(`/v2/project_data/${id}`);
  }
}
