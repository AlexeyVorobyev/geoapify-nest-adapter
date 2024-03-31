import { Query, Resolver } from '@nestjs/graphql'
import { PlaceQueries } from '@modules/place/resolver/place-queries.resolver'
import {RouteQueries} from '@modules/route/resolver/route-queries.resolver'

@Resolver('root')
export class RootResolver {
    @Query(() => PlaceQueries, {
        name: 'place',
        description: 'Place queries'
    })
    place() {
        return new PlaceQueries()
    }

    @Query(() => RouteQueries, {
        name: 'route',
        description: 'Route queries'
    })
    route() {
        return new RouteQueries()
    }
}