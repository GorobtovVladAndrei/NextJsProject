import { z } from "zod";

/**
 * Converts a schema object to a form object.
 *
 * @param schema - The schema object to convert.
 * @returns The form object generated from the schema.
 */
export const formSchema = z.object({
    name: z.string().min(4),
    description: z.string().optional(),
  });
  
  /**
   * The type of the form object.
   */

export type formSchemaType = z.infer<typeof formSchema>;