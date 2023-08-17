import { ApiData } from "../base/types";
import { IntraApi } from "../intrapi";

describe("Users test suite", () => {
  let intraApi;

  beforeAll(async () => {
    const api: {
      client_id: string;
      client_secret: string;
      grant_type: string;
      code?: string | undefined;
      redirect_uri?: string | undefined;
    } = require("./api.json");

    const apiData: ApiData = {
      client_id: api.client_id,
      client_secret: api.client_secret,
      grant_type: api.grant_type,
      code: api.code,
      redirect_uri: api.redirect_uri,
    };

    intraApi = await IntraApi.new(apiData);
  });

  it("should return user location stats", async () => {
    const data = await intraApi.users
      .location_stats("akarahan")
      .catch((ex) => console.error(ex));

    expect(data).toEqual({
      "2023-06-17": "05:51:27.264365",
      "2023-07-09": "01:33:34.243075",
    });
  });

  it("should return undefined on wrong coalition id", async () => {
    const data = await intraApi.users
      .coalitions_users("test")
      .catch((ex) => console.error(ex));

    expect(data).toEqual(undefined);
  });

  it("should return coalition users", async () => {
    const data = await intraApi.users
      .coalitions_users("gryffindor")
      .catch((ex) => console.error(ex));

    expect(data).toEqual("");
  });

  it("should return dash users", async () => {
    const data = await intraApi.users
      .dashes_users("gryffindor")
      .catch((ex) => console.error(ex));

    expect(data).toEqual("");
  });

  it("should return users of event", async () => {
    const data = await intraApi.users
      .events_users("gryffindor")
      .catch((ex) => console.error(ex));

    expect(data).toEqual("");
  });

  // TODO
});
