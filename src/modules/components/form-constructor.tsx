"use client";

import React from "react";
import { useFormEditor } from "./form-context";
import { Blueprint, EditorStyles } from "../types";
import MetadataOptionsBox from "./metadata-options";

export type FormConstructorProps = {
  styles: EditorStyles;
  autosave: boolean;
  onSubmit: (input: any) => void;
  blueprint: Blueprint | null;
}

const FormConstructor = ({styles, onSubmit, autosave, blueprint}: FormConstructorProps): React.JSX.Element => {
  const { metadata, setMetadata, fields, setFields } = useFormEditor();

  function autoSave() {
      // Take the form data, debounce for 500ms
      // Call on submit function
  } 

  function save() {
    // Call on submit function
  }

  return (
    <>
      <MetadataOptionsBox />
    </>
  )
}

export default FormConstructor;