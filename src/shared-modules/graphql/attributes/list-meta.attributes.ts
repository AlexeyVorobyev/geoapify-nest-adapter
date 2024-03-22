import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType('TListMetaAttributes')
export class ListMetaAttributes {
    @Field(() => Int!, {
        description: 'Current page',
    })
    currentPage: number

    @Field(() => Int!, {
        description: 'Elements per page',
    })
    elementsPerPage: number
}