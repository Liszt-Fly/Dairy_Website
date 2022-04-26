import { LatLngTuple } from "leaflet"

export interface news {
    title: string,
    subtitle: string,
    link: string
}




export enum category {
    COWBREED = "cow breed",
    MILKBRAND = "Milk brand"
}

export enum area {
    ASIA = "Asia",
    EUROPE = "Europe",
    SOUTH_AMERICA = "South America",
    AFRICA = "Africa",
    OCEANIA = "Oceania",
    NORTH_AMERICA = "North America",

}
export interface Image {
    title: string,
    url: string,
    category: category,
    location: area

}

export interface TechnologyInfo {
    title: string,
    image: string,
    content: string
}

export interface Data {
    name: string,
    location: LatLngTuple,
    content: string
}

export interface PersonInfo {
    name: string,
    email: string,
    schoolname: string

}