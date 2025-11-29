export declare const User_Role: {
    readonly ADMIN: "ADMIN";
    readonly OWNER: "OWNER";
    readonly GUEST: "GUEST";
};
export type User_Role = (typeof User_Role)[keyof typeof User_Role];
export declare const Room_Status: {
    readonly ACTIVE: "ACTIVE";
    readonly MAINTENANCE: "MAINTENANCE";
    readonly DELETED: "DELETED";
};
export type Room_Status = (typeof Room_Status)[keyof typeof Room_Status];
export declare const Booking_Status: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly CANCELLED: "CANCELLED";
};
export type Booking_Status = (typeof Booking_Status)[keyof typeof Booking_Status];
