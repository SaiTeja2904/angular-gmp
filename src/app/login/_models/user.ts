export interface User {
    id: number;
    token?: string;
    name?: Name_Model;
    login?: string;
    password?: string;
}

export interface Name_Model {
    first: string;
    last: string;
}
