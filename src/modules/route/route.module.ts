import {Module} from '@nestjs/common'
import {GeoapifyModule} from '@core/geoapify/geoapify.module'
import {RouteService} from '@modules/route/route.service'
import {RouteQueriesResolver} from '@modules/route/resolver/route-queries.resolver'
import {JwtOauth2Module} from '@src/shared-modules/jwt-oauth2/jwt-oauth2.module'

@Module({
  imports: [
    GeoapifyModule,
    JwtOauth2Module,
  ],
  providers: [
    RouteService,
    RouteQueriesResolver,
  ],
})
export class RouteModule {
}