import {ERoutingMode} from '@core/geoapify/routes/enum/routing-mode.enum'
import {ERoutingTraffic} from '@core/geoapify/routes/enum/routing-traffic.enum'
import {EDistanceUnit} from '@modules/route/enum/distance-unit.enum'

type TInstruction = {
    text: string
}

type TStep = {
    from_index: number
    to_index: number
    distance: number
    time: number
    instruction: TInstruction
    name: string
    elevation: number
    min_elevation: number
    max_elevation: number
}

type TLeg = {
    distance: number
    time: number
    steps: TStep[]
    elevation: number[]
    elevation_range: [number, number][]
}

type TWaypoint = {
    location: [number, number]
    original_index: number
}

export type TRouteProperties = {
    mode: ERoutingMode
    traffic: ERoutingTraffic
    distance: number
    distance_units: EDistanceUnit
    time: number
    legs: TLeg[]
    country_code: string[]
    waypoints: TWaypoint[]
}

type TGeometry = {
    coordinates: [number,number][][]
}

type TFeature = {
    properties: TRouteProperties
    geometry: TGeometry
}

export type TGeoapifyRoutingFetchOutput = {
    features: TFeature[]
}