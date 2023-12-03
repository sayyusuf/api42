export type TranslationsParams = {
  sort?:
    | "id"
    | "translatable_id"
    | "translatable_type"
    | "language_id"
    | "fields"
    | "created_at"
    | "updated_at"
    | "user_id"
    | "default"
    | "up_to_date"
    | "translations_structure_id";
  "filter[id]";
  "filter[translatable_id]";
  "filter[translatable_type]";
  "filter[language_id]";
  "filter[fields]";
  "filter[created_at]";
  "filter[updated_at]";
  "filter[user_id]";
  "filter[default]";
  "filter[up_to_date]";
  "filter[translations_structure_id";
  page?: number;
  "page[number]"?: number;
  "page[size]"?: number;
};
