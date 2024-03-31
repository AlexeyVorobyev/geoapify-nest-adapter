import {registerEnumType} from '@nestjs/graphql'

export enum EDistanceUnit {
    meters = 'meters',
    miles = 'miles'
}

registerEnumType(EDistanceUnit, {
    description: "Distance unit",
    name: "EDistanceUnit"
})