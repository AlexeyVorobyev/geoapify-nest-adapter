export type TGeoapifyPlacesFetchOutput = {
    type: string,
    features: TFeatures[]
}

type TFeatures = {
    type: string
    properties: TGeoapifyPlaceProperties
}

type TContact = {
    phone?: string,
    email?: string
}

type TFacilities = {
    internet_access?: boolean
    wheelchair?: boolean
    smoking?:boolean
    toilets?:boolean
    dogs?:boolean
    takeaway?:boolean
    delivery?:boolean
}

export type TGeoapifyPlaceProperties = {
    lat: number,
    lon: number,
    name: string,
    country: string,
    region: string,
    state: string,
    city: string,
    street: string,
    address_line2: string
    contact?: TContact
    place_id: string
    website?: string
    description?: string
    facilities?: TFacilities
}