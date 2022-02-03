import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CoreInput {
    @Field()
    readonly name: string

    @Field(() => Int)
    readonly age: number
}