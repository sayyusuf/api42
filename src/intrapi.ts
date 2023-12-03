import { BaseApi42 } from "./base/baseApi42";
import { UsersApi } from "./api/users/users.api";
import { ApiData } from "./base/types";
import { LanguageUsersApi } from "./api/languages_users/languages_users.api";
import { LocationsApi } from "./api/locations/locations.api";
import { NotesApi } from "./api/notes/notes.api";
import { NotionsApi } from "./api/notions/notions.api";
import { OffersApi } from "./api/offers/offers.api";
import { PartnershipsApi } from "./api/partnerships/partnerships.api";
import { PartnershipsUsersApi } from "./api/partnerships_users/partnerships_users.api";
import { PatronagesReportsApi } from "./api/patronages_reports/patronages_reports.api";
import { ProductsApi } from "./api/products/products.api";
import { ProjectDataApi } from "./api/project_data/project_data.api";
import { TitlesApi } from "./api/titles/titles.api";
import { TitlesUsersApi } from "./api/titles_users/titles_users.api";
import { TransaltionsApi } from "./api/translations/translations.api";
import { AccreditationsApi } from "./api/accreditations/accreditations.api";
import { AchievementsApi } from "./api/achievements/achievements.api";
import { AchievementsUsersApi } from "./api/achievements_users/achievements_users.api";
import { AmendmentsApi } from "./api/amendments/amendments.api";
import { AnnouncementsApi } from "./api/announcements/announcements.api";
import { AppsApi } from "./api/apps/apps.api";
import { AttachmentsApi } from "./api/attachments/attachments.api";
import { BlocsApi } from "./api/blocs/blocs.api";
import { BroadcastApi } from "./api/broadcasts/broadcasts.api";
import { CampusApi } from "./api/campus/campus.api";
import { CampusUsersApi } from "./api/campususers/campususers.api";
import { CommandsApi } from "./api/commands/commands.api";
import { CommunityServicesApi } from "./api/communityservices/communityservices.api";
import { CorrectionPointHistoricsApi } from "./api/correctionpointhistorics/correctionpointhistorics.api";
import { CursusApi } from "./api/cursus/cursus.api";
import { CursusUsersApi } from "./api/cursususers/cursususers.api";
import { DashesUsersApi } from "./api/dashesusers/dashesusers.api";
import { DashesApi } from "./api/dashes/dashes.api";
import { EventsApi } from "./api/events/events.api";
import { EventsUsersApi } from "./api/EventsUsers/eventsusers.api";
import { ExamsApi } from "./api/Exams/exams.api";
import { ExpertisesApi } from "./api/Expertises/expertises.api";
import { ExpertisesUsersApi } from "./api/ExpertisesUsers/expertisesusers.api";
import { FeedbacksApi } from "./api/Feedbacks/feedbacks.api";
import { FlagsApi } from "./api/Flags/flags.api";
import { GroupsApi } from "./api/Groups/groups.api";
import { GroupsUsersApi } from "./api/GroupsUsers/groupsusers.api";
import { LanguagesApi } from "./api/Languages/languages.api";
import { ProjectSessionsApi } from "./api/project_sessions/project_sessions.api";
import { ProjectSessionsSkillsApi } from "./api/project_sessions_skills/project_sessions_skills.api";
import { ProjectsApi } from "./api/projects/projects.api";
import { ProjectsUsersApi } from "./api/projects_users/projects_users.api";
import { QuestsUsersApi } from "./api/quest_users/quest_users.api";
import { RolesApi } from "./api/roles/roles.api";
import { RolesEntitiesApi } from "./api/rolesentities/rolesentities.api";
import { ScaleTeamsApi } from "./api/scaleteams/scaleteams.api";
import { SkillsApi } from "./api/skills/skills.api";
import { SlotsApi } from "./api/slots/slots.api";
import { SubnotionsApi } from "./api/subnotions/subnotions.api";
import { TagsApi } from "./api/Tags/tags.api";
import { TagsUsersApi } from "./api/TagsUsers/tagsusers.api";
import { TeamsApi } from "./api/Teams/teams.api";
import { TeamsUsersApi } from "./api/TeamsUsers/teamsusers.api";

export class IntraApi{
	private base: BaseApi42

	public accreditions: AccreditationsApi
	public achievements: AchievementsApi
	public achievements_users: AchievementsUsersApi
	public amendments: AmendmentsApi
	public announcements: AnnouncementsApi
	public apps: AppsApi
	public attachments: AttachmentsApi
	public blocs: BlocsApi
	public broadcasts: BroadcastApi
	public campus: CampusApi
	public campususers: CampusUsersApi
	public commands: CommandsApi
	public communityservices: CommunityServicesApi
	public correctionpointhistorics: CorrectionPointHistoricsApi
	public cursus: CursusApi
	public cursususers: CursusUsersApi
	public dashesusers: DashesUsersApi
	public events: EventsApi
	public eventsusers: EventsUsersApi
	public exams: ExamsApi
	public expertises: ExpertisesApi
	public expertisesusers: ExpertisesUsersApi
	public feedbacks: FeedbacksApi
	public flags: FlagsApi
	public groups: GroupsApi
	public groupsusers: GroupsUsersApi
	public languages: LanguagesApi
	public languagesusers: LanguageUsersApi
	public locations: LocationsApi
	public notes: NotesApi
	public notions: NotionsApi
	public offers: OffersApi
	public partnerships: PartnershipsApi
	public partnershipsusers: PartnershipsUsersApi
	public patronagesreports: PatronagesReportsApi
	public products: ProductsApi
	public projectdata: ProjectDataApi
	public projectsessions: ProjectSessionsApi
	public projectsessionsskills: ProjectSessionsSkillsApi
	public projects: ProjectsApi
	public projectusers: ProjectsUsersApi
	public questusers: QuestsUsersApi
	public roles: RolesApi
	public rolesentities: RolesEntitiesApi
	public scaleteams: ScaleTeamsApi
	public skills: SkillsApi
	public slots: SlotsApi
	public subnotions: SubnotionsApi
	public tags: TagsApi
	public tagsusers: TagsUsersApi
	public teams: TeamsApi
	public teamsusers: TeamsUsersApi
	public titles: TitlesApi
	public titlesusers: TitlesUsersApi
	public translations: TransaltionsApi
	public users: UsersApi
	

	
	static async new(apiData: ApiData) : Promise<IntraApi>{
		const base = await BaseApi42.new(apiData);
		return new IntraApi(base)
	}
	private constructor(baseApi: BaseApi42){
		this.base = baseApi
		this.achievements = new AchievementsApi(this.base)
		this.accreditions = new AccreditationsApi(this.base);
        this.achievements_users = new AchievementsUsersApi(this.base);
        this.amendments = new AmendmentsApi(this.base);
        this.announcements = new AnnouncementsApi(this.base);
        this.apps = new AppsApi(this.base);
        this.attachments = new AttachmentsApi(this.base);
        this.blocs = new BlocsApi(this.base);
        this.broadcasts = new BroadcastApi(this.base);
        this.campus = new CampusApi(this.base);
        this.campususers = new CampusUsersApi(this.base);
        this.commands = new CommandsApi(this.base);
        this.communityservices = new CommunityServicesApi(this.base);
        this.correctionpointhistorics = new CorrectionPointHistoricsApi(this.base);
        this.cursus = new CursusApi(this.base);
        this.cursususers = new CursusUsersApi(this.base);
        this.dashesusers = new DashesUsersApi(this.base);
        this.events = new EventsApi(this.base);
        this.eventsusers = new EventsUsersApi(this.base);
        this.exams = new ExamsApi(this.base);
        this.expertises = new ExpertisesApi(this.base);
        this.expertisesusers = new ExpertisesUsersApi(this.base);
        this.feedbacks = new FeedbacksApi(this.base);
        this.flags = new FlagsApi(this.base);
        this.groups = new GroupsApi(this.base);
        this.groupsusers = new GroupsUsersApi(this.base);
        this.languages = new LanguagesApi(this.base);
		this.languagesusers = new LanguageUsersApi(this.base)
		this.locations = new LocationsApi(this.base)
		this.notes = new NotesApi(this.base)
		this.notions = new NotionsApi(this.base)
		this.offers = new OffersApi(this.base)
		this.partnerships = new PartnershipsApi(this.base)
		this.partnershipsusers = new PartnershipsUsersApi(this.base)
		this.patronagesreports = new PatronagesReportsApi(this.base)
		this.products = new ProductsApi(baseApi)
		this.projectdata = new ProjectDataApi(baseApi)
		this.projectsessions = new ProjectSessionsApi(this.base);
		this.projectsessionsskills = new ProjectSessionsSkillsApi(this.base);
		this.projects = new ProjectsApi(this.base);
		this.projectusers = new ProjectsUsersApi(this.base);
		this.questusers = new QuestsUsersApi(this.base);
		this.roles = new RolesApi(this.base);
		this.rolesentities = new RolesEntitiesApi(this.base);
		this.scaleteams = new ScaleTeamsApi(this.base);
		this.skills = new SkillsApi(this.base);
		this.slots = new SlotsApi(this.base);
		this.subnotions = new SubnotionsApi(this.base);
		this.tags = new TagsApi(this.base);
		this.tagsusers = new TagsUsersApi(this.base);
		this.teams = new TeamsApi(this.base);
		this.teamsusers = new TeamsUsersApi(this.base);
		this.titles = new TitlesApi(baseApi)
		this.titlesusers = new TitlesUsersApi(baseApi)
		this.translations = new TransaltionsApi(baseApi)	
		this.users = new UsersApi(this.base)
	}
}