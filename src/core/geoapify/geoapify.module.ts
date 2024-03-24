import { Module } from '@nestjs/common'
import { GeoapifyPlacesModule } from '@core/geoapify/places/geoapify-places.module'

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