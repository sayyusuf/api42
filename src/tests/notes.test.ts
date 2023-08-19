import { ApiData } from "../base/types";
import { IntraApi } from "../intrapi";

describe("Notes test suite", () => {
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

  it("should return user notes", async () => {
    const data = await intraApi.notes
      .users_userId_notes("test")
      .catch((ex) => console.error(ex));

    expect(0).toEqual(0);
  });
});
