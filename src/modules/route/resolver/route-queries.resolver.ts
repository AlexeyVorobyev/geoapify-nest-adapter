import {Args, ObjectType, ResolveField, Resolver} from '@nestjs/graphql'
import {PlaceService} from '@modules/place/place.service'
import {PlaceListInput} from '@modules/place/input/place-list.input'
import {PlaceAttributes} from '@modules/place/attributes/place.attributes'
import {PlaceListAttributes} from '@modules/place/attributes/place-list.attributes'
import {UseInterceptors} from '@nestjs/common'
import {OperationMetaInterceptor} from '@src/shared-modules/graphql/interceptor/operation-meta.interceptor'
import {IdInput} from '@src/shared-modules/graphql/input/id.input'
import {PlaceRecordInput} from '@modules/place/input/place-record.input'
import {RouteRoutingInput} from '@modules/route/input/route-routing.input'
import {RouteService} from '@modules/route/route.service'
import {RouteRoutingAttributes} from '@modules/route/attributes/route-routing.attributes'

@ObjectType('TRoutesQueries')
export class RouteQueries {
}

@UseInterceptors(OperationMetaInterceptor)
@Resolver(() => RouteQueries)
export class RouteQueriesResolver {
    constructor(
        private routeService: RouteService,
    ) {
    }

    @ResolveField(() => RouteRoutingAttributes, {
        description: 'List of places',
        name: 'routing',
    })
    async routing(@Args('input') input: RouteRoutingInput) {
        return await this.routeService.routing(input)
    }
}