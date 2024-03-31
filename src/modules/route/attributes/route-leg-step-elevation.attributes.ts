import {Field, ObjectType} from '@nestjs/graphql'

@ObjectType('TRouteLegStepElevationAttributes')
export class RouteLegStepElevationAttributes {
    @Field(() => Number, {
        description: 'Average elevation',
    })
    average: number

    @Field(() => Number, {
        description: 'Max elevation',
    })
    max: number

    @Field(() => Number, {
        description: 'Min elevation',
    })
    min: number
}