export type CursusParams = {
	sort?: "id" | "name" | "created_at" | "updated_at" | "slug" | "kind" | "restricted" | "is_subscriptable";
  "filter[id]"?: number[];
  "filter[name]"?: string[];
  "filter[created_at]"?: string[];
  "filter[updated_at]"?: string[];
  "filter[slug]"?: string[];
  "filter[kind]"?: string[];
  "filter[restricted]"?: boolean[];
  "filter[is_subscriptable]"?: boolean[];
  "range[id]"?: string;
  "range[name]"?: string;
  "range[created_at]"?: string;
  "range[updated_at]"?: string;
  "range[slug]"?: string;
  "range[kind]"?: string;
  "range[restricted]"?: boolean;
  "range[is_subscriptable]"?: boolean;
  page?: number;
  "page[number]"?: number;
  "page[size]"?: number;
}