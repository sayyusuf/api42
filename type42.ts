
type Skill = {
	id: number,
	name: string,
	level: number
}

type Achievement = {
    id: number,
    name: string,
    description: string,
    tier: string,
    kind: string,
    visible: boolean,
    image: string,
    nbr_of_success: number,
    users_url: string
}

type Title = {
    id: number,
    name: string
}

type TitlesUser = {
    id: number,
    user_id: number,
    title_id: number,
    selected: boolean,
    created_at: string,
    updated_at: string
}

type ExpertisesUser = {
    id: number,
    expertise_id: number,
    interested: boolean,
    value: number,
    contact_me: boolean,
    created_at: string,
    user_id: number
}

type Patronage = {
    id: number,
    user_id: number,
    godfather_id: number,
    ongoing: boolean,
    created_at: string,
    updated_at: string
}

type LanguagesUser = {
        
    id: number,
    language_id: number,
    user_id: number,
    position: number,
    created_at: string
}

type Projectuser = {
    id: number,
    occurrence:number,
    final_mark: number,
    status: string,
    validated: boolean,
    current_team_id: number,
    project: {
        id: number,
        name: string,
        slug: string,
        parent_id: string | null
    },
    cursus_ids: [
        number
    ],
    marked_at: string,
    marked: boolean,
    retriable_at: string,
    created_at: string,
    updated_at: string
}

type Campus = {
    id: number,
    name: string,
    time_zone: string,
    language : {
         id: number,
         name: string,
         identifier: string,
         created_at: string,
         updated_at: string
    },
    users_count: number,
    vogsphere_id: number,
    country: string,
    address: string,
    zip: string,
    city: string,
    website: string,
    facebook: string,
    twitter: string,
    active: boolean,
    public: boolean,
    email_extension: string,
    default_hidden_phone: string
}

type CampusUser = {
    id: number,
    user_id: number,
    campus_id: number,
    is_primary: boolean,
    created_at: string,
    updated_at: string
}


type CursusUser =  {
	grade: string | null,
	level: number,
	skills: Skill[]
	blackholed_at: string | null,
	id: number,
	begin_at: string,
	end_at: string,
	cursus_id: number,
	has_coalition: boolean,
	created_at: string,
	updated_at: string,
	user: {
		id: number,
		email: string,
		login: string,
		first_name: string,
		last_name: string,
		usual_full_name: string,
		usual_first_name: string | null,
		url: string,
		phone: string,
		displayname: string,
		kind: string,
		image: {
			link: string,
			versions: {
				large: string
				medium: string,
				small: string,
				micro: string
			}
		},
		staff: boolean,
		correction_point: number,
		pool_month: string,
		pool_year: string,
		location: string | null,
		wallet: number,
		anonymize_date: string,
		data_erasure_date: string,
		created_at: string,
		updated_at: string,
		alumnized_at: string | null,
		alumni: boolean,
		active: boolean
	},
	cursus: {
		id: number,
		created_at: string,
		name: string,
		slug: string,
		kind: string
	}
	
}

export type User = {
	id: number,
	email: string,
	login: string,
	first_name: string,
	last_name: string,
	usual_full_name: string,
	usual_first_name: string | null,
	url: string,
	phone: string,
	displayname: string,
	kind: string,
	image: {
		link: string,
		versions: {
			large: string,
			medium: string,
			small: string,
			micro: string
		}
	},
	staff: boolean,
	correction_point: number,
	pool_month: string,
	pool_year: string,
	location:  string | null,
	wallet: number,
	anonymize_date: string,
	data_erasure_date: string,
	created_at: string,
	updated_at: string,
	alumnized_at: string | null,
	alumni: boolean,
	active: boolean,
	groups: [],
    cursus_users: CursusUser[],
    projects_users: Projectuser[],
    languages_users: LanguagesUser[],
    achievements: Achievement[],
    titles: Title[],
    titles_users: TitlesUser[],
    partnerships: [],
	patroned: Patronage[],
    patroning: Patronage[],
    expertises_users: ExpertisesUser[],
	roles:  {id: number, name: string}[],
    campus:  Campus[],
    campus_users: CampusUser[]
}