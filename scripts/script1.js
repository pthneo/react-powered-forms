import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { jsonSchemaToZod } from "json-schema-to-zod";

const mySchema = z
  .object({
    myString: z.string().min(5),
    myUnion: z.union([z.number(), z.boolean()]),
  })
  .describe("My neat object schema");

const jsonSchema = zodToJsonSchema(mySchema, "mySchema");
const pretty = JSON.stringify(jsonSchema, null, 2);
console.log("pretty=", pretty)

const justTheSchema = jsonSchemaToZod(jsonSchema);
console.log("zod=", justTheSchema);