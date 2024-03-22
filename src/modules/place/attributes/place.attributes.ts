import { Field, ObjectType } from '@nestjs/graphql'
import { ContactsAttributes } from '@modules/place/attributes/contacts.attributes'
import { LocationAttributes } from '@modules/place/attributes/location.attributes'
import { FacilitiesAttributes } from '@modules/place/attributes/facilities.attributes'
import { DefaultAttributes } from '@src/shared-modules/graphql/attributes/default.attributes'

@ObjectType('TPlaceAttributes')
export class PlaceAttributes extends DefaultAttributes {
    @Field(() => String, {
        description: 'Id of place'
    })
    id: string

    @Field(() => String, {
        description: 'Name of place'
    })
    name: string

    @Field(() => String, {
        description: 'Description of place',
        nullable: true
    })
    description: string

    @Field(() => LocationAttributes, {
        description: 'Location of place'
    })
    location: LocationAttributes

    @Field(() => ContactsAttributes, {
        description: 'Contacts of place',
    })
    contacts: ContactsAttributes

    @Field(() => FacilitiesAttributes, {
        description: 'Facilities of place',
    })
    facilities: FacilitiesAttributes
}