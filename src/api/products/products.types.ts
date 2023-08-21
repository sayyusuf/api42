type Product = {
    id:                number;
    name:              string;
    description:       string;
    price:             number;
    quantity:          number;
    begin_at:          null;
    end_at:            null;
    category_id:       number;
    created_at:        string;
    updated_at:        string;
    kind:              string;
    slug:              string;
    image:             Image;
    is_uniq:           boolean;
    one_time_purchase: boolean;
}

type Image = {
    url:   string;
    thumb: Thumb;
}

type Thumb = {
    url: string;
}
