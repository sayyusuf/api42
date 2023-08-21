export interface RolesEntity {
  id: number | string;
  entity_id: number | string;
  entity_type: string;
  created_at: string;
  expires_at: string;
  entity: Entity;
  role: Role;
}

type Entity = {
  id: number | string;
  name: string;
  description: string;
  image: string;
  website: string;
  public: boolean;
  scopes: any[];
  created_at: string;
  updated_at: string;
  owner: EntityOwner;
  rate_limit: number;
}

type EntityOwner = {
	id: number | string;
	login: string;
	url: string;
}

type Role = {
  id: number | string;
  name: string;
  description: string;
}
