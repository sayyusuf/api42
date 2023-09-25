import { BaseApi42 } from "../../base/baseApi42";
import { Locations } from "./locations.types";

export class LocationsApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/locations/graph(/on/:field(/by/:interval))
  /**
   * Return grouped temporal data on locations
   */
  public async locations_graph(
    field?: "created_at",
    interval?: "month_of_year",
    sort?: string,
    filter?: string,
    range?: string
  ) {
    return await this.base.get(`/v2/locations/graph`);
  }

  // GET /v2/locations
  /**
   * Return all the locations
   */
  public async locations(
    sort?: string,
    filter?: string,
    range?: string,
    page?: string
  ): Promise<Locations[]> {
    return await this.base.get(`/v2/locations`);
  }

  // GET /v2/users/:user_id/locations
  /**
   * Return all the locations of the given User
   */
  public async users_userId_locations(
    user_id: string,
    sort?: string,
    filter?: string,
    range?: string,
    page?: string
  ): Promise<Locations[]> {
    return await this.base.get(`/v2/users/${user_id}/locations`);
  }

  // GET /v2/campus/:campus_id/locations
  /**
   * Return all the locations of the given Campus
   */
  public async campus_campusId_locations(
    campus_id: string,
    sort?: string,
    filter?: string,
    range?: string,
    page?: string
  ): Promise<Locations[]> {
    return await this.base.get(`/v2/campus/${campus_id}/locations`);
  }

  // GET /v2/locations/:id
  /**
   * Get a location
   */
  public async get_locations(id: string): Promise<Locations> {
    return await this.base.get(`/v2/locations/${id}`);
  }
}
