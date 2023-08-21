type Translation = {
    id:                        number;
    translatable_id:           number;
    translatable_type:         string;
    language_id:               number;
    fields:                    Fields;
    created_at:                string;
    updated_at:                string;
    user_id:                   null;
    default:                   boolean;
    up_to_date:                boolean;
    translations_structure_id: number;
    translations_structure:    TranslationsStructure;
}

type Fields = {
    name:        string;
    description: null | string;
}

type TranslationsStructure = {
    id:                  number;
    searchable_by:       string[];
    identified_by:       string[];
    structures_kind:     string;
    up_to_date:          boolean;
    fields_organisation: Fields;
    type_name:           string;
    created_at:          string;
    updated_at:          string;
}
