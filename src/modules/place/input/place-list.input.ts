import { Field, InputType } from '@nestjs/graphql'
import { ListPaginationSimpleFilterInput } from '@modules/common/input/list-pagination-simple-filter.input'
import { EPlaceCondition } from '@core/geoapify/places/enum/places-condition.enum'
import { IsArray, IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { EPlaceCategory } from '@core/geoapify/places/enum/places-category.enum'
import { BoundingBoxInput } from '@modules/place/input/bounding-box.input'
import { ELang } from '@core/geoapify/enum/lang.enum'

@InputType('TPlaceListInput')
export class PlaceListInput extends ListPaginationSimpleFilterInput {
    @IsOptional()
    @IsEnum(EPlaceCondition, {each: true})
    @IsArray()
    @Field(() => [EPlaceCondition], {
        description: 'Conditions for places in or manner',
        nullable: true
    })
    conditions: EPlaceCondition[]

    @IsOptional()
    @IsEnum(EPlaceCategory, {each: true})
    @IsArray()
    @Field(() => [EPlaceCategory], {
        description: 'Categories for places in or manner',
        nullable: true
    })
    categories: EPlaceCategory[]

    @IsNotEmpty()
    @ValidateNested()
    @Field(() => BoundingBoxInput, {
        description: 'Search parameter by bounding box'
    })
    boundingBox: BoundingBoxInput

    @IsOptional()
    @IsEnum(ELang)
    @Field(() => ELang, {
        description: 'Configuration for language',
        nullable: true
    })
    language: ELang
}