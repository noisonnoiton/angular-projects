class User {
    id: number;
    login: string;
    url: string;

    constructor(id: number, userId: string, url: string) {
        this.id = id;
        this.login = userId;
        this.url = url;
    }
}

export default User;
