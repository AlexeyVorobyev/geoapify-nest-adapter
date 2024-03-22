import { listAttributesFactory } from '@src/shared-modules/graphql/attributes/list.attributes'
import { PlaceAttributes } from '@modules/place/attributes/place.attributes'
import { ObjectType } from '@nestjs/graphql'

@ObjectType('TPlaceListAttributes')
export class PlaceListAttributes extends listAttributesFactory<PlaceAttributes>(PlaceAttributes) {
}