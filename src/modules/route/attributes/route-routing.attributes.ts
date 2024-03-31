import {DefaultAttributes} from '@src/shared-modules/graphql/attributes/default.attributes'
import {Field, ObjectType} from '@nestjs/graphql'
import {RouteMetadataAttributes} from '@modules/route/attributes/route-metadata.attributes'
import {RouteLegAttributes} from '@modules/route/attributes/route-leg.attributes'

@ObjectType('TRouteRoutingAttributes')
export class RouteRoutingAttributes extends DefaultAttributes {
    @Field(() => RouteMetadataAttributes, {
        description: 'Route metadata'
    })
    meta: RouteMetadataAttributes

    @Field(() => [RouteLegAttributes], {
        description: 'Route legs'
    })
    legs: RouteLegAttributes[]
}