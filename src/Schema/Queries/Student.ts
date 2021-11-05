import { GraphQLList } from "graphql";
import { StudentType } from "../TypeDefs/Student";
import { Students } from "../../entities/Students";

interface ItudentQuery {
    id: number;
    fisrtName?: string;
    lastName: string;
    dateOfBirth: Date;
    courses?: string;
    hours: number;
}

export const GET_ALL_STUDENTS = {
    type: new GraphQLList(StudentType),
    resolve(): Promise<ItudentQuery[]> {
        return Students.find()
    }
}