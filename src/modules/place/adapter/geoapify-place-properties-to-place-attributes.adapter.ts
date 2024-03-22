import { PlaceListAttributes } from '@modules/place/attributes/place-list.attributes'
import { PlaceAttributes } from '@modules/place/attributes/place.attributes'
import { TGeoapifyPlaceProperties } from '@core/geoapify/places/type/geoapify-places-fetch-output.type'
import { Builder } from 'builder-pattern'
import { ContactsAttributes } from '@modules/place/attributes/contacts.attributes'
import { LocationAttributes } from '@modules/place/attributes/location.attributes'
import { PointAttributes } from '@modules/place/attributes/point.attributes'

export const geoapifyPlacePropertiesToPlaceAttributesAdapter = (input: TGeoapifyPlaceProperties): PlaceAttributes => {
    const placeAttributesBuilder = Builder<PlaceAttributes>()

    placeAttributesBuilder
        .id(input.place_id)
        .name(input.name)
        .contacts(
            input.contact
                ? Builder<ContactsAttributes>()
                    .email(input.contact.email)
                    .phone(input.contact.phone)
                    .build()
                : undefined,
        )
        .location(
            Builder<LocationAttributes>()
                .city(input.city).country(input.country)
                .region(input.region).state(input.state)
                .fullAddress(input.address_line2)
                .street(input.street)
                .coordinates(
                    Builder<PointAttributes>()
                        .lat(input.lat).lon(input.lon)
                        .build(),
                )
                .build(),
        )

    return placeAttributesBuilder.build()
}