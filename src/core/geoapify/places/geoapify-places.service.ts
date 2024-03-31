import {Inject, Injectable} from '@nestjs/common'
import {TGeoapifyPlacesFetchInput} from '@core/geoapify/places/type/geoapify-places-fetch-input.type'
import {GeoapifyQueryBuilder} from '@core/geoapify/query-builder/geoapify.query-builder'
import geoapifyConfig from '@modules/config/config/geoapify.config'
import {ConfigType} from '@nestjs/config'
import {EEndpoint} from '@core/geoapify/enum/endpoint.enum'
import {TGeoapifyPlacesFetchOutput} from '@core/geoapify/places/type/geoapify-places-fetch-output.type'
import {EPlacesParam} from '@core/geoapify/places/enum/places-param.enum'
import {
    geoapifyPlacesFetchInputToRecordAdapter,
} from '@core/geoapify/places/adapter/geoapify-places-fetch-input-to-record.adapter'
import {TGeoapifyPlaceDetailsFetchInput} from '@core/geoapify/places/type/geoapify-place-detail-fetch-input.type'
import {TGeoapifyPlaceDetailsFetchOutput} from '@core/geoapify/places/type/geoapify-place-detail-fetch-output.type'
import {
    geoapifyPlaceDetailFetchInputToRecordAdapter,
} from '@core/geoapify/places/adapter/geoapify-place-detail-fetch-input-to-record.adapter'
import {GeoapifyFetchService} from '@core/geoapify/fetch/geoapify-fetch.service'
import {EPlaceDetailParam} from '@core/geoapify/places/enum/place-detail-param.enum'
import {EVersion} from '@core/geoapify/enum/version.enum'

@Injectable()
export class GeoapifyPlacesService {
    constructor(
        @Inject(geoapifyConfig.KEY)
        private geoapifyConfiguration: ConfigType<typeof geoapifyConfig>,
        private geoapifyFetchService: GeoapifyFetchService,
    ) {
    }

    async geoapifyPlacesFetch(input: TGeoapifyPlacesFetchInput): Promise<TGeoapifyPlacesFetchOutput> {
        const adaptedValue = geoapifyPlacesFetchInputToRecordAdapter(input)

        let geoapifyQueryBuilder = new GeoapifyQueryBuilder(
            this.geoapifyConfiguration.rootApi,
            EEndpoint.places,
            this.geoapifyConfiguration.apiKey,
            EVersion.v2
        )

        Object.keys(adaptedValue).forEach((key: EPlacesParam) => {
            if (adaptedValue[key]) {
                geoapifyQueryBuilder = geoapifyQueryBuilder.setPlacesParam(key, adaptedValue[key])
            }
        })

        const response = await this.geoapifyFetchService.fetch(geoapifyQueryBuilder.toString())

        return response.data
    }

    async geoapifyPlaceDetailFetch(input: TGeoapifyPlaceDetailsFetchInput): Promise<TGeoapifyPlaceDetailsFetchOutput> {
        const adaptedValue = geoapifyPlaceDetailFetchInputToRecordAdapter(input)

        let geoapifyQueryBuilder = new GeoapifyQueryBuilder(
            this.geoapifyConfiguration.rootApi,
            EEndpoint.placeDetails,
            this.geoapifyConfiguration.apiKey,
            EVersion.v2
        )

        Object.keys(adaptedValue).forEach((key: EPlaceDetailParam) => {
            if (adaptedValue[key]) {
                geoapifyQueryBuilder = geoapifyQueryBuilder.setPlaceDetailsParam(key, adaptedValue[key])
            }
        })

        const response = await this.geoapifyFetchService.fetch(geoapifyQueryBuilder.toString())

        return response.data
    }
}