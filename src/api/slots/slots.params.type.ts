export type SlotsParams = {
  project_id?: string;
  user_id?: string;
  sort?: "id" | "begin_at" | "end_at" | "user_id" | "created_at" | "scale_team_id";
  "filter[id]"?: number[];
  "filter[begin_at]"?: string[];
  "filter[end_at]"?: string[];
  "filter[created_at]"?: string[];
  "filter[campus_id]"?: string[];
  "filter[future]"?: boolean[];
  "filter[end]"?: boolean[];
  "range[id]"?: string;
  "range[begin_at]"?: string;
  "range[end_at]"?: string;
  "range[created_at]"?: string;
  page?: number;
  "page[number]"?: number;
  "page[size]"?: number;
}