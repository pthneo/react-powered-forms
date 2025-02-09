import { FieldVariant } from "./types"; // why do i need types here?

export class FormFieldClass {
  /**
   * Unique identifier of the field.
   */
  id: string;

  /**
   * Label of the field, displayed above. If undefined, it will not be shown.
   */
  label?: string;

  /**
   * Placeholder value shown in the field. Only applicable on "password", "input",
   * "phone", "payment", "email", "dropdown" and "address" fields.
   */
  placeholder?: string | string[];

  /**
   * Default value shown in the field. Only applicable on "radio" and "date" and
   * fields.
   */
  defaultValue?: string;

  /**
   * The field class
   */
  type: FieldVariant;

  /**
   * The options available for selection. Only applicable on "radio", "dropdown"
   * and "checkbox" fields.
   */
  options?: string[];

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
  dateRange?: { start: string; end: string };

  /**
   * The number range available for selection, inclusive. Only applicable to the
   * "number" and "slider" fields.
   */
  range?: { start: number; end: number };

  /**
   * Defines the size of the components. All components default to have a column
   * span of 1, and they will always span only 1 column on mobile. Columns do
   * not wrap or extend to fill space.
   */
  colSpan?: 1 | 2;

  /**
   * The legal disclaimer or text with or without links. This is available only
   * on the "legal" field. text is the text visible, whilst checkbox if true
   * shows a checkbox the user must click (if required is true).
   */
  legalText?: { text: string; checkbox: boolean };

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
  };

  /**
   * Whether the field is conditionally displayed or not, depending on the
   * "condition", over the dependent "field" id.
   */
  conditional?: { field: number; condition: string };

  constructor(type: FieldVariant, colSpan: 1 | 2) {
    this.id = crypto.randomUUID();
    this.type = type;
    this.label = "New Field";
    this.required = true;
    this.colSpan = colSpan;

    if (type === "input") {
      this.placeholder = "Enter text here";
    }

    if (type === "password") {
      this.placeholder = "••••••••••"
    }

    if (type === "phone") {
      this.placeholder = "(123) 456-7890";
    }

    if (type === "payment") {
      this.placeholder = ["Name on Card", "Card Number", "MM/YY", "CVC", "Discount Code"];
    }

    if (type === "email") {
      this.placeholder = "john@doe.com"
    }

    if (type === "dropdown") {
      this.placeholder = "Select";
      this.options = ["Option 1", "Option 2", "Option"];
    }

    if (type === "address") {
      this.placeholder = ["Address Line 1", "Address Line 2", "City", "State", "Country", "Postcode"];
    }

    if (type === "radio" ) {
      this.options = ["Option 1", "Option 2", "Option 3"];
      this.defaultValue = "Option 1";
    }

    if (type === "checkbox") {
      this.options = ["Option 1", "Option 2", "Option 3"];
    }

    if (type === "legal") {
      this.legalText = { text: "I agree to the terms and conditions", checkbox: true };
    }

    if (type === "password") {
      this.passwordRequirements = {
        symbols: false,
        numbers: false,
        capitals: false,
        length: 8,
      };
    }
  }

  setDefaultValue(value: string) {
    if (this.type === "radio" || this.type === "date") {
      if (this.type === "date" && !value.match(/^\d{4}-\d{2}-\d{2}$/)) {
        throw new Error("Default value must be in the format YYYY-MM-DD.");
      }

      if (this.type === "radio" && !this.options?.includes(value)) {
        throw new Error("Default value must be one of the options.");
      } 

      this.defaultValue = value;
    } else {
      throw new Error("Default value can only be set on radio and dropdown fields");
    }
  }

  setCost(cost: number | number[]) {
    if (this.type === "number" || this.type === "slider") {
      if (!Number.isInteger(cost)) {
        throw new Error("Cost must be an integer for number and slider fields.");
      }
      this.cost = cost;
    } else if (this.type === "dropdown" || this.type === "checkbox" || this.type === "radio") {
      if (!Array.isArray(cost)) {
        throw new Error("Cost must be an array for dropdown, checkbox and radio fields.");
      }
      this.cost = cost;
    } else {
      throw new Error("Cost can only be set on number, dropdown, checkbox, radio and slider fields.");
    }
  }

  setNumChars(numChars: number) {
    if (this.type === "input") {
      if (!Number.isInteger(numChars)) {
        throw new Error("Number of characters must be an integer.");
      }
      this.numChars = numChars;
    } else {
      throw new Error("Number of characters can only be set on input fields.");
    }
  }

  setDateRange(start: string, end: string) {
    if (this.type === "date") {
      if (!start.match(/^\d{4}-\d{2}-\d{2}$/) || !end.match(/^\d{4}-\d{2}-\d{2}$/)) {
        throw new Error("Date range must be in the format YYYY-MM-DD.");
      }
      this.dateRange = { start, end };
    } else {
      throw new Error("Date range can only be set on date fields.");
    }
  }

  setRange(start: number, end: number) {
    if (this.type === "number" || this.type === "slider") {
      if (!Number.isInteger(start) || !Number.isInteger(end)) {
        throw new Error("Range must be integers for number and slider fields.");
      }
      this.range = { start, end };
    } else {
      throw new Error("Range can only be set on number and slider fields.");
    }
  }

  setConditional(field: number, condition: string) {
    this.conditional = { field, condition };
  }

  setLegalText(text: string, checkbox: boolean) {
    if (this.type === "legal") {
      this.legalText = { text, checkbox };
    } else {
      throw new Error("Legal text can only be set on legal fields.");
    }
  }

  alterType(type: FieldVariant) {
    const previousType = this.type;
    this.type = type;

    if (type === "input") {
      this.placeholder = "Enter text here";
    }

    if (
      (type === "radio" || type === "dropdown" || type === "checkbox") &&
      !(previousType === "radio" || previousType === "dropdown" || previousType === "checkbox")
    ) {
      this.options = ["Option 1", "Option 2", "Option 3"];
    }


    // ...
  }

  addOption(option: string) {
    if (this.type === "radio" || this.type === "dropdown" || this.type === "checkbox") {
      if (!this.options) {
        this.options = [];
      }
      this.options.push(option);
    }
  }

  updateOption(index: number, value: string) {
    if (this.options) {
      this.options[index] = value;
    }
  }

  removeOption(index: number) {
    if (this.options) {
      this.options = this.options.filter((_, i) => i !== index);
    }
  }
}

