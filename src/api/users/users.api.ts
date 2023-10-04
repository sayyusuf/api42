import { BaseApi42 } from "../../base/baseApi42";
import { UsersParams, UsersParams2 } from "./users.params.type";
import { User } from "./users.types";

export class UsersApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/users/graph(/on/:field(/by/:interval))
  /**
   *
   * @param params
   * @returns Return grouped temporal data on users
   */
  public async users_graph(params?: UsersParams) {
    return await this.base.get(`/v2/users/graph`, params);
  }

  // GET /v2/users/:id/locations_stats
  /**
   * Get location stats of a User.
   * @param id required. Must be String
   * @param begin_at optional. Must be String
   * @param end_at optional. Must be String
   * @param time_zone optional. Must be String
   * @returns will return the data from the last 4 months
   */
  public async location_stats(
    id: string,
    begin_at?: string,
    end_at?: string,
    time_zone?: string
  ): Promise<any> {
    return await this.base.get(`/v2/users/${id}/locations_stats`, {
      begin_at,
      end_at,
      time_zone,
    });
  }

  // GET /v2/coalitions/:coalition_id/users
  /**
   *
   * @param coalition_id
   * @param params
   * @returns Return all the users of the given Coalition
   */
  public async coalitions_users(
    coalition_id: string,
    params?: UsersParams2
  ): Promise<User[]> {
    return await this.base.get(`/v2/coalitions/${coalition_id}/users`, params);
  }

  // GET /v2/dashes/:dash_id/users
  /**
   *
   * @param dash_id
   * @param params
   * @returns Return all the users of the given Dash
   */
  public async dashes_dashId_users(
    dash_id: string,
    params?: UsersParams2
  ): Promise<User[]> {
    return await this.base.get(`/v2/dashes/${dash_id}/users`, params);
  }

  // GET /v2/events/:event_id/users
  /**
   *
   * @param event_id
   * @param params
   * @returns Return all the users of the given Event
   */
  public async events_eventId_users(
    event_id: string,
    params?: UsersParams2
  ): Promise<User[]> {
    return await this.base.get(`/v2/events/${event_id}/users`, params);
  }

  // GET /v2/accreditations/:accreditation_id/users
  /**
   *
   * @param accreditation_id
   * @param params
   * @returns Return all the users of the given Accreditation
   */
  public async accreditations_accreditationId_users(
    accreditation_id: string,
    params?: UsersParams2
  ): Promise<User[]> {
    return await this.base.get(
      `/v2/accreditations/${accreditation_id}/users`,
      params
    );
  }

  // GET /v2/teams/:team_id/users
  /**
   *
   * @param team_id
   * @param params
   * @returns Return all the users of the given Team
   */
  public async teams_teamId_users(
    team_id: string,
    params?: UsersParams2
  ): Promise<User[]> {
    return await this.base.get(`/v2/teams/${team_id}/users`, params);
  }

  // GET /v2/projects/:project_id/users
  /**
   *
   * @param project_id
   * @param params
   * @returns Return all the users of the given Project
   */
  public async projects_projectId_users(
    project_id: string,
    params?: UsersParams2
  ): Promise<User[]> {
    return await this.base.get(`/v2/projects/${project_id}/users`, params);
  }

  // GET /v2/partnerships/:partnership_id/users
  /**
   *
   * @param partnership_id
   * @param params
   * @returns Return all the users of the given Partnership
   */
  public async partnerships_partnershipId_users(
    partnership_id: string,
    params?: UsersParams2
  ): Promise<User[]> {
    return await this.base.get(
      `/v2/partnerships/${partnership_id}/users`,
      params
    );
  }

  // GET /v2/expertises/:expertise_id/users
  /**
   *
   * @param expertise_id
   * @param params
   * @returns Return all the users of the given Expertise
   */
  public async expertises_expertiseId_users(
    expertise_id: string,
    params?: UsersParams2
  ): Promise<User[]> {
    return await this.base.get(`/v2/expertises/${expertise_id}/users`, params);
  }

  // GET /v2/users
  /**
   *
   * @param params
   * @returns Return all the users
   */
  public async get_users(params?: UsersParams2): Promise<User[]> {
    return await this.base.get(`/v2/users`, params);
  }

  // GET /v2/cursus/:cursus_id/users
  /**
   *
   * @param cursus_id
   * @param params
   * @returns Return all the users of the given Cursus
   */
  public async cursus_cursusId_users(
    cursus_id: string,
    params?: UsersParams2
  ): Promise<User[]> {
    return await this.base.get(`/v2/cursus/${cursus_id}/users`, params);
  }

  // GET /v2/campus/:campus_id/users
  /**
   *
   * @param campus_id
   * @param params
   * @returns Return all the users of the given Campus
   */
  public async campus_campusId_users(
    campus_id: string,
    params?: UsersParams2
  ): Promise<User[]> {
    return await this.base.get(`/v2/campus/${campus_id}/users`, params);
  }

  // GET /v2/achievements/:achievement_id/users
  /**
   *
   * @param achievement_id
   * @param params
   * @returns Return all the users of the given Achievement
   */
  public async achievements_achievementId_users(
    achievement_id: string,
    params?: UsersParams2
  ): Promise<User[]> {
    return await this.base.get(
      `/v2/achievements/${achievement_id}/users`,
      params
    );
  }

  // GET /v2/titles/:title_id/users
  /**
   *
   * @param title_id
   * @param params
   * @returns Return all the users of the given Title
   */
  public async titles_titleId_users(
    title_id: string,
    params?: UsersParams2
  ): Promise<User[]> {
    return await this.base.get(`/v2/titles/${title_id}/users`, params);
  }

  // GET /v2/quests/:quest_id/users
  /**
   *
   * @param quest_id
   * @param params
   * @returns Return all the users of the given Quest
   */
  public async quests_questId_users(
    quest_id: string,
    params?: UsersParams2
  ): Promise<User[]> {
    return await this.base.get(`/v2/quests/${quest_id}/users`, params);
  }

  // GET /v2/groups/:group_id/users
  /**
   *
   * @param group_id
   * @param params
   * @returns Return all the users of the given Group
   */
  public async groups_groupId_users(
    group_id: string,
    params?: UsersParams2
  ): Promise<User[]> {
    return await this.base.get(`/v2/groups/${group_id}/users`, params);
  }

  // GET /v2/users/:id
  /**
   *
   * @param id
   * @returns Get a user
   */
  public async get_users_user(id: string): Promise<User> {
    return await this.base.get(`/v2/users/${id}`);
  }

  // GET /v2/me
  /**
   *
   * @returns Show the current resource owner
   */
  public async get_users_me(): Promise<User> {
    return await this.base.get(`/v2/me`);
  }
}
