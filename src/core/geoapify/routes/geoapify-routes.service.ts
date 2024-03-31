import {Inject, Injectable} from '@nestjs/common'
import {GeoapifyQueryBuilder} from '@core/geoapify/query-builder/geoapify.query-builder'
import geoapifyConfig from '@modules/config/config/geoapify.config'
import {ConfigType} from '@nestjs/config'
import {EEndpoint} from '@core/geoapify/enum/endpoint.enum'
import {GeoapifyFetchService} from '@core/geoapify/fetch/geoapify-fetch.service'
import {TGeoapifyRoutingFetchInput} from '@core/geoapify/routes/type/geoapify-routing-fetch-input.type'
import {TGeoapifyRoutingFetchOutput} from '@core/geoapify/routes/type/geoapify-routing-fetch-output.type'
import {
    geoapifyRoutingFetchInputToRecordAdapter,
} from '@core/geoapify/routes/adapter/geoapify-routing-fetch-input-to-record.adapter'
import {ERoutingParam} from '@core/geoapify/routes/enum/routing-param.enum'
import {EVersion} from '@core/geoapify/enum/version.enum'

@Injectable()
export class GeoapifyRoutesService {
    constructor(
        @Inject(geoapifyConfig.KEY)
        private geoapifyConfiguration: ConfigType<typeof geoapifyConfig>,
        private geoapifyFetchService: GeoapifyFetchService,
    ) {
    }

    async geoapifyRoutingFetch(input: TGeoapifyRoutingFetchInput): Promise<TGeoapifyRoutingFetchOutput> {
        const adaptedValue = geoapifyRoutingFetchInputToRecordAdapter(input)

        let geoapifyQueryBuilder = new GeoapifyQueryBuilder(
            this.geoapifyConfiguration.rootApi,
            EEndpoint.routing,
            this.geoapifyConfiguration.apiKey,
            EVersion.v1
        )

        Object.keys(adaptedValue).forEach((key: ERoutingParam) => {
            if (adaptedValue[key]) {
                geoapifyQueryBuilder = geoapifyQueryBuilder.setRoutingParam(key, adaptedValue[key])
            }
        })

        console.log(geoapifyQueryBuilder.toString())

        const response = await this.geoapifyFetchService.fetch(geoapifyQueryBuilder.toString())

        return response.data
    }
}