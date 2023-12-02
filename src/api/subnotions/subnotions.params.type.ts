export type SubnotionsParams = {
  notion_id?: string;
  sort?: "id" | "notion_id" | "name" | "created_at" | "updated_at" | "slug" | "position";
  "filter[id]"?: number[];
  "filter[notion_id]"?: string[];
  "filter[name]"?: string[];
  "filter[created_at]"?: string[];
  "filter[updated_at]"?: string[];
  "filter[slug]"?: string[];
  "filter[position]"?: string[];
  "range[id]"?: string;
  "range[notion_id]"?: string;
  "range[name]"?: string;
  "range[created_at]"?: string;
  "range[updated_at]"?: string;
  "range[slug]"?: string;
  "range[position]"?: string;
  page?: number;
  "page[number]"?: number;
  "page[size]"?: number;
}