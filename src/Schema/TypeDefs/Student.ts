import { GraphQLObjectType, GraphQLID, GraphQLString} from "graphql";

export const StudentType = new GraphQLObjectType({
    name: "Student",
    fields: () => ({
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        dateOfBirth: { type: GraphQLString},
        course: { type: GraphQLString },
        hours: { type: GraphQLString },
    }) 
});
