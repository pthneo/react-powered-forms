import { FormFieldClass } from "./form-field";

/**
 * The field variant, being one of the following:
 * "input": a text input. The numChars determines the height of the textbox. 
 * "radio": a set of radio buttons. Only 1 response allowed. options sets the selections available.
 * "checkbox": a set of checkboxes. Any number of responses allowed. options sets the selections available.
 * "email": an email input. Email validation included by default.
 * "password": a password input. Hidden input included by default.
 * "phone": a phone input. Phone/area code validation included by default.
 * "dropdown": a dropdown box. Only 1 response allowed. options sets the selections available.
 * "slider": a slider. range sets the accepted range.
 * "payment": a payment area. Includes the credit card fields by default.
 * "date": a date select field. dateRange sets the accepted range.
 * "address": an address field. Includes the address fields separate by default.
 * "legal": a legal text field. legalText sets the required info.
 * "number": a number box. range sets the accepted range.
 */
export type FieldVariant = "input" | "radio" | "checkbox" | "email" | "password" | "phone" | "dropdown" | "slider" | "payment" | "date" | "address" | "legal" | "number"

export type FormField = InstanceType<typeof FormFieldClass>;

export type FormIOField= FormField & {
  /**
   * The index of the field in the form.
   */
  index: number;
}

/**
 * 
 */
export type FormMetadata = {
  /**
   * Form identifier.
   */
  id: string;

  /**
   * Whether a recaptcha challenge is required.
   */

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

export type Blueprint = {
  metadata: JSON,
  schema: JSON,
  form: JSON
}

export type Form = {
  metadata?: FormMetadata,
  schema?: JSON,
  form: FormIOField[]
}

/**
 * The style object to be passed to ....
 */
export type EditorStyles = {
  container: string,
  label: string,
  //...
}

export type ViewerStyles = {
  container: string,
  label: string,
  //...
}