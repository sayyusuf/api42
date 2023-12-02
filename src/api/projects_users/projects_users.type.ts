// Generated by https://quicktype.io

export type ProjectsUser = {
    id:              number;
    occurrence:      number;
    final_mark:      null | number;
    status:          string;
    "validated?":    null | boolean;
    current_team_id: number;
    project:         {
        id:        number;
        name:      string;
        slug:      string;
        parent_id: number | null;
    },
    cursus_ids:      number[];
    user:            {
        id:    number;
        login: string;
        url:   string;
    };
    teams:            {
        id:                 number;
        name:               string;
        url:                string;
        final_mark:         null;
        project_id:         number;
        created_at:         string;
        updated_at:         string;
        status:             string;
        terminating_at:     null | string;
        users:              {
            id:               number;
            login:            string;
            url:              string;
            leader:           boolean;
            occurrence:       number;
            validated:        boolean;
            projects_user_id: number;
        }[];
        "locked?":          boolean;
        "validated?":       null | string;
        "closed?":          boolean;
        repo_url:           null | string;
        repo_uuid:          string;
        locked_at:          null | string;
        closed_at:          null | string;
        project_session_id: number;
    }[];
}


export type ProjectsUser2 = {
    id:           number;
    end_at:       null | string;
    quest_id:     number;
    validated_at: null | string;
    prct:         null | string;
    advancement:  null | string;
    created_at:   string;
    updated_at:   string;
    user:         {
       id:            number;
       name:          string;
       slug:          string;
       kind:          string;
       internal_name: null | string;
       description:   string;
       cursus_id:     number;
       campus_id:     null | string;
       created_at:    string;
       updated_at:    string;
       grade_id:      null | string;
       position:      number;
    };
    quest:        {
        id:    number;
        login: string;
        url:   string;
    };
}