"use client"

import { FormProvider } from "./form-context";
import { Blueprint, FormIOField, FormMetadata } from "./types";
import { cn } from "./utils";
import React, { Component, ReactElement, ReactNode, useState } from "react";
import Loading from "./loading";
import ErrorBoundary from "./error-boundary";

export type FormViewerProps = {
  className?: string;
  blueprint?: Blueprint
  onSubmit?: (input: any) => void;
}

// Example
// const id = 1
// const blueprint = await db.select(forms.blueprint: blueprint).from(forms).where(eq(forms.id, id));
// const formValidation = getSchema(blueprint.schema);
// const formType = z.infer<typeof formValidation>;

const FormViewer = ({className, blueprint, onSubmit}: FormViewerProps): React.JSX.Element => {
  const [loading, setLoading] = useState(true);

  // Check if provided blueprint is valid (use Zod)
  // Attempt to load the form metadata
  // Attempt to load the form schema
  // Create the jsx with form components, react-hook-form, zod schema
  // Attempt to render the form
  // If successful, set loading to false

  return (
    <ErrorBoundary className={className}>
      <div className={cn("w-full h-full", loading ?  "items-center justify-center" : "", className)}>
        {loading ? <Loading /> : (
          <Form />
          )}
      </div>
    </ErrorBoundary>
  )
}

