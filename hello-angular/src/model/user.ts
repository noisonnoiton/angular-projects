class User {
    id: number;
    login: string;
    url: string;
    avatar_url: string;

    constructor(id: number, userId: string, url: string, avatar_url: string) {
        this.id = id;
        this.login = userId;
        this.url = url;
        this.avatar_url = avatar_url;
    }

}

export default User;
