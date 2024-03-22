import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType('TContactsAttributes')
export class ContactsAttributes {
    @Field(() => String, {
        description: 'Phone number',
        nullable: true,
    })
    phone: string

    @Field(() => String, {
        description: 'Email',
        nullable: true,
    })
    email: string

    @Field(() => String, {
        description: 'Website',
        nullable: true,
    })
    website: string
}