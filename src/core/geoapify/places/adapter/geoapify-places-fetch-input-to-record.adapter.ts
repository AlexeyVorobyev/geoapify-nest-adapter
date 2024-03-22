import { TGeoapifyPlacesFetchInput } from '@core/geoapify/places/type/geoapify-places-fetch-input.type'
import { EPlacesParam } from '@core/geoapify/places/enum/places-param.enum'

export const geoapifyPlacesFetchInputToRecordAdapter = (input: TGeoapifyPlacesFetchInput): Partial<Record<EPlacesParam, string[]>> => ({
    [EPlacesParam.limit]: input.limit ? [input.limit.toString()] : undefined,
    [EPlacesParam.offset]: input.offset ? [input.offset.toString()] : undefined,
    [EPlacesParam.filter]: input.filter
        ? [
            input.filter.topLeft.lon.toString(),
            input.filter.topLeft.lat.toString(),
            input.filter.bottomRight.lon.toString(),
            input.filter.bottomRight.lat.toString()
        ]
        : undefined,
    [EPlacesParam.lang]: input.lang ? [input.lang] : undefined,
    [EPlacesParam.conditions]: input.conditions || undefined,
    [EPlacesParam.categories]: input.categories || undefined,
    [EPlacesParam.name]: (input.name && input.name?.length) ? [input.name] : undefined,
})