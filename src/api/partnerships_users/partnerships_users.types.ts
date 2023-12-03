export type PartnershipUsers = {
    id:             number;
    partnership_id: number;
    final_mark:     null;
    user:           UserLogin;
}

type UserLogin = {
    id:    number;
    login: string;
    url:   string;
}
