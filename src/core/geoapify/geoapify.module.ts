import { Module } from '@nestjs/common'
import { GeoapifyPlacesModule } from '@core/geoapify/places/geoapify-places.module'
import {GeoapifyRoutesModule} from '@core/geoapify/routes/geoapify-routes.module'

@Module({
    imports: [
        GeoapifyPlacesModule,
        GeoapifyRoutesModule
    ],
    exports: [
        GeoapifyPlacesModule,
        GeoapifyRoutesModule
    ]
})
export class GeoapifyModule {
}