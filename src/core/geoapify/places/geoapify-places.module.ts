import { Module } from '@nestjs/common'
import { GeoapifyPlacesService } from '@core/geoapify/places/geoapify-places.service'
import { HttpModule } from '@nestjs/axios'
import { ConfigModule } from '@modules/config/config.module'

@Module({
    imports: [
        HttpModule,
        ConfigModule
    ],
    providers: [GeoapifyPlacesService],
    exports: [GeoapifyPlacesService]
})
export class GeoapifyPlacesModule {
}