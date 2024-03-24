import { Module } from '@nestjs/common'
import { GeoapifyPlacesService } from '@core/geoapify/places/geoapify-places.service'
import { ConfigModule } from '@modules/config/config.module'
import { GeoapifyFetchModule } from '@core/geoapify/fetch/geoapify-fetch.module'

@Module({
    imports: [
        ConfigModule,
        GeoapifyFetchModule
    ],
    providers: [GeoapifyPlacesService],
    exports: [GeoapifyPlacesService]
})
export class GeoapifyPlacesModule {
}