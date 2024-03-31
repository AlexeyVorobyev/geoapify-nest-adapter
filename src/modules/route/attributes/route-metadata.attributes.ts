import {Field, ObjectType} from '@nestjs/graphql'
import {ERoutingMode} from '@core/geoapify/routes/enum/routing-mode.enum'
import {ERoutingTraffic} from '@core/geoapify/routes/enum/routing-traffic.enum'
import {EDistanceUnit} from '@modules/route/enum/distance-unit.enum'

@ObjectType('TRouteMetadataAttributes')
export class RouteMetadataAttributes {
    @Field(() => Number, {
        description: 'Distance in unit',
    })
    distance: number

    @Field(() => EDistanceUnit, {
        description: 'Distance unit type',
    })
    distanceUnit: EDistanceUnit

    @Field(() => Number, {
        description: 'Time in seconds',
    })
    time: number

    @Field(() => ERoutingMode, {
        description: 'Mode of route',
    })
    mode: ERoutingMode

    @Field(() => ERoutingTraffic, {
        description: 'Traffic mode',
    })
    traffic: ERoutingTraffic

    @Field(() => [String], {
        description: 'Countries under route',
    })
    countries: string[]
}