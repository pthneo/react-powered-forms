import { FormProvider } from "./form-context";
import { cn } from "./utils";
import React, { Component, ReactElement, ReactNode, useState } from "react";

export type Form = {
  metadata?: Metadata,
  form: {

  } | null;
  

}

export type FormEditorProps = {
  className?: string;
  children?: ReactNode;
}

const FormEditor = ({className, children}: FormEditorProps): React.JSX.Element => {

  // Retrieve JSON
  // Set JSON

  return (
    <FormProvider>
      <div className={cn("", className)}>
        {children}
      </div>
    </FormProvider>
  )
}

