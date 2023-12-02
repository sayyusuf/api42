export type PartnershipsUsersParams = {
  partnership_id?: string;
  sort?:
    | "id"
    | "partnership_id"
    | "user_id"
    | "created_at"
    | "updated_at"
    | "final_mark";
  "filter[id]"?: number[];
  "filter[partnership_id]": string[];
  "filter[user_id]": string[];
  "filter[created_at]"?: number[];
  "filter[updated_at]"?: string[];
  "filter[final_mark]": string[];
  "range[id]"?: number[];
  "range[partnership_id]": string[];
  "range[user_id]": string[];
  "range[created_at]"?: number[];
  "range[updated_at]"?: string[];
  "range[final_mark]": string[];
  page?: number;
  "page[number]"?: number;
  "page[size]"?: number;
};
