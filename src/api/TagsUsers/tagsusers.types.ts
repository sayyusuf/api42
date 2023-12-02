export type TagUsers = {
    id:         number;
    campus_id:  number | null;
    created_at: Date;
    updated_at: Date;
    user:       User;
    tag:        Tag;
}

export type Tag = {
    id:   number;
    name: string;
    kind: TagKind;
}

export enum TagKind {
    General = "general",
    Issue = "issue",
    Project = "project",
}

export type User = {
    id:                number;
    email:             string;
    login:             string;
    first_name:        string;
    last_name:         string;
    usual_full_name:   string;
    usual_first_name:  null | string;
    url:               string;
    phone:             Phone;
    displayname:       string;
    kind:              UserKind;
    image:             Image;
    "staff?":          boolean;
    correction_point:  number;
    pool_month:        PoolMonth | null;
    pool_year:         null | string;
    location:          null | string;
    wallet:            number;
    anonymize_date:    Date | null;
    data_erasure_date: Date | null;
    created_at:        Date;
    updated_at:        Date;
    alumnized_at:      Date | null;
    "alumni?":         boolean;
    "active?":         boolean;
}

export type Image = {
    link:     null | string;
    versions: Versions;
}

export type Versions = {
    large:  null | string;
    medium: null | string;
    small:  null | string;
    micro:  null | string;
}

export enum UserKind {
    Admin = "admin",
    Student = "student",
}

export enum Phone {
    Hidden = "hidden",
}

export enum PoolMonth {
    April = "april",
    August = "august",
    February = "february",
    July = "july",
    May = "may",
    October = "october",
    September = "september",
}
