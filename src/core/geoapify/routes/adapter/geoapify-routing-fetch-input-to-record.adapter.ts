import {ERoutingParam} from '@core/geoapify/routes/enum/routing-param.enum'
import {TGeoapifyRoutingFetchInput} from '@core/geoapify/routes/type/geoapify-routing-fetch-input.type'
import {ERoutingMode} from '@core/geoapify/routes/enum/routing-mode.enum'
import {ERoutingUnits} from '@core/geoapify/routes/enum/routing-units.enum'
import {ERoutingTraffic} from '@core/geoapify/routes/enum/routing-traffic.enum'
import {ERoutingDetails} from '@core/geoapify/routes/enum/routing-details.enum'

export const geoapifyRoutingFetchInputToRecordAdapter = (input: TGeoapifyRoutingFetchInput): Partial<Record<ERoutingParam, string[]>> => ({
    [ERoutingParam.lang]: input.lang ? [input.lang] : undefined,
    [ERoutingParam.mode]: input.mode ? [input.mode] : [ERoutingMode.car],
    [ERoutingParam.units]: input.units ? [input.units] : [ERoutingUnits.metric],
    [ERoutingParam.waypoints]: input.waypoints.map((item) => (
        `${item.lat},${item.lon}`
    )),
    [ERoutingParam.traffic]: input.traffic ? [input.traffic] : [ERoutingTraffic.approximated],
    [ERoutingParam.details]: input.details ? input.details : Object.values(ERoutingDetails),
})