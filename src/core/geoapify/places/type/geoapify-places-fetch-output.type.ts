export type TGeoapifyPlacesFetchOutput = {
    type: string,
    features: TFeatures[]
}

type TFeatures = {
    type: string
    properties: TGeoapifyPlaceProperties
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
    contact: TContact
    place_id: string
}

type TContact = {
    phone: string,
    email: string
}