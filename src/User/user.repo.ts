import { UpdateResult } from "typeorm";

export default interface IRepo <CLASS, ID, RETURN> {

    getById(id: ID): RETURN;
    getAll(): RETURN;
    add(obj: CLASS): RETURN;
    delete(id: ID): boolean;
    update(id: number, obj: CLASS): Promise<UpdateResult>;
}