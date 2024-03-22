import { EEndpoint } from '@core/geoapify/enum/endpoint.enum'
import { EPlacesParam } from '@core/geoapify/places/enum/places-param.enum'
import { EPlaceDetailParam } from '@core/geoapify/places/enum/place-detail-param.enum'

export class GeoapifyQueryBuilder {
    constructor(
        private readonly root: string,
        private readonly endpoint: EEndpoint,
        private readonly apiKey: string,
    ) {
        this.query = new URL(`${this.root}/${this.endpoint}`)
        this.query.searchParams.set('apiKey', this.apiKey)
    }

    protected query: URL

    toString() {
        return this.query.toString()
    }

    toURL() {
        return this.query
    }

    setPlacesParam(key: EPlacesParam, values: string[]) {
        if (key === EPlacesParam.filter) {
            this.setBoundingRect(values)
        } else {
            this.setParam(key, values)
        }
        return this
    }

    setPlaceDetailsParam(key: EPlaceDetailParam, values: string[]) {
        this.setParam(key,values)
        return this
    }

    private setBoundingRect(values: string[]) {
        const formattedValues = values.join(',')
        this.query.searchParams.set(EPlacesParam.filter, `rect:${formattedValues}`)
    }

    private setParam(key: string, values: string[]) {
        console.log(values)
        const formattedValues = values.join(',')

        console.log(formattedValues)

        this.query.searchParams.set(key, formattedValues)
    }
}