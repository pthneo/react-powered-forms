import { jsonSchemaToZod } from "json-schema-to-zod";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { FormField } from "./types";

export function convertForm(formFields: FormField[]): z.ZodObject<any> {
  // insert 

  return schema;
}

export function 