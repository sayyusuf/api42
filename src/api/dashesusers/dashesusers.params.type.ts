export type DashesUsersParams = {
  dash_id?: string;
  sort?: "id" | "dash_id" | "user_id" | "repo_uuid" | "repo_url" | "final_mark" | "created_at" | "updated_at";
  "filter[id]"?: number[];
  "filter[dash_id]"?: string[];
  "filter[user_id]"?: string[];
  "filter[repo_uuid]"?: string[];
  "filter[repo_url]"?: string[];
  "filter[final_mark]"?: number[];
  "filter[created_at]"?: string[];
  "filter[updated_at]"?: string[];
  "range[id]"?: string;
  "range[dash_id]"?: string;
  "range[user_id]"?: string;
  "range[repo_uuid]"?: string;
  "range[repo_url]"?: string;
  "range[final_mark]"?: string;
  "range[created_at]"?: string;
  "range[updated_at]"?: string;
   page?: number;
  "page[number]"?: number;
  "page[size]"?: number;
}