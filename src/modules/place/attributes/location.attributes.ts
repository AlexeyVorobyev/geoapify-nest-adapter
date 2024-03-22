import { Field, ObjectType } from '@nestjs/graphql'
import { PointAttributes } from '@modules/place/attributes/point.attributes'

@ObjectType('TLocationAttributes')
export class LocationAttributes {
    @Field(() => String, {
        description: 'Country of place',
        nullable: true
    })
    country: string

    @Field(() => String, {
        description: 'Region of place',
        nullable: true
    })
    region: string

    @Field(() => String, {
        description: 'State of place',
        nullable: true
    })
    state: string

    @Field(() => String, {
        description: 'City of place',
        nullable: true
    })
    city: string

    @Field(() => String, {
        description: 'Street of place',
        nullable: true
    })
    street: string

    @Field(() => String, {
        description: 'Full address of place',
        nullable: true
    })
    fullAddress: string

    @Field(() => PointAttributes, {
        description: 'Coordinates of Place'
    })
    coordinates: PointAttributes
}