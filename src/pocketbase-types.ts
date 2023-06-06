/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Plats = "plats",
	ProchainsEvenements = "prochains_evenements",
	TipsEtAstuces = "tips_et_astuces",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type PlatsRecord = {
	images_plats?: string
	nom_plats?: string
	preparation_plats?: number
	personne_plats?: number
	calories?: number
	ingredients?: string
	etapes?: string
	date_creation?: IsoDateString
	ville?: string
}

export type ProchainsEvenementsRecord = {
	images_evenements?: string
	date_evenements?: IsoDateString
	etat_evenements?: string
	nom_evenements?: string
	lieu1_evenements?: string
	lieu2_evenements?: string
	duree?: number
}

export type TipsEtAstucesRecord = {
	images_astuces?: string
	date_astuces?: IsoDateString
	temps_lecture_astuces?: number
	nom_astuces?: string
	nom_createur_astuces?: string
	lieu_astuces?: string
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type PlatsResponse = Required<PlatsRecord> & BaseSystemFields
export type ProchainsEvenementsResponse = Required<ProchainsEvenementsRecord> & BaseSystemFields
export type TipsEtAstucesResponse = Required<TipsEtAstucesRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	plats: PlatsRecord
	prochains_evenements: ProchainsEvenementsRecord
	tips_et_astuces: TipsEtAstucesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	plats: PlatsResponse
	prochains_evenements: ProchainsEvenementsResponse
	tips_et_astuces: TipsEtAstucesResponse
	users: UsersResponse
}