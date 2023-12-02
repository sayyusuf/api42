export type LocationsParams = {
  user_id?: number | string;
  campus_id?: string;
  field?: "begin_at" | "end_at";
  interval?:
    | "day"
    | "week"
    | "month"
    | "quarter"
    | "year"
    | "hour_of_day"
    | "day_of_week"
    | "day_of_month"
    | "month_of_year";
  sort?:
    | "id"
    | "user_id"
    | "begin_at"
    | "end_at"
    | "primary"
    | "host"
    | "campus_id";
  "filter[id]"?: number[];
  "filter[user_id]"?: string[];
  "filter[begin_at]"?: number[];
  "filter[end_at]"?: string[];
  "filter[primary]"?: string[];
  "filter[host]"?: string[];
  "filter[campus_id]"?: string[];
  "filter[active]"?: string[];
  "filter[inactive]"?: string[];
  "filter[future]"?: string[];
  "filter[end]"?: string[];
  "range[id]"?: string;
  "range[user_id]"?: string;
  "range[begin_at]"?: string;
  "range[end_at]"?: string;
  "range[primary]"?: string;
  "range[host]"?: string;
  "range[campus_id]"?: string;
  page?: number;
  "page[number]"?: number;
  "page[size]"?: number;
};
