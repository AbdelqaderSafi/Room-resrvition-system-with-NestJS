export declare const registerValidationSchema: import("zod").ZodObject<{
    name: import("zod").ZodString;
    email: import("zod").ZodEmail;
    password: import("zod").ZodString;
    role: import("zod").ZodEnum<{
        ADMIN: "ADMIN";
        OWNER: "OWNER";
        GUEST: "GUEST";
    }>;
}, import("zod/v4/core").$strip>;
export declare const loginValidationSchema: import("zod").ZodObject<{
    email: import("zod").ZodEmail;
    password: import("zod").ZodString;
}, import("zod/v4/core").$strip>;
