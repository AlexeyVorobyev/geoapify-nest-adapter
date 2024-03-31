import {registerEnumType} from '@nestjs/graphql'

export enum ERoutingUnits {
    metric = 'metric',
    imperial = 'imperial'
}

registerEnumType(ERoutingUnits, {
    name: 'ERoutingUnits',
    description: 'Units f result',
})