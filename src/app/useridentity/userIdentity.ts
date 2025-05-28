export interface UserIdentity {
    userId: string;
    fullName: string;
    email: string;
    sourceSystem: string;
    lastUpdated: Date;
    isActive: boolean;
    id: number;
}

export interface UserIdentityActivate {
    isActive: boolean;
    id: number;
}