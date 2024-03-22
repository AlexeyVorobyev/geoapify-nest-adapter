import { Module } from '@nestjs/common'
import { GeoapifyPlacesModule } from '@core/geoapify/places/geoapify-places.module'
import { GeoapifyFetchModule } from '@core/geoapify/api/geoapify-fetch.module'

@Module({
    imports: [
        GeoapifyPlacesModule
    ],
    exports: [
        GeoapifyPlacesModule
    ]
})
export class GeoapifyModule {
}