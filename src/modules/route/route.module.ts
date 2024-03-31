import { Module } from '@nestjs/common'
import { GeoapifyModule } from '@core/geoapify/geoapify.module'
import { PlaceService } from '@modules/place/place.service'
import { PlaceQueriesResolver } from '@modules/place/resolver/place-queries.resolver'
import {RouteService} from '@modules/route/route.service'
import {RouteQueriesResolver} from '@modules/route/resolver/route-queries.resolver'

@Module({
    imports: [GeoapifyModule],
    providers: [
        RouteService,
        RouteQueriesResolver
    ]
})
export class RouteModule {
}