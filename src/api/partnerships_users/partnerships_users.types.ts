type PartnershipUsers = {
    id:             number;
    partnership_id: number;
    final_mark:     null;
    user:           User;
}

type User = {
    id:    number;
    login: string;
    url:   string;
}
