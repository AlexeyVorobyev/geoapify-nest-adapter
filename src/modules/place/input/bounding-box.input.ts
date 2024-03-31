import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, ValidateNested } from 'class-validator'
import { PointInput } from '@modules/common/input/point.input'

@InputType('TBoundingBox')
export class BoundingBoxInput {
    @ValidateNested()
    @IsNotEmpty()
    @Field(() => PointInput, {
        description: 'Top left point'
    })
    topLeft:PointInput

    @ValidateNested()
    @IsNotEmpty()
    @Field(() => PointInput, {
        description: 'Bottom right point'
    })
    bottomRight:PointInput
}