import PocketBase from 'pocketbase'
import type {
  ProchainsEvenementsResponse,
  RecettesDeNosExpertsResponse,
  TipsEtAstucesResponse,
  PlatsResponse
} from './pocketbase-types'
export const pb = new PocketBase('http://127.0.0.1:8090')

export async function allPlat() {
  const records = await pb.collection('plats').getFullList<PlatsResponse>()
  return records
}

export async function allTips() {
  const records = await pb.collection('tips_et_astuces').getFullList<TipsEtAstucesResponse>()
  return records
}

export async function allExpert() {
  const records = await pb
    .collection('recettes_de_nos_experts')
    .getFullList<RecettesDeNosExpertsResponse>()
  return records
}

export async function allEvenement() {
  const records = await pb
    .collection('prochains_evenements')
    .getFullList<ProchainsEvenementsResponse>()
  return records
}

//export async function artisteInfos(id: string) {
//  const records = await pb.collection('artistes').getFullList({ filter: id, expand: 'oeuvres' })
//  return records
//}

//export async function oeuvresArtiste(name: string) {
//  const records = await pb.collection('oeuvres').getFullList({ filter: name, expand: 'artiste' })
//  return records
//}

// liste des artistes triés par date (croissant)
//export async function dateArtiste() {
//  const records = await pb.collection('artistes').getFullList({ sort: 'date_naissance' })
//  return records
//}

// liste des oeuvres triées par date (croissant)
//export async function dateOeuvre() {
//  const records = await pb.collection('oeuvres').getFullList({ sort: 'date_naissance' })
//  return records
//}

export async function oneID(id: string) {
  const oneRecord = await pb.collection('plats').getOne<PlatsResponse>(id)
  return oneRecord
}

export async function one2ID(id: string) {
  const oneRecord = await pb.collection('tips_et_astuces').getOne<TipsEtAstucesResponse>(id)
  return oneRecord
}

/* export async function secondID(id: string) {
  const oneRecord = await pb
    .collection('oeuvres')
    .getOne<OeuvresResponse>(id, { expand: 'oeuvres(oeuvres)' })
  return oneRecord
}

export async function IDOeuvres() {
  const records = await pb
    .collection('artistes')
    .getFullList<ArtistesResponse>({ filter: 'id', expand: 'artistes' })
  return records 
}*/
