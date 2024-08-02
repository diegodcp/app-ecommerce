import { Company } from "./company.interface";

export type Roles = 'CUSTOMER' | 'ADMIN';

export interface User {
    id: number;
    uid?: number;
    email: string;
    password: string;
    passwordToken: string;
    name: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    postalCode: string;
    role: Roles;
    createdAt: Date;
    modifiedAt: Date;
    status: number;
    company: Company
}

export interface UserResponse {
    message: string;
    token: string;
    userId: number;
    role: Roles;
}

export interface FirebaseUser {
    uid: string;
    email: string;
    companyId?: number;
    displayName?: string;
    emailVerified: boolean;
    phone?: string;
    password?: string;
    photoURL?: string;
    role?: Roles;
    errorCode?: number;
    code?: string;
    errorDescription?: string;
}
