import {registerEnumType} from '@nestjs/graphql'

export enum ERoutingMode {
    car = 'drive',
    bus = 'bus',
    scooter = 'scooter',
    motorcycle = 'motorcycle',
    bicycle = 'bicycle',
    walk = 'walk',
    transit = 'transit',
    approximatedTransit = 'approximated_transit'
}

registerEnumType(ERoutingMode, {
    name: 'ERoutingMode',
    description: 'Modes of routing, for example car or by feet',
})