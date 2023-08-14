import { BaseApi42 } from "../../base/baseApi42";
import { User } from "./types/users.user.type";

export class UsersApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/users/:user_id/amendments
  public async getUserAmendments(user_id: string) {
    return await this.base.get(`/v2/users/${user_id}/amendments`, {});
  }

  // GET /v2/users/:user_id/apps
  public async getUserApps(user_id: string) {
    return await this.base.get(`/v2/users/${user_id}/apps`, {});
  }

  // GET /v2/users/:user_id/campus_users
  public async getUserCampusUsers(user_id: string) {
    return await this.base.get(`/v2/users/${user_id}/campus_users`, {});
  }

  // GET /v2/users/:user_id/coalitions
  public async getUserCoalitions(user_id: string) {
    return await this.base.get(`/v2/users/${user_id}/coalitions`, {});
  }

  // GET /v2/users/:user_id/coalitions_users
  public async getUserCoalitionsUsers(user_id: string) {
    return await this.base.get(`/v2/users/${user_id}/coalitions_users`, {});
  }

  // GET /v2/users/:user_id/correction_point_historics
  public async getUserCorrectionPointHistorics(user_id: string) {
    return await this.base.get(`/v2/users/${user_id}/correction_point_historics`, {});
  }

  // GET /v2/users/:user_id/cursus_users
  public async getUserCursusUsers(user_id: string) {
    return await this.base.get(`/v2/users/${user_id}/cursus_users`, {});
  }

  // GET /v2/users/:user_id/events
  public async getUserEvents(user_id: string) {
    return await this.base.get(`/v2/users/${user_id}/events`, {});
  }

  // GET /v2/users/:user_id/events_users
  public async getUserEventsUsers(user_id: string) {
    return await this.base.get(`/v2/users/${user_id}/events_users`, {});
  }

  // GET /v2/users/:user_id/exams
  public async getUserExams(user_id: string) {
    return await this.base.get(`/v2/users/${user_id}/exams`, {});
  }

  // GET /v2/users/:user_id/expertises_users
  public async getUserExpertisesUsers(user_id: string) {
    return await this.base.get(`/v2/users/${user_id}/expertises_users`, {});
  }

  // POST /v2/users/:user_id/expertises_users
  public async getUserExpertise(user_id: string, expertise_data: any) {
    return await this.base.get(`/v2/users/${user_id}/expertises_users`, expertise_data);
  }

  // GET /v2/users/:user_id/groups
  public async getUserGroups(user_id: string) {
    return await this.base.get(`/v2/users/${user_id}/groups`, {});
  }

  // GET /v2/users/:user_id/groups_users
  public async getUserGroupsUsers(user_id: string) {
    return await this.base.get(`/v2/users/${user_id}/groups_users`, {});
  }

  // GET /v2/users/:user_id/languages_users
  public async getUserLanguagesUsers(user_id: string) {
    return await this.base.get(`/v2/users/${user_id}/languages_users`, {});
  }

  // GET /v2/users/:user_id/languages_users/:id
  public async getUserLanguageUser(user_id: string, language_id: string) {
    return await this.base.get(`/v2/users/${user_id}/languages_users/${language_id}`, {});
  }

  // GET /v2/users/:user_id/locations
  public async getUserLocations(user_id: string) {
    return await this.base.get(`/v2/users/${user_id}/locations`, {});
  }

  // GET /v2/users/:user_id/notes
  public async getUserNotes(user_id: string) {
    return await this.base.get(`/v2/users/${user_id}/notes`, {});
  }

  // GET /v2/users/:user_id/projects_users/graph(/on/:field(/by/:interval))
  public async getUserProjectsUsersGraph(user_id: string, field: string, interval: string) {
    const url = `/v2/users/${user_id}/projects_users/graph/on/${field}/by/${interval}`;
    return await this.base.get(url, {});
  }
  public async getUser(user_id: string): Promise<User> {
    return await this.base.get("/v2/users/" + user_id, {});
  }

  public async getUsers(): Promise<User> {
    return await this.base.get("/v2/users/", {});
  }

  public async getMe() {
    return await this.base.get("/v2/me/", {});
  }
}