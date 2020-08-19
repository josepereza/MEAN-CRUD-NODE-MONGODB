export class User {
    constructor(_id = '', name = '', email = '', age = 0) {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.age = age
    }

    _id: string;
    name: string;
    email: string;
    age: number;
}
