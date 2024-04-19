import {Args, ObjectType, ResolveField, Resolver} from '@nestjs/graphql'
import {UseGuards, UseInterceptors} from '@nestjs/common'
import {OperationMetaInterceptor} from '@src/shared-modules/graphql/interceptor/operation-meta.interceptor'
import {RouteRoutingInput} from '@modules/route/input/route-routing.input'
import {RouteService} from '@modules/route/route.service'
import {RouteRoutingAttributes} from '@modules/route/attributes/route-routing.attributes'
import {JwtGraphQLAuthGuard} from '@src/shared-modules/common/guard/jwt-graphql-auth.guard'

@ObjectType('TRoutesQueries')
export class RouteQueries {
}

@UseGuards(JwtGraphQLAuthGuard)
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