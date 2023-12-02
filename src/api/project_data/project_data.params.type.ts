export type ProjectDataParams = {
    project_session_id?: string;
    sort?:
      | "id"
      | "coordinates"
      | "created_at"
      | "updated_at"
      | "by"
      | "project_session_id"
    "filter[id]": string[];
    "filter[coordinates]": string[];
    "filter[description]": string[];
    "filter[created_at]": string[];
    "filter[updated_at]": string[];
    "filter[by]": string[];
    "filter[kind]": string[];
    "filter[project_session_id]": string[];
    page?: number;
    "page[number]"?: number;
    "page[size]"?: number;
  };
  