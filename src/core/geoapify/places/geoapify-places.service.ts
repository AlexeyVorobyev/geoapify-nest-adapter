import { Inject, Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { TGeoapifyPlacesFetchInput } from '@core/geoapify/places/type/geoapify-places-fetch-input.type'
import { GeoapifyQueryBuilder } from '@core/geoapify/query-builder/geoapify.query-builder'
import geoapifyConfig from '@modules/config/config/geoapify.config'
import { ConfigType } from '@nestjs/config'
import { EEndpoint } from '@core/geoapify/enum/endpoint.enum'
import { TGeoapifyPlacesFetchOutput } from '@core/geoapify/places/type/geoapify-places-fetch-output.type'
import { EPlacesParam } from '@core/geoapify/places/enum/places-param.enum'
import { catchError, firstValueFrom } from 'rxjs'
import { AxiosError } from 'axios'
import { Builder } from 'builder-pattern'
import { UniversalError } from '@src/shared-modules/common/class/universal-error'
import { EUniversalExceptionType } from '@src/shared-modules/common/enum/exceptions'
import {
    geoapifyPlacesFetchInputToRecordAdapter
} from '@core/geoapify/places/adapter/geoapify-places-fetch-input-to-record.adapter'
import { TGeoapifyPlaceDetailFetchInput } from '@core/geoapify/places/type/geoapify-place-detail-fetch-input.type'
import { TGeoapifyPlaceDetailFetchOutput } from '@core/geoapify/places/type/geoapify-place-detail-fetch-output.type'

@Injectable()
export class GeoapifyPlacesService {
    constructor(
        private httpService: HttpService,
        @Inject(geoapifyConfig.KEY)
        private geoapifyConfiguration: ConfigType<typeof geoapifyConfig>,
    ) {
    }

    async geoapifyPlacesFetch(input: TGeoapifyPlacesFetchInput): Promise<TGeoapifyPlacesFetchOutput> {
        const adaptedValue = geoapifyPlacesFetchInputToRecordAdapter(input)

        let geoapifyQueryBuilder = new GeoapifyQueryBuilder(
            this.geoapifyConfiguration.rootApi,
            EEndpoint.places,
            this.geoapifyConfiguration.placesApiKey,
        )

        Object.keys(adaptedValue).forEach((key: EPlacesParam) => {
            if (adaptedValue[key]) {
                geoapifyQueryBuilder = geoapifyQueryBuilder.setPlacesParam(key, adaptedValue[key])
            }
        })

        const response = await firstValueFrom(
            this.httpService.get(geoapifyQueryBuilder.toString()).pipe(
                catchError((error: AxiosError) => {
                    Builder(UniversalError)
                        .exceptionBaseClass(EUniversalExceptionType.badRequest)
                        .messages([
                            'Not correct request to geoapify',
                            error.message
                        ])
                        .build().throw()
                    throw 'An error happened!';
                }),
            ),
        )

        return response.data
    }

    async geoapifyPlaceDetailFetch(input:TGeoapifyPlaceDetailFetchInput):Promise<TGeoapifyPlaceDetailFetchOutput> {

        return {}
    }
}