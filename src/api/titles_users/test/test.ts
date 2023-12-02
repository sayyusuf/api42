import { BaseApi42 } from "../../../base/baseApi42";
import { writeFileSync } from "fs";
import { ApiData } from "../../../base/types";
import { TitlesUsersApi } from "../titles_users.api";

const api: {
  client_id: string;
  client_secret: string;
  grant_type: string;
  code?: string | undefined;
  redirect_uri?: string | undefined;
} = require("../../../tests/api.json");

let data: any;

(async function () {
  const apiData: ApiData = {
    client_id: api.client_id,
    client_secret: api.client_secret,
    grant_type: api.grant_type,
    code: api.code,
    redirect_uri: api.redirect_uri,
  };

  let base = await BaseApi42.new(apiData);
  let ac = new TitlesUsersApi(base);
  data = await ac.get_titles_users();
  console.log(data);
  writeFileSync("./res.json", JSON.stringify(data));
})();
