import {Field, ObjectType} from '@nestjs/graphql'

@ObjectType('TRouteLegMetadataAttributes')
export class RouteLegMetadataAttributes {
    @Field(() => Number, {
        description: 'Distance in unit',
    })
    distance: number

    @Field(() => Number, {
        description: 'Time in seconds',
    })
    time: number
}