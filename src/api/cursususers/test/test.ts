import axios from "axios";
import { writeFileSync } from "fs";
import { ApiData } from "../../../base/types";
import { BaseApi42 } from "../../../base/baseApi42";
import { CursusUsersApi } from "../cursususers.api";
import { CursusUser } from "../cursususers.type";

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
let data: any;
(async function () {
  const apiData: ApiData = {
    client_id: api.client_id,
    client_secret: api.client_secret,
    grant_type: api.grant_type,
    code: api.code,
    redirect_uri: api.redirect_uri,
  };
  const baseapi = await BaseApi42.new(apiData);
  const testapi = new CursusUsersApi(baseapi);
  data = await testapi.get_cursus_cursusId_cursusUsers(21, {
	'range[level]': '8,13',
	'filter[begin_at]': "2022-01-03T06:42:00.000Z",
	'filter[user_id]': ['100588', '103050', '100635'],
	sort: 'level'
  })
  writeFileSync("./res.json", JSON.stringify(data));
})();
