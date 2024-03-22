import { Injectable } from '@nestjs/common'
import { GeoapifyPlacesService } from '@core/geoapify/places/geoapify-places.service'
import { PlaceListInput } from '@modules/place/input/place-list.input'
import { PlaceAttributes } from '@modules/place/attributes/place.attributes'
import { PlaceListAttributes } from '@modules/place/attributes/place-list.attributes'
import { Builder } from 'builder-pattern'
import {
    geoapifyPlacePropertiesToPlaceAttributesAdapter,
} from '@modules/place/adapter/geoapify-place-properties-to-place-attributes.adapter'
import { ListMetaAttributes } from '@src/shared-modules/graphql/attributes/list-meta.attributes'
import { EPlaceCategory } from '@core/geoapify/places/enum/places-category.enum'
import { PlaceRecordInput } from '@modules/place/input/place-record.input'

@Injectable()
export class PlaceService {
    constructor(
        private geoapifyPlacesService: GeoapifyPlacesService,
    ) {
    }

    async list(input: PlaceListInput): Promise<PlaceListAttributes> {
        const response = await this.geoapifyPlacesService.geoapifyPlacesFetch({
            limit: input.perPage,
            offset: input.page * input.perPage,
            categories: input.categories && input.categories?.length
                ? input.categories
                : Object.values(EPlaceCategory),
            conditions: input.conditions,
            filter: input.boundingBox,
            lang: input.language,
            name: input.simpleFilter,
        })

        return Builder<PlaceListAttributes>()
            .data(
                response.features
                    .map((item) => geoapifyPlacePropertiesToPlaceAttributesAdapter(item.properties)),
            )
            .meta(
                Builder<ListMetaAttributes>()
                    .currentPage(input.page)
                    .elementsPerPage(input.perPage)
                    .build(),
            )
            .build()
    }

    async record(input:PlaceRecordInput):Promise<PlaceAttributes> {
        const response = await this.geoapifyPlacesService.geoapifyPlaceDetailFetch({
            id: input.id,
            lang: input.language
        })

        return geoapifyPlacePropertiesToPlaceAttributesAdapter(response.features[0].properties)
    }
}