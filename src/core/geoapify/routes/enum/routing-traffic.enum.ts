import {registerEnumType} from '@nestjs/graphql'

export enum ERoutingTraffic {
    freeFlow = 'free_flow',
    approximated = 'approximated'
}

registerEnumType(ERoutingTraffic, {
    name: 'ERoutingTraffic',
    description: 'Traffic mode',
})