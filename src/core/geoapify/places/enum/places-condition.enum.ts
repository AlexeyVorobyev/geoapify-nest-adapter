import { registerEnumType } from '@nestjs/graphql'

export enum EPlaceCondition {
    internetAccess = 'internet_access',
    wheelchair = 'wheelchair',
    dogs = 'dogs',
    noDogs = 'no-dogs',
    vegan = 'vegan',
    organic = 'organic'
}

registerEnumType(EPlaceCondition, {
    name:'EPlaceCondition',
    description: 'Conditions for place'
})