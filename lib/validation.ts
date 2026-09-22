import { z } from "zod";

export const SafeInputSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must not exceed 30 characters")
    .regex(/^[a-zA-Z0-9_-]+$/, "Username contains invalid characters"),
  email: z
    .string()
    .trim()
    .email("Invalid email format"),
  message: z
    .string()
    .trim()
    .min(1, "Message cannot be empty")
    .max(500, "Message length exceeded")
});

export type SafeInput = z.infer<typeof SafeInputSchema>;

export function validatePayload(payload: unknown): { isValid: boolean; data?: SafeInput; errors?: string[] } {
  const result = SafeInputSchema.safeParse(payload);
  if (!result.success) {
    return {
      isValid: false,
      errors: result.error.issues.map((i) => i.message)
    };
  }
  return {
    isValid: true,
    data: result.data
  };
}
