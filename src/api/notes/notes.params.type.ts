export type NotesParams = {
  user_id?: string;
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
    | "from"
    | "subject"
    | "content"
    | "created_at"
    | "updated_at"
    | "kind"
    | "approved_at"
    | "approver_id"
    | "from_user_id";
  "filter[id]"?: number[];
  "filter[user_id]"?: string[];
  "filter[from]"?: number[];
  "filter[subject]"?: string[];
  "filter[content]"?: string[];
  "filter[created_at]"?: string[];
  "filter[updated_at]"?: string[];
  "filter[kind]"?: string[];
  "filter[approved_at]"?: string[];
  "filter[approver_id]"?: string[];
  "filter[from_user_id]"?: string[];
  "filter[approved]"?: string[];
  "range[id]"?: string;
  "range[user_id]"?: string;
  "range[from]"?: number[];
  "range[subject]"?: string[];
  "range[content]"?: string[];
  "range[created_at]"?: string[];
  "range[updated_at]"?: string[];
  "range[kind]"?: string[];
  "range[approved_at]"?: string[];
  "range[approver_id]"?: string[];
  "range[from_user_id]"?: string[];
  page?: number;
  "page[number]"?: number;
  "page[size]"?: number;
};
