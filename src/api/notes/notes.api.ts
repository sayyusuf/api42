import { BaseApi42 } from "../../base/baseApi42";
import { NotesParams } from "./notes.params.type";
import { Note } from "./notes.types";

/**
 * This resource is paginated by 30 items.
 * This action requires a token resource owner or an application
 * with one of theses role(s): Notes manager, Advanced notes manager.
 */
export class NotesApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/users/:user_id/notes
  /**
   *
   * @param user_id
   * @param params
   * @returns Return all the notes of the given User
   */
  public async get_users_userId_notes(
    user_id: string,
    params?: NotesParams
  ): Promise<Note[]> {
    return await this.base.get(`/v2/users/${user_id}/notes`, params);
  }

  // GET /v2/campus/:campus_id/notes
  /**
   *
   * @param campus_id
   * @param params
   * @returns Return all the notes of the given Campus
   */
  public async get_campus_campusId_notes(
    campus_id: string,
    params?: NotesParams
  ): Promise<Note[]> {
    return await this.base.get(`/v2/campus/${campus_id}/notes`, params);
  }

  // GET /v2/notes
  /**
   *
   * @param params
   * @returns Return all the notes
   */
  public async get_notes(params?: NotesParams): Promise<Note[]> {
    return await this.base.get(`/v2/notes`, params);
  }

  // GET /v2/notes/:id
  /**
   *
   * @param id
   * @returns Get a note
   */
  public async get_notes_id(id: string): Promise<Note> {
    return await this.base.get(`/v2/notes/${id}`);
  }
}
