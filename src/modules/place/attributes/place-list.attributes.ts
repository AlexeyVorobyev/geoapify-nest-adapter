import { listAttributesFactory } from '@src/shared-modules/graphql/attributes/list.attributes'
import { PlaceAttributes } from '@modules/place/attributes/place.attributes'
import { ObjectType, OmitType } from '@nestjs/graphql'

@ObjectType('TPlaceAttributesOmitOperationMeta')
export class PlaceAttributesOmitOperationMeta extends OmitType(PlaceAttributes, ['operationMeta']) {
}

@ObjectType('TPlaceListAttributes')
export class PlaceListAttributes extends listAttributesFactory<PlaceAttributesOmitOperationMeta>(PlaceAttributesOmitOperationMeta) {
}