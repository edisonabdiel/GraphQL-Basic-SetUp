import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Students extends BaseEntity {
    @PrimaryColumn()
    id!: number;

    @Column()
    firstName!: string;
    @Column()
    lastName!: string;
    @Column()
    dateOfBirth!: Date;
    @Column()
    course!: string;
    @Column()
    hours!: number;


}