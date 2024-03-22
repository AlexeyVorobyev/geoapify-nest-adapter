import { Field, InputType, ObjectType } from '@nestjs/graphql'

@ObjectType('TPointAttributes')
export class PointAttributes {
    @Field(() => Number, {
        description: 'Latitude'
    })
    lat: number

    @Field(() => Number, {
        description: 'Longitude'
    })
    lon: number
}