import {Field, ObjectType} from '@nestjs/graphql'
import {RouteLegMetadataAttributes} from '@modules/route/attributes/route-leg-metadata.attributes'
import {RouteLegStepAttributes} from '@modules/route/attributes/route-leg-step.attributes'

@ObjectType('TRouteLegAttributes')
export class RouteLegAttributes {
    @Field(() => RouteLegMetadataAttributes, {
        description: 'Route leg metadata',
    })
    meta: RouteLegMetadataAttributes

    @Field(() => [RouteLegStepAttributes], {
        description: 'Route leg steps'
    })
    steps: RouteLegStepAttributes[]
}