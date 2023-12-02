import axios from "axios";
import { writeFileSync } from "fs";
import { ApiData } from "../../../base/types";
import { BaseApi42 } from "../../../base/baseApi42";
import { CampusUsersApi } from "../campususers.api";
import { CampusUser } from "../campususers.type";

//"filter[campus_id]" : campus_id.toString()
const api: {
  client_id: string;
  client_secret: string;
  grant_type: string;
  code?: string | undefined;
  redirect_uri?: string | undefined;
} = require("../../../tests/api.json");

const cursus_id = 21; // Ana eğitim;
const campus_id = 49; //istanbul
let data: CampusUser[];
(async function () {
  const apiData: ApiData = {
    client_id: api.client_id,
    client_secret: api.client_secret,
    grant_type: api.grant_type,
    code: api.code,
    redirect_uri: api.redirect_uri,
  };
  const baseapi = await BaseApi42.new(apiData);
  const testapi = new CampusUsersApi(baseapi);
  data = await testapi.get_campusUsers({  });
  //writeFileSync("./res.json", JSON.stringify(data));
})();