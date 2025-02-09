"use client";

import React, { Component, ReactElement, ReactNode, useState } from "react";
import { Field } from "./types";
import { cn } from "./utils";



export type Container = {
    formData?: JSON;
    onSubmit?: () => {};

    /*
     * 
     */
    autosave?: boolean;
    onAutosave?: () => {};

}




{ submit, autosave = false, onAutosave, }: Container




/**
 * Typical usage:
 * 
 * const [metadata, setMetadata] = useState<>
 */

export default function FormConstructor( ) {
  // Sets the initial state of the form 
  const [metadata, setMetadata] = useState<ReactPoweredFormMetaData>({});
  const [formFields, setFormFeilds] = useState<Field[]>([]);

  

  if (autosave && !onAutosave) {
    throw new Error("onAutosave function needs to be provided when autosaving is enabled.")
  }


      
    // Read the initial 



    
    function autoSave() {
        // Take the form data, debounce for 500ms
        // Save to state.
    } 

    function save() {

    }


  function addField(position: number, field: FieldClass) {
    const newField: Field = {
      id: crypto.randomUUID(),
      label: "New Field",
      type: field,
    }

    if (newField.type === "input") {
      newField.placeholder = "Enter text here";
    }

  }


  return (
    <div className={cn("border-b", className)}>
      {children}
    </div>
  )
}