"use client"

import { Blueprint, ViewerStyles } from "./types";
import { cn } from "./components/utils";
import React from "react";
import ErrorBoundary from "./components/error-boundary";
import Form from "./components/form";

export type FormViewerProps = {
  styles: ViewerStyles;
  blueprint: Blueprint
  onSubmit: (input: any) => void;
}

const FormViewer = ({styles, blueprint, onSubmit}: FormViewerProps): React.JSX.Element => {
  return (
    <ErrorBoundary className={styles.container}>
      <div className={cn("w-full h-full", styles.container)}>
        <Form styles={styles} blueprint={blueprint} onSubmit={onSubmit}/>
      </div>
    </ErrorBoundary>
  )
}

export default FormViewer;