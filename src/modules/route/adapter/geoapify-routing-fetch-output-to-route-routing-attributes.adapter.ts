import { PlaceListAttributes } from '@modules/place/attributes/place-list.attributes'
import { PlaceAttributes } from '@modules/place/attributes/place.attributes'
import { TGeoapifyPlaceProperties } from '@core/geoapify/places/type/geoapify-places-fetch-output.type'
import { Builder } from 'builder-pattern'
import { ContactsAttributes } from '@modules/place/attributes/contacts.attributes'
import { LocationAttributes } from '@modules/place/attributes/location.attributes'
import { PointAttributes } from '@modules/place/attributes/point.attributes'
import { FacilitiesAttributes } from '@modules/place/attributes/facilities.attributes'
import {
    TGeoapifyRoutingFetchOutput,
    TRouteProperties,
} from '@core/geoapify/routes/type/geoapify-routing-fetch-output.type'
import {RouteRoutingAttributes} from '@modules/route/attributes/route-routing.attributes'
import {RouteMetadataAttributes} from '@modules/route/attributes/route-metadata.attributes'
import {RouteLegAttributes} from '@modules/route/attributes/route-leg.attributes'
import {RouteLegMetadataAttributes} from '@modules/route/attributes/route-leg-metadata.attributes'
import {RouteLegStepAttributes} from '@modules/route/attributes/route-leg-step.attributes'
import {RouteLegStepMetadataAttributes} from '@modules/route/attributes/route-leg-step-metadata.attributes'
import {RouteLegStepElevationAttributes} from '@modules/route/attributes/route-leg-step-elevation.attributes'

export const geoapifyRoutingFetchOutputToRouteRoutingAttributesAdapter = (input: TGeoapifyRoutingFetchOutput): RouteRoutingAttributes => {
    const routeProperties = input.features[0].properties
    const routeGeometry = input.features[0].geometry

    console.log(routeProperties)
    console.log(routeGeometry)

    const routeRoutingAttributesBuilder = Builder<RouteRoutingAttributes>()

    routeRoutingAttributesBuilder
        .meta(
            Builder<RouteMetadataAttributes>()
                .countries(routeProperties.country_code)
                .distance(routeProperties.distance)
                .time(routeProperties.time)
                .mode(routeProperties.mode)
                .distanceUnit(routeProperties.distance_units)
                .traffic(routeProperties.traffic)
                .build()
        )
        .legs(routeProperties.legs.map((item, index) => (
            Builder<RouteLegAttributes>()
                .meta(
                    Builder<RouteLegMetadataAttributes>()
                        .distance(item.distance)
                        .time(item.time)
                        .build()
                )
                .steps(
                    item.steps.map((_item) => {
                        let coordinates: PointAttributes[] = []

                        for (let i = _item.from_index; i < _item.to_index; i++) {
                            coordinates.push(
                                Builder<PointAttributes>()
                                    .lat(routeGeometry.coordinates[index][i][1])
                                    .lon(routeGeometry.coordinates[index][i][0])
                                    .build()
                            )
                        }

                        return (
                            Builder<RouteLegStepAttributes>()
                                .meta(
                                    Builder<RouteLegStepMetadataAttributes>()
                                        .time(_item.time)
                                        .distance(_item.distance)
                                        .elevation(
                                            Builder<RouteLegStepElevationAttributes>()
                                                .max(_item.max_elevation)
                                                .min(_item.min_elevation)
                                                .average(_item.elevation)
                                                .build()
                                        )
                                        .build()
                                )
                                .instruction(_item.instruction?.text)
                                .coordinates(coordinates)
                                .build()
                        )
                    })
                )
                .build()
        )))

    console.log(routeRoutingAttributesBuilder.build().legs)

    return routeRoutingAttributesBuilder.build()
}