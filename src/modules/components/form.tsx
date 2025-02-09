"use client"

import { Blueprint, ViewerStyles } from "../types";
import React, { useState } from "react";

export type FormProps = {
  styles: ViewerStyles;
  blueprint?: Blueprint
  onSubmit?: (input: any) => void;
}

// Example usage
// const id = 1
// const blueprint = await db.select(forms.blueprint: blueprint).from(forms).where(eq(forms.id, id));
// const formValidation = getSchema(blueprint.schema);
// const formType = z.infer<typeof formValidation>;

const Form = ({styles, blueprint, onSubmit}: FormProps): React.JSX.Element => {
  const [loading, setLoading] = useState(true);

  // Check if provided blueprint is valid (use Zod)
  // Attempt to load the form metadata
  // Attempt to load the form schema
  // Create the jsx with form components, react-hook-form, zod schema
  // Attempt to render the form
  // If successful, set loading to false

return <></>
}

export default Form;