import { Module } from '@nestjs/common'
import { GeoapifyModule } from '@core/geoapify/geoapify.module'
import { PlaceService } from '@modules/place/place.service'
import { PlaceQueriesResolver } from '@modules/place/resolver/place-queries.resolver'

@Module({
    imports: [GeoapifyModule],
    providers: [
        PlaceService,
        PlaceQueriesResolver
    ]
})
export class PlaceModule {
}