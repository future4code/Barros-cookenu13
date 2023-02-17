export class SignupInputDto {
    private name: string
    private email: string
    private password: string

    constructor(name: string, email: string, password: string) {
        this.name = name
        this.email = email
        this.password = password
    }

    public getName(){
        return this.name
    }

    public getEmail(){
        return this.email
    }

    public getPassword(){
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

    public getName(){
        return this.name
    }

    public getEmail(){
        return this.email
    }

    public getPassword(){
        return this.password
    }

    public getId(){
        return this.id
    }
}