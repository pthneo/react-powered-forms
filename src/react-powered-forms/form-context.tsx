import * as React from "react";
import { FormField, FormMetadata } from "./types";

export type FormContext = {
  metadata: FormMetadata;
  setMetadata: React.Dispatch<React.SetStateAction<FormMetadata>>;
  fields: FormField[];
  setFields: React.Dispatch<React.SetStateAction<FormField[]>>;
};

const FormContext = React.createContext<FormContext | null>(null);

export const FormProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [metadata, setMetadata] = React.useState<FormMetadata>({});
  const [fields, setFields] = React.useState<FormField[]>([]);

  return (
    <FormContext.Provider value={{ metadata, setMetadata, fields, setFields }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormEditor = () => {
  const context = React.useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return {
    metadata: context.metadata,
    setMetadata: context.setMetadata,
    fields: context.fields,
    setFields: context.setFields,
  };
};
