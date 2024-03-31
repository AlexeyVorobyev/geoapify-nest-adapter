import {Field, InputType} from '@nestjs/graphql'
import {ArrayNotEmpty, IsArray, IsEnum, IsOptional, Validate, ValidateNested} from 'class-validator'
import {ELang} from '@core/geoapify/enum/lang.enum'
import {ERoutingMode} from '@core/geoapify/routes/enum/routing-mode.enum'
import {PointInput} from '@modules/common/input/point.input'
import {ERoutingTraffic} from '@core/geoapify/routes/enum/routing-traffic.enum'
import {ERoutingUnits} from '@core/geoapify/routes/enum/routing-units.enum'

@InputType('TRouteRoutingInput')
export class RouteRoutingInput {
    @IsOptional()
    @IsEnum(ELang)
    @Field(() => ELang, {
        description: 'Configuration for language',
        nullable: true
    })
    language: ELang

    @IsOptional()
    @IsEnum(ERoutingMode)
    @Field(() => ERoutingMode, {
        description: 'Configuration for mode of routing',
        nullable: true
    })
    mode: ERoutingMode

    @IsArray()
    @ValidateNested()
    @ArrayNotEmpty()
    @Field(() => [PointInput], {
        description: 'Configuration for mode of routing',
    })
    waypoints: PointInput[]

    @IsOptional()
    @IsEnum(ERoutingTraffic)
    @Field(() => ERoutingTraffic, {
        description: 'Configuration for traffic mode',
        nullable: true,
    })
    traffic: ERoutingTraffic

    @IsOptional()
    @IsEnum(ERoutingUnits)
    @Field(() => ERoutingUnits, {
        description: 'Configuration for units',
        nullable: true
    })
    units: ERoutingUnits
}