import { FormProvider } from "./form-context";
import { FormIOField, FormMetadata, Schema } from "./types";
import { cn } from "./utils";
import React, { Component, ReactElement, ReactNode, useState } from "react";

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