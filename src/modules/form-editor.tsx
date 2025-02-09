import { FormProvider } from "./components/form-context";
import { Blueprint, EditorStyles } from "./types";
import { cn } from "./components/utils";
import React from "react";
import ErrorBoundary from "./components/error-boundary";
import FormConstructor from "./components/form-constructor";

export type FormEditorProps = {
  styles: EditorStyles;
  autosave: boolean;
  onSubmit: (input: any) => void;
  blueprint: Blueprint | null;
}

const FormEditor = ({styles, onSubmit, autosave, blueprint}: FormEditorProps): React.JSX.Element => {
  return (
    <ErrorBoundary className={styles.container}>
      <FormProvider>
        <div className={cn("h-full w-full", styles.container)}>
          <FormConstructor styles={styles} onSubmit={onSubmit} autosave={autosave} blueprint={blueprint}/>
        </div>
      </FormProvider>
    </ErrorBoundary>
  )
}

export default FormEditor;