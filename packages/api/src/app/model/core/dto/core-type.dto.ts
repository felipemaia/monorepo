import { Field, ID, Int, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class CoreType {
    @Field(() => ID)
    id: string
    
    @Field()
    readonly name: string
    
    @Field(() => Int)
    readonly age: number
}