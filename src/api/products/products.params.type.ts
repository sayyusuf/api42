export type ProductsParams = {
  campus_id?: string;
  sort?:
    | "id"
    | "name"
    | "description"
    | "price"
    | "quantity"
    | "begin_at"
    | "end_at"
    | "category_id"
    | "created_at"
    | "updated_at"
    | "kind"
    | "slug"
    | "image"
    | "is_uniq"
    | "one_time_purchase";
  "filter[id]": string[];
  "filter[name]": string[];
  "filter[description]": string[];
  "filter[price]": string[];
  "filter[quantity]": string[];
  "filter[begin_at]": string[];
  "filter[end_at]": string[];
  "filter[category_id]": string[];
  "filter[created_at]": string[];
  "filter[updated_at]": string[];
  "filter[kind]": string[];
  "filter[slug]": string[];
  "filter[image]": string[];
  "filter[is_uniq]": string[];
  "filter[one_time_purchase]": string[];
  "filter[future]": string[];
  "filter[end]": string[];
  "range[id]": string[];
  "range[name]": string[];
  "range[description]": string[];
  "range[price]": string[];
  "range[quantity]": string[];
  "range[begin_at]": string[];
  "range[end_at]": string[];
  "range[category_id]": string[];
  "range[created_at]": string[];
  "range[updated_at]": string[];
  "range[kind]": string[];
  "range[slug]": string[];
  "range[image]": string[];
  "range[is_uniq]": string[];
  "range[one_time_purchase]": string[];
  page?: number;
  "page[number]"?: number;
  "page[size]"?: number;
};