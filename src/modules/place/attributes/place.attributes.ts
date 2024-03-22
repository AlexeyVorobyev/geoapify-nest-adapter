import { Field, ObjectType } from '@nestjs/graphql'
import { ContactsAttributes } from '@modules/place/attributes/contacts.attributes'
import { LocationAttributes } from '@modules/place/attributes/location.attributes'

@ObjectType('TPlaceAttributes')
export class PlaceAttributes {
    @Field(() => String, {
        description: 'Id of place'
    })
    id: string

    @Field(() => String, {
        description: 'Name of place'
    })
    name: string

    @Field(() => LocationAttributes, {
        description: 'Location of place'
    })
    location: LocationAttributes

    @Field(() => ContactsAttributes, {
        description: 'Contacts of place',
        nullable: true
    })
    contacts: ContactsAttributes
}