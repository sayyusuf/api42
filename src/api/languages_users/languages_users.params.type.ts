export type LanguageUserParams = {
  user_id?: number | string;
  field?: "created_at" | "updated_at";
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
  sort?: "id" | "language_id" | "user_id" | "created_at" | "position";
  "filter[id]"?: number[];
  "filter[language_id]"?: string[];
  "filter[user_id]"?: number[];
  "filter[position]"?: string[];
  "filter[created_at]"?: string[];
  "range[id]"?: string;
  "range[language_id]"?: string;
  "range[user_id]"?: string;
  "range[position]"?: string;
  "range[created_at]"?: string;
  page?: number;
  "page[number]"?: number;
  "page[size]"?: number;
};
