import { EPlaceDetailParam } from '@core/geoapify/places/enum/place-detail-param.enum'
import { TGeoapifyPlaceDetailsFetchInput } from '@core/geoapify/places/type/geoapify-place-detail-fetch-input.type'
import { TGeoapifyPlaceDetailsFetchOutput } from '@core/geoapify/places/type/geoapify-place-detail-fetch-output.type'
import { EPlacesParam } from '@core/geoapify/places/enum/places-param.enum'

export const geoapifyPlaceDetailFetchInputToRecordAdapter = (input: TGeoapifyPlaceDetailsFetchInput): Partial<Record<EPlaceDetailParam, string[]>> => ({
    [EPlaceDetailParam.id]: [input.id],
    [EPlaceDetailParam.lang]: input.lang ? [input.lang] : undefined
})