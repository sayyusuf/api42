import { BaseApi42 } from "../../../base/baseApi42";
import { writeFileSync } from "fs";
import { ApiData } from "../../../base/types";
import { NotionsApi } from "../notions.api";

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
  let ac = new NotionsApi(base);
  data = await ac.get_notions({ "page[number]": 1 });
  console.log(data);
  writeFileSync("./res.json", JSON.stringify(data));
})();
