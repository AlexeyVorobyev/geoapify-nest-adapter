import { EPlacesParam } from '@core/geoapify/places/enum/places-param.enum'
import { ELang } from '@core/geoapify/enum/lang.enum'
import { EPlaceCategory } from '@core/geoapify/places/enum/places-category.enum'
import { EPlaceCondition } from '@core/geoapify/places/enum/places-condition.enum'
import { BoundingBoxInput } from '@modules/place/input/bounding-box.input'

export type TGeoapifyPlacesFetchInput = Partial<{
    [EPlacesParam.limit]?: number
    [EPlacesParam.offset]?: number
    [EPlacesParam.name]?: string
    [EPlacesParam.lang]?: ELang
    [EPlacesParam.categories]?: EPlaceCategory[]
    [EPlacesParam.conditions]?: EPlaceCondition[]
    [EPlacesParam.filter]?: BoundingBoxInput
}>