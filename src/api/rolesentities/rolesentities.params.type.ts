export type RolesEntitiesParams = {
  role_id?: string;
  sort?: "id" | "role_id" | "entity_id" | "expires_at" | "created_at" | "updated_at" | "entity_type";
  "filter[id]"?: number[];
  "filter[role_id]"?: string[];
  "filter[entity_id]"?: string[];
  "filter[expires_at]"?: string[];
  "filter[created_at]"?: string[];
  "filter[updated_at]"?: string[];
  "filter[entity_type]"?: string[];
  "filter[expires]"?: boolean[];
  "range[id]"?: string;
  "range[role_id]"?: string;
  "range[entity_id]"?: string;
  "range[expires_at]"?: string;
  "range[created_at]"?: string;
  "range[updated_at]"?: string;
  "range[entity_type]"?: string;
  page?: number;
  "page[number]"?: number;
  "page[size]"?: number;
}