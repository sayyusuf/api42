import { BaseApi42 } from "../../base/baseApi42";

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
   * Return all the notes of the given User
   */
  public async users_userId_notes(
    user_id: string,
    sort?: string,
    filter?: string,
    range?: string,
    page?: string
  ): Promise<Note[]> {
    return await this.base.get(`/v2/users/${user_id}/notes`);
  }

  // GET /v2/campus/:campus_id/notes
  /**
   * Return all the notes of the given Campus
   */
  public async campus_campusId_notes(
    campus_id: string,
    sort?: string,
    filter?: string,
    range?: string,
    page?: string
  ): Promise<Note[]> {
    return await this.base.get(`/v2/campus/${campus_id}/notes`);
  }

  // GET /v2/notes
  /**
   * Return all the notes
   */
  public async notes(
    sort?: string,
    filter?: string,
    range?: string,
    page?: string
  ): Promise<Note[]> {
    return await this.base.get(`/v2/notes`);
  }

  // GET /v2/notes/:id
  /**
   * Get a note
   */
  public async get_note(
    id: string,
    sort?: string,
    filter?: string,
    range?: string,
    page?: string
  ): Promise<Note> {
    return await this.base.get(`/v2/notes/${id}`);
  }

  // TODO
  //   // POST /v2/notes
  //   /**
  //    * Create a note
  //    */
  //   public async create_note(note: Pick<Note, "user_id"> & Partial<Note>) {
  //     return await this.base.post(`/v2/notes`, { note: note });
  //   }

  //   // PATCH /v2/notes/:id
  //   /**
  //    * Update a note
  //    */
  //   public async update_full_note(id: string, note: Partial<Note>) {
  //     return await this.base.patch(`/v2/notes/${id}`, { note: note });
  //   }

  //   // PUT /v2/notes/:id
  //   /**
  //    * Update a note
  //    */
  //   public async update_note(id: string, note: Partial<Note>) {
  //     return await this.base.put(`/v2/notes/${id}`, { note: note });
  //   }

  //   // DELETE /v2/notes/:id
  //   /**
  //    * Destroy a note
  //    */
  //   public async delete_note(id: string) {
  //     return await this.base.delete(`/v2/notes/${id}`);
  //   }
}
