
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
export type Variant = "input" | "radio" | "checkbox" | "email" | "password" | "phone" | "dropdown" | "slider" | "payment" | "date" | "address" | "legal" | "number"

export type Field = {
    /**
     * Unique identifier of the field.
     */
    id: UUID;
  
    /**
     * Label of the field, displayed above. If undefined, it will not be shown.
     */
    label?: string;
  
    /**
     * Placeholder value shown in the field. Only applicable on "password", "input",
     * "phone", "email", "discount", "dropdown" and "address" fields.
     */
    placeholder?: string;
  
    /**
     * Default value shown in the field. Only applicable on "radio", "date" and
     * "dropdown" fields.
     */
    defaultValue?: string;
  
    /**
     * The field class
     */
    type: Variant;
  
    /**
     * The options available for selection. Only applicable on "radio", "dropdown"
     * and "checkbox" fields.
     */
    options?: string[]
  
    /**
     * Whether the field is optional or not.
     */
    required?: boolean;
  
    /**
     * Whether the field increases the subtotal. 
     */
    cost?: number | number[];
  
    /**
     * The number of characters in the field. Only applicable to the "input" field.
     */
    numChars?: number; 
  
    /**
     * The date range available for selection. Only applicable to the "date" field.
     * Both start and end dates must be strings in YYYY-MM-DD format.
     */
    dateRange?: { start: string; end: string }
  
    /**
     * The number range available for selection, inclusive. Only applicable to the 
     * "number" and "slider" fields.
     */
    range?: { start: number; end: number }
  
    /**
     * Defines the size of the components. All components default to have a column
     * span of 1, and they will always span only 1 column on mobile. Columns do
     * not wrap or extend to fill space.
     */
    colSpan?: 1 | 2
  
    /**
     * The legal disclaimer or text with or without links. This is available only
     * on the "legal" field. text is the text visible, whilst checkbox if true
     * shows a checkbox the user must click (if required is true).
     */
    legalText?: { text: string; checkbox: boolean; required?: boolean };
  
    /**
     * The password requirements for a "password" field. 
     */
    passwordRequirements?: {
      /**
       * Symbols ie. !$%^&*()_+|~-=`{}[]:";'<>?,./
       */
      symbols: boolean;
  
      /**
       * Numbers ie. 0123456789
       */
      numbers: boolean;
  
      /**
       * Whether capitals are required. True if yes.
       */
      capitals: boolean;
  
      /**
       * The password length requirement.
       */
      length: number;
    }
  
    /**
     * Whether the field is conditionally displayed or not, depending on the 
     * "condition", over the dependent "field" id.
     */
    conditional?: { field: number; condition: string }
  }