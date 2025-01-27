/**
 * @file Constructor 
 * 
 * The constructor component is the component to be displayed wherever you want
 * your form builder to be. 
 */

"use client";

import React, { Component, ReactElement, ReactNode, useState } from "react";
import { Field, FieldClass } from "./types";

/**
 * 
 */
export type Metadata = {
  title?: string;
  description?: string;

  reCAPTCHA?: boolean;

  /**
   * Whether payment is required for this 
   */
  payment?: boolean;

  /**
   * Whether tax is included in the tallies and costs.
   */
  taxIncluded?: boolean;

  /**
   * Whether discount field is to be shown.
   */
  discountShown?: boolean;
}

export type Container = {
    formData?: JSON;
    onSubmit?: () => {};

    /*
     * 
     */
    autosave?: boolean;
    onAutosave?: () => {};

}

export type Schema = {
  ...
}

export type Form = {
  metadata?: Metadata,
  form: {

  } | null;
  
}






/**
 * Typical usage:
 * 
 * const [metadata, setMetadata] = useState<>
 */

export default function FormConstructor({ submit, autosave = false, onAutosave, }: Container ) {
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
    <>
      <section>
        {FormData.}
        <h2>Add Field</h2>
      </section>
    </>
  )
}


type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

/** 
 * Creates an error boundary around the form constructor such that if an error 
 * arises, the program does not crash. Displays the error message in 
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    // Update state to render fallback UI on the next render
    return { hasError: true };
  }

  // Log
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("react-powered-forms:", error, info); 
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="font-bold text-red-500">react-powered-forms: An error occurred.</h1>;
    }
    return this.props.children;
  }
}

export function SubmitButton() {
  return (
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Submit
    </button>
  )
}