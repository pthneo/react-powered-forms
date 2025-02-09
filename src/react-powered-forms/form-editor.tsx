import { FormProvider } from "./form-context";
import { FormIOField, FormMetadata, Schema, Styles } from "./types";
import { cn } from "./modules/utils";
import React, { Component, ReactElement, ReactNode, useState } from "react";
import ErrorBoundary from "./error-boundary";

export type FormEditorProps = {
  styles: Styles;
  onSubmit?: (input: any) => void;
}

const FormEditor = ({styles, onSubmit}: FormEditorProps): React.JSX.Element => {
  return (
    <ErrorBoundary className={styles.container}>
      <FormProvider>
        <div className={cn("h-full w-full", styles.container)}>
          <FormConstructor styles={styles} onSubmit={onSubmit}/>
        </div>
      </FormProvider>
    </ErrorBoundary>
  )
}

export default FormEditor;