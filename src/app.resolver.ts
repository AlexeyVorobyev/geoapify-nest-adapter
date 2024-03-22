import { Query, Resolver } from '@nestjs/graphql'
import { PlaceQueries } from '@modules/place/resolver/place-queries.resolver'

@Resolver('root')
export class RootResolver {
    @Query(() => PlaceQueries, {
        name: 'placeQueries',
        description: 'Place queries'
    })
    placeQueries() {
        return new PlaceQueries()
    }
}