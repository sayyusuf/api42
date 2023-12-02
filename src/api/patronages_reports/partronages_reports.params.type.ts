export type PatronagesReportsParams = {
  user_id?: string;
  patronage_id?: string;
  report_id?: string;
  field?: "created_at" | "updated_at" | "begin_at" | "validated_at";
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
    | "created_at"
    | "updated_at"
    | "patronage_id"
    | "report_id"
    | "validated_at"
  "filter[id]"?: number[];
  "filter[user_id]"?: string[];
  "filter[begin_at]"?: number[];
  "filter[created_at]"?: string[];
  "filter[updated_at]"?: string[];
  "filter[patronage_id]"?: string[];
  "filter[report_id]"?: string[];
  "filter[validated_at]"?: string[];
  "filter[future]"?: string[];
  "filter[validated]"?: string[];
  "range[id]"?: number[];
  "range[user_id]"?: string[];
  "range[begin_at]"?: number[];
  "range[created_at]"?: string[];
  "range[updated_at]"?: string[];
  "range[patronage_id]"?: string[];
  "range[report_id]"?: string[];
  "range[validated_at]"?: string[];
  page?: number;
  "page[number]"?: number;
  "page[size]"?: number;
};
