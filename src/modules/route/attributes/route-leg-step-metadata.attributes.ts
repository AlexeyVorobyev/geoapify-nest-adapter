import {Field, ObjectType} from '@nestjs/graphql'
import {RouteLegStepElevationAttributes} from '@modules/route/attributes/route-leg-step-elevation.attributes'

@ObjectType('TRouteLegStepMetadataAttributes')
export class RouteLegStepMetadataAttributes {
    @Field(() => Number, {
        description: 'Distance in unit',
    })
    distance: number

    @Field(() => Number, {
        description: 'Time in seconds',
    })
    time: number

    @Field(() => RouteLegStepElevationAttributes, {
        description: 'Elevation data',
    })
    elevation: RouteLegStepElevationAttributes
}