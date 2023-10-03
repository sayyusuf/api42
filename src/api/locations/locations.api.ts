import { BaseApi42 } from "../../base/baseApi42";
import { LocationsParams } from "./locations.params.type";
import { Locations } from "./locations.types";

export class LocationsApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/locations/graph(/on/:field(/by/:interval))
  /**
   * Count all occurences on a particular field (default on begin_at) by a particular period, starting from the first occurence to now.
   * @param params
   * @returns Return grouped temporal data on locations
   */
  public async locations_graph(params?: LocationsParams) {
    return await this.base.get(`/v2/locations/graph`, params);
  }

  // GET /v2/locations
  /**
   *
   * @param params
   * @returns Return all the locations
   */
  public async locations(params?: LocationsParams): Promise<Locations[]> {
    return await this.base.get(`/v2/locations`, params);
  }

  // GET /v2/users/:user_id/locations
  /**
   *
   * @param user_id
   * @param params
   * @returns Return all the locations of the given User
   */
  public async users_userId_locations(
    user_id: string,
    params?: LocationsParams
  ): Promise<Locations[]> {
    return await this.base.get(`/v2/users/${user_id}/locations`, params);
  }

  // GET /v2/campus/:campus_id/locations
  /**
   *
   * @param campus_id
   * @param params
   * @returns Return all the locations of the given Campus
   */
  public async campus_campusId_locations(
    campus_id: string,
    params?: LocationsParams
  ): Promise<Locations[]> {
    return await this.base.get(`/v2/campus/${campus_id}/locations`, params);
  }

  // GET /v2/locations/:id
  /**
   *
   * @param id
   * @returns Get a location
   */
  public async get_locations(id: string): Promise<Locations> {
    return await this.base.get(`/v2/locations/${id}`);
  }
}
