import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { GeoapifyFetchService } from '@core/geoapify/api/geoapify-fetch.service'

@Module({
    imports: [HttpModule],
    providers: [GeoapifyFetchService],
    exports: [GeoapifyFetchService]
})
export class GeoapifyFetchModule {
}