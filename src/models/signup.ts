export class SignupInputDto {
    private name: string
    private email: string
    private password: string

    constructor(name: string, email: string, password: string) {
        this.name = name
        this.email = email
        this.password = password
    }

    public setName(){
        return this.name
    }

    public setEmail(){
        return this.email
    }

    public setPassword(){
        return this.password
    }
}

export class Signup {
    private name: string
    private email: string
    private password: string
    private id: string

    constructor(name: string, email: string, password: string, id: string) {
        this.name = name
        this.email = email
        this.password = password
        this.id = id
    }

    public setName(){
        return this.name
    }

    public setEmail(){
        return this.email
    }

    public setPassword(){
        return this.password
    }

    public setId(){
        return this.id
    }
}

export type AuthenticationData = {
    id: string
}

export class LoginInputDto {
    
    email: string
    password: string

    constructor(email: string, password: string) {
        this.email = email
        this.password = password
    }

}

export interface ResponseProfileDTO {
    id: string;
    name: string;
    email: string;
}

export interface OutputUserDTO {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string
 }
   