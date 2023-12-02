export type SkillsParams = {
  cursus_id?: string;
  sort?: "id" | "name" | "created_at" | "updated_at" | "slug";
  "filter[id]"?: number[];
  "filter[name]"?: string[];
  "filter[created_at]"?: string[];
  "filter[updated_at]"?: string[];
  "filter[slug]"?: string[];
  "range[id]"?: string;
  "range[name]"?: string;
  "range[created_at]"?: string;
  "range[updated_at]"?: string;
  "range[slug]"?: string;
  page?: number;
  "page[number]"?: number;
  "page[size]"?: number;
}