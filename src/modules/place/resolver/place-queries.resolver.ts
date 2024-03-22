import { Args, ObjectType, ResolveField, Resolver } from '@nestjs/graphql'
import { PlaceService } from '@modules/place/place.service'
import { PlaceListInput } from '@modules/place/input/place-list.input'
import { PlaceAttributes } from '@modules/place/attributes/place.attributes'
import { PlaceListAttributes } from '@modules/place/attributes/place-list.attributes'
import { UseInterceptors } from '@nestjs/common'
import { OperationMetaInterceptor } from '@src/shared-modules/graphql/interceptor/operation-meta.interceptor'
import { IdInput } from '@src/shared-modules/graphql/input/id.input'
import { PlaceRecordInput } from '@modules/place/input/place-record.input'

@ObjectType('TPlacesQueries')
export class PlaceQueries {
}

@UseInterceptors(OperationMetaInterceptor)
@Resolver(() => PlaceQueries)
export class PlaceQueriesResolver {
    constructor(
        private placeService:PlaceService
    ) {
    }

    @ResolveField(() => PlaceListAttributes, {
        description: 'List of places',
        name: 'list'
    })
    async list(@Args('input') input: PlaceListInput) {
        return await this.placeService.list(input)
    }

    @ResolveField(() => PlaceAttributes, {
        description: 'Record of place',
        name: 'record'
    })
    async record(@Args('input') input: PlaceRecordInput) {
        return await this.placeService.record(input)
    }
}