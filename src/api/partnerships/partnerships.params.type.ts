export type PartnershipsParams = {
  sort?:
    | "id"
    | "name"
    | "description"
    | "difficulty"
    | "created_at"
    | "updated_at"
    | "slug"
    | "file"
    | "cursus_id";
  "filter[id]"?: number[];
  "filter[name]"?: string[];
  "filter[description]"?: string[];
  "filter[difficulty]"?: string[];
  "filter[created_at]"?: number[];
  "filter[updated_at]"?: string[];
  "filter[slug]"?: string[];
  "filter[file]"?: string[];
  "filter[cursus_id]"?: string[];
  "filter[tier]"?: string[];
  "range[id]"?: string;
  "range[name]"?: string[];
  "range[description]"?: string[];
  "range[difficulty]"?: string[];
  "range[created_at]"?: number[];
  "range[updated_at]"?: string[];
  "range[slug]"?: string[];
  "range[file]"?: string[];
  "range[cursus_id]"?: string[];
  page?: number;
  "page[number]"?: number;
  "page[size]"?: number;
};
