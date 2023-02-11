import { v4 } from "uuid"

export abstract class idGenerator {
    static generateId(){
        return v4()
    }
}