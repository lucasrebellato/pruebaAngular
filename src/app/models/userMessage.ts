export class userMessage {
    public name: string;
    public surname: string;
    public email : string;
    public message : string;

    constructor(name : string, surname : string, email : string, message : string) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.message = message;
    }
}
