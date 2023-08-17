import { BaseApi42 } from "../../base/baseApi42";
import { User } from "./users.types";

export class UsersApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/users/graph(/on/:field(/by/:interval))
  /**
   * Return grouped temporal data on users
   */
  public async users_graph(
    field?: "created_at",
    interval?: "month_of_year",
    sort?: string,
    filter?: string,
    range?: string
  ) {
    return await this.base.get(`/v2/users/graph`, {});
  }

  // GET /v2/users/:id/locations_stats
  /**
   * Get location stats of a User.
   * @param id required. Must be String
   * @param begin_at optional. Must be String
   * @param end_at optional. Must be String
   * @param time_zone optional. Must be String
   * @returns
   */
  public async location_stats(
    id: string,
    begin_at?: string | null,
    end_at?: string | null,
    time_zone?: string | null
  ): Promise<any> {
    return await this.base.get(`/v2/users/${id}/locations_stats`, {
      begin_at,
      end_at,
      time_zone,
    });
  }

  // GET /v2/coalitions/:coalition_id/users
  /**
   * Return all the users of the given Coalition
   */
  public async coalitions_users(coalition_id: string) {
    return await this.base.get(`/v2/coalitions/${coalition_id}/users`);
  }

  // GET /v2/dashes/:dash_id/users
  /**
   * Return all the users of the given Dash
   */
  public async dashes_dashId_users(dash_id: string) {
    return await this.base.get(`/v2/dashes/${dash_id}/users`);
  }

  // GET /v2/events/:event_id/users
  /**
   * Return all the users of the given Event
   */
  public async events_eventId_users(event_id: string) {
    return await this.base.get(`/v2/events/${event_id}/users`);
  }

  // GET /v2/accreditations/:accreditation_id/users
  /**
   * Return all the users of the given Accreditation
   */
  public async accreditations_accreditationId_users(accreditation_id: string) {
    return await this.base.get(`/v2/accreditations/${accreditation_id}/users`);
  }

  // GET /v2/teams/:team_id/users
  /**
   * Return all the users of the given Team
   */
  public async teams_teamId_users(team_id: string) {
    return await this.base.get(`/v2/teams/${team_id}/users`);
  }

  // GET /v2/projects/:project_id/users
  /**
   * Return all the users of the given Project
   */
  public async projects_projectId_users(project_id: string) {
    return await this.base.get(`/v2/projects/${project_id}/users`);
  }

  // GET /v2/partnerships/:partnership_id/users
  /**
   * Return all the users of the given Partnership
   */
  public async partnerships_partnershipId_users(partnership_id: string) {
    return await this.base.get(`/v2/partnerships/${partnership_id}/users`);
  }

  // GET /v2/expertises/:expertise_id/users
  /**
   * Return all the users of the given Expertise
   */
  public async expertises_expertiseId_users(expertise_id: string) {
    return await this.base.get(`/v2/expertises/${expertise_id}/users`);
  }

  // GET /v2/users
  /**
   * Return all the users
   */
  public async get_users() {
    return await this.base.get(`/v2/users`);
  }

  // GET /v2/cursus/:cursus_id/users
  /**
   * Return all the users of the given Cursus
   */
  public async cursus_cursusId_users(cursus_id: string) {
    return await this.base.get(`/v2/cursus/${cursus_id}/users`);
  }

  // GET /v2/campus/:campus_id/users
  /**
   * Return all the users of the given Campus
   */
  public async campus_campusId_users(campus_id: string) {
    return await this.base.get(`/v2/campus/${campus_id}/users`);
  }

  // GET /v2/achievements/:achievement_id/users
  /**
   * Return all the users of the given Achievement
   */
  public async achievements_achievementId_users(achievement_id: string) {
    return await this.base.get(`/v2/achievements/${achievement_id}/users`);
  }

  // GET /v2/titles/:title_id/users
  /**
   * Return all the users of the given Title
   */
  public async titles_titleId_users(title_id: string) {
    return await this.base.get(`/v2/titles/${title_id}/users`);
  }

  // GET /v2/quests/:quest_id/users
  /**
   * Return all the users of the given Quest
   */
  public async quests_questId_users(quest_id: string) {
    return await this.base.get(`/v2/quests/${quest_id}/users`);
  }

  // GET /v2/groups/:group_id/users
  /**
   * Return all the users of the given Group
   */
  public async groups_groupId_users(group_id: string) {
    return await this.base.get(`/v2/groups/${group_id}/users`);
  }

  // GET /v2/users/:id
  /**
   * Get a user
   */
  public async get_users_user(id: string) {
    return await this.base.get(`/v2/users/${id}`);
  }

  // GET /v2/me
  /**
   * Show the current resource owner
   */
  public async get_users_me() {
    return await this.base.get(`/v2/me`);
  }
}
