export interface User {
    id?: number;
    fakeToken?: string;
    name?: Name_Model;
    login?: string;
    password?: string;
}

export interface Name_Model {
    first: string;
    last: string;
}

export interface Login_Model {
    login: string;
    password: string;
}
