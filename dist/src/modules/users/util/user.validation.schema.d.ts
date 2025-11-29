import z from "zod";
export declare const validationSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
    role: z.ZodEnum<{
        ADMIN: "ADMIN";
        OWNER: "OWNER";
        GUEST: "GUEST";
    }>;
}, z.core.$strip>;
export declare const updateUserSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodEmail>;
}, z.core.$strip>;
