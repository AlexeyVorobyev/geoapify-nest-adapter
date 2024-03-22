import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType('TFacilitiesAttributes')
export class FacilitiesAttributes {
    @Field(() => Boolean, {
        description: 'Is internet available in this place',
        nullable: true
    })
    internetAccess: boolean

    @Field(() => Boolean, {
        description: 'Is this place suitable for wheelchair',
        nullable: true
    })
    wheelchair: boolean

    @Field(() => Boolean, {
        description: 'Is smoking permitted',
        nullable: true
    })
    smoking: boolean

    @Field(() => Boolean, {
        description: 'Are there toilets in this place',
        nullable: true
    })
    toilets: boolean

    @Field(() => Boolean, {
        description: 'Is dogs permitted',
        nullable: true
    })
    dogs: boolean

    @Field(() => Boolean, {
        description: 'Are takeaway available',
        nullable: true
    })
    takeaway: boolean

    @Field(() => Boolean, {
        description: 'Are delivery available',
        nullable: true
    })
    delivery: boolean
}