import { EPlaceDetailParam } from '@core/geoapify/places/enum/place-detail-param.enum'
import { ELang } from '@core/geoapify/enum/lang.enum'

export type TGeoapifyPlaceDetailsFetchInput = {
    [EPlaceDetailParam.id]: string
    [EPlaceDetailParam.lang]?: ELang
}