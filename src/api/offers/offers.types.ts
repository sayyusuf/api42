type Offer = {
    id:                 number;
    title:              string;
    little_description: string;
    big_description:    string;
    salary:             string;
    contract_type:      ContractType;
    email:              string;
    full_address:       string;
    valid_at:           string;
    invalid_at:         string;
    min_duration:       number;
    max_duration:       number | null;
    document:           Document;
    slug:               string;
    created_at:         string;
    pro_id:             number | null;
    company_id:         number;
    target:             Target;
}

export enum ContractType {
    ApprenticeShip = "apprentice_ship",
    Cdi = "cdi",
    Freelance = "freelance",
    Stage = "stage",
}

type Document = {
    document: DocumentUrl;
}

type DocumentUrl = {
    url: null | string;
}

export enum Target {
    Student = "student",
    StudentAndAlumni = "student_and_alumni",
}
