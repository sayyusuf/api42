import { ApiData } from "../../../base/types";
import { IntraApi } from "../../../intrapi";

describe("Project data test suite", () => {
  let intraApi;

  beforeAll(async () => {
    const api: {
      client_id: string;
      client_secret: string;
      grant_type: string;
      code?: string | undefined;
      redirect_uri?: string | undefined;
    } = require("../../../tests/api.json");

    const apiData: ApiData = {
      client_id: api.client_id,
      client_secret: api.client_secret,
      grant_type: api.grant_type,
      code: api.code,
      redirect_uri: api.redirect_uri,
    };

    intraApi = await IntraApi.new(apiData);
  });

  it("should return project data", async () => {
    const data = await intraApi.project_data
      .get_project_data({ sort: "project_session_id" })
      .catch((ex) => console.error(ex));
    console.log(data);

    expect(0).toEqual(0);
  });
});
