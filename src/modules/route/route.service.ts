import {Injectable} from '@nestjs/common'
import {GeoapifyRoutesService} from '@core/geoapify/routes/geoapify-routes.service'
import {RouteRoutingInput} from '@modules/route/input/route-routing.input'
import {RouteRoutingAttributes} from '@modules/route/attributes/route-routing.attributes'
import {
    geoapifyRoutingFetchOutputToRouteRoutingAttributesAdapter,
} from '@modules/route/adapter/geoapify-routing-fetch-output-to-route-routing-attributes.adapter'

@Injectable()
export class RouteService {
    constructor(
        private geoapifyRoutesService: GeoapifyRoutesService,
    ) {
    }

    async routing(input: RouteRoutingInput): Promise<RouteRoutingAttributes> {
        const response = await this.geoapifyRoutesService.geoapifyRoutingFetch({
            lang: input.language,
            waypoints: input.waypoints,
            mode: input.mode,
            traffic: input.traffic,
            units: input.units,
        })

        return geoapifyRoutingFetchOutputToRouteRoutingAttributesAdapter(response)
    }
}