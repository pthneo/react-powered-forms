import { jsonSchemaToZod } from "json-schema-to-zod";

const myObject = {
  type: "object",
  properties: {
    hello: {
      type: "string",
    },
  },
};

const module = jsonSchemaToZod(myObject, { module: "esm" });

// `type` can be either a string or - outside of the CLI - a boolean. If its `true`, the name of the type will be the name of the schema with a capitalized first letter.
const moduleWithType = jsonSchemaToZod(myObject, { name: "mySchema", module: "esm", type: true });

const cjs = jsonSchemaToZod(myObject, { module: "cjs", name: "mySchema" });

const justTheSchema = jsonSchemaToZod(myObject);

console.log("module=", module);
console.log("moduleWithType=", moduleWithType);
console.log("cjs=", cjs);
console.log("justTheSchema=", justTheSchema);