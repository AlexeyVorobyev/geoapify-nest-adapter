import { Module } from '@nestjs/common'
import { GeoapifyModule } from '@core/geoapify/geoapify.module'
import { PlaceService } from '@modules/place/place.service'
import { PlaceQueriesResolver } from '@modules/place/resolver/place-queries.resolver'
import {JwtOauth2Module} from '@src/shared-modules/jwt-oauth2/jwt-oauth2.module'

@Module({
    imports: [
      GeoapifyModule,
      JwtOauth2Module
    ],
    providers: [
        PlaceService,
        PlaceQueriesResolver,
    ]
})
export class PlaceModule {
}