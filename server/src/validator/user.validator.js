import { z } from "zod";

export const registerValidator = z.object({

  name: z.string({
    required_error: "Please enter your name"
  })
  .min(2, "Name must be at least 2 characters")
  .max(100, "Name too long")
  .trim(),

  email: z.string({
    required_error: "Please enter your email"
  })
  .email("Invalid email")
  .transform(v => v.toLowerCase().trim()),

  password: z.string({
    required_error: "Please enter a password"
  })
  .min(6, "Password must be at least 6 characters"),

  username: z.string({
    required_error: "Please enter a username"
  })
  .min(3, "Username must be at least 3 characters")
  .max(30, "Username too long")
  .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores")
  .transform(v => v.toLowerCase()),

  surname: z.string().max(100, "Surname too long").optional(),

  bio: z.string().max(30, "Bio too long").optional(),

  description: z.string().max(200, "Description too long").optional(),

  phoneNumber: z.string().optional(),
});

export const loginValidator = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});