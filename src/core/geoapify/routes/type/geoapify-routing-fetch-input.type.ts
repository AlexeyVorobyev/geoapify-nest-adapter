import {ERoutingParam} from '@core/geoapify/routes/enum/routing-param.enum'
import {ELang} from '@core/geoapify/enum/lang.enum'
import {ERoutingDetails} from '@core/geoapify/routes/enum/routing-details.enum'
import {ERoutingMode} from '@core/geoapify/routes/enum/routing-mode.enum'
import {ERoutingUnits} from '@core/geoapify/routes/enum/routing-units.enum'
import {PointInput} from '@modules/common/input/point.input'
import {ERoutingTraffic} from '@core/geoapify/routes/enum/routing-traffic.enum'

export type TGeoapifyRoutingFetchInput = {
    [ERoutingParam.waypoints]: PointInput[]
    [ERoutingParam.lang]?: ELang
    [ERoutingParam.details]?: ERoutingDetails[]
    [ERoutingParam.mode]?: ERoutingMode
    [ERoutingParam.units]?: ERoutingUnits
    [ERoutingParam.traffic]?: ERoutingTraffic
}