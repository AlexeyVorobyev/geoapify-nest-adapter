import { registerEnumType } from '@nestjs/graphql'

export enum EPlaceCategory {
    commercial = 'commercial',
    catering = 'catering',
    accommodation = 'accommodation',
    activity = 'activity',
    entertainment = 'entertainment',
    healthcare = 'healthcare',
    natural = 'natural'
}

registerEnumType(EPlaceCategory, {
    name:'EPlaceCategory',
    description: 'Categories of place'
})