import { registerEnumType } from '@nestjs/graphql'
import { EPlaceCondition } from '@core/geoapify/places/enum/places-condition.enum'

export enum ELang {
    english = 'en',
    russian = 'ru'
}

registerEnumType(ELang, {
    name:'ELang',
    description: 'Language of response'
})