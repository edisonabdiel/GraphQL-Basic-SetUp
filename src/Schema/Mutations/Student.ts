import { StudentType } from "../TypeDefs/Student";
import { GraphQLString } from "graphql";
import { Students } from "../../entities/Students";

export const CREATE_STUDENT = {
  type: StudentType,
  args: {
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    dateOfBirth: { type: GraphQLString },
    course: { type: GraphQLString },
    hours: { type: GraphQLString },
    },
   async resolve(args: any) {
      const { firstName, lastName, dateOfBirth, course, hours } = args;
      await Students.insert({firstName, lastName, dateOfBirth, course, hours});
        return args;
     }
};
