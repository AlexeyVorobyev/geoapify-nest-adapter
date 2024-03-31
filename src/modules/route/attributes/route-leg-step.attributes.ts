import {Field, ObjectType} from '@nestjs/graphql'
import {RouteLegMetadataAttributes} from '@modules/route/attributes/route-leg-metadata.attributes'
import {PointAttributes} from '@modules/place/attributes/point.attributes'
import {RouteLegStepMetadataAttributes} from '@modules/route/attributes/route-leg-step-metadata.attributes'

@ObjectType('TRouteLegStepAttributes')
export class RouteLegStepAttributes {
    @Field(() => RouteLegStepMetadataAttributes, {
        description: 'Route step metadata',
    })
    meta: RouteLegStepMetadataAttributes

    @Field(() => [PointAttributes], {
        description: 'Coordinates of step line',
    })
    coordinates: PointAttributes[]

    @Field(() => String, {
        description: 'Instruction',
        nullable: true
    })
    instruction: string
}