type Notion = {
    id:         number;
    name:       string;
    slug:       string;
    created_at: string;
    subnotions: any[];
    tags:       Tag[];
    cursus:     Cursus[];
}

type Cursus = {
    id:         number;
    created_at: string;
    name:       string;
    slug:       string;
}

type Tag = {
    id:   number;
    name: string;
    kind: string;
}
