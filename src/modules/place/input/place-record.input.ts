import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { ELang } from '@core/geoapify/enum/lang.enum'
import { Field, InputType } from '@nestjs/graphql'

@InputType('TPlaceRecordInput')
export class PlaceRecordInput {
    @IsNotEmpty()
    @IsString()
    @Field(() => String, {
        description: 'Id of place',
    })
    id:string

    @IsOptional()
    @IsEnum(ELang)
    @Field(() => ELang, {
        description: 'Configuration for language',
        nullable: true
    })
    language: ELang
}