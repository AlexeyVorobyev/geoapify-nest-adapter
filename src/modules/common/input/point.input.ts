import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsNumber } from 'class-validator'

@InputType('TPointInput')
export class PointInput {
    @IsNumber()
    @IsNotEmpty()
    @Field(() => Number, {
        description: 'Latitude'
    })
    lat: number

    @IsNumber()
    @IsNotEmpty()
    @Field(() => Number, {
        description: 'Longitude'
    })
    lon: number
}