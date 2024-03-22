import { InputType, PickType } from '@nestjs/graphql'
import { ListInput } from '@src/shared-modules/graphql/input/list.input'

@InputType()
export abstract class ListPaginationSimpleFilterInput extends PickType(
    ListInput,
    ['simpleFilter', 'page', 'perPage'],
) {
}