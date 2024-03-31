import {Module} from '@nestjs/common'
import {ConfigModule} from '@modules/config/config.module'
import {GeoapifyFetchModule} from '@core/geoapify/fetch/geoapify-fetch.module'
import {GeoapifyRoutesService} from '@core/geoapify/routes/geoapify-routes.service'

@Module({
    imports: [
        ConfigModule,
        GeoapifyFetchModule
    ],
    providers: [GeoapifyRoutesService],
    exports: [GeoapifyRoutesService]
})
export class GeoapifyRoutesModule {
}