export type NotionsParams = {
    cursus_id?: string;
    tag_id?: string;
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
    sort?: "id" | "name" | "created_at" | "updated_at" | "slug";
    "filter[id]"?: number[];
    "filter[name]"?: string[];
    "filter[created_at]"?: number[];
    "filter[updated_at]"?: string[];
    "filter[slug]"?: string[];
    "range[id]"?: string;
    "range[name]"?: string[];
    "range[created_at]"?: number[];
    "range[updated_at]"?: string[];
    "range[slug]"?: string[];
    page?: number;
    "page[number]"?: number;
    "page[size]"?: number;
  };
  