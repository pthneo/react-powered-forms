"use client"

import { FormProvider } from "./form-context";
import { Blueprint, FormIOField, FormMetadata, ViewerStyles } from "./types";
import { cn } from "./modules/utils";
import React, { Component, ReactElement, ReactNode, useState } from "react";
import ErrorBoundary from "./error-boundary";
import Form from "./form";

export type FormViewerProps = {
  styles: ViewerStyles;
  blueprint?: Blueprint
  onSubmit?: (input: any) => void;
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