import { jsonSchemaToZod } from "json-schema-to-zod";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { FormField } from "./types";

export function convertForm(formFields: FormField[]): z.ZodObject<any> {
  const schema = z.object({});

  formFields.forEach((field) => {
    let zodField: z.ZodType;

    if (field.type === "input") {
      zodField = z.string();
      zodField = zodField.optional();
    }



    schema.(zodField);
  });

  return schema;
}

export function 