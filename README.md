# react-powered-forms


# Examples

## Ex 1 (basic):
User wants a form with:
- A `first` and `last name` field as simple text with no requirements.

The user needs to be able to click a (plus?) button, and select a first/last name field.

Following this, they need to be able to save the form and the form should be converted to JSON in the required format for json-schema-to-zod.

This json object needs to then be exportable to a database.

Following this, the json schema needs to be convertable (ideally with a single render/createReactComponent function) into a React component which can be displayed and interacted with.

The end user needs to be able to enter data into the form that is rendered. The zod schema (generated from the json) would then validate upon submission and if it passes sets some variable which the developer can extract.

The developer should also be able to extract data whilst the end user is inputting state for any other reason.

Finally, the form with the state the end user has inputted needs to be convertable back to json format for storage (and later display to admin) and/or usable as react components from which data can be extracted.



## Sub-Divisions to this package:

Form Field Types - The input field types a user could feasibly want in their form.

Form Constructor Object - The object which holds both form field types and their positions on the page. This also should be a react component capable of rendering each of these form field types on the page when called. It needs to be clickable in certain areas to add new form fields. Old field types also need to be deletable.

Clickable entity - An entity/component needs to be created which can be clicked and a new form type can be added by some basic mechanism. This should be placed at the bottom of the form constructor as a single container taking the width of the page, and anywhere where an additional row/col separation has been created but not filled. In addition, in places where fields are filled at the boundaries between containers, there should be some clickable object to add a new field.

Field Positions/Containers - Eventually we need to be able to split up the field positions on the page into col/row and be able to maintain more complex recursive structures and indices (and handle scrolling etc.).

Form-Constructor-To-JSON - A section of the library intended to take in a form constructor as input, and turn it into zod readable json.

JSON-to-Form-Constructor - A section of the library intended to take in the zod readable json, and then 

Form Viewer - A React component which can render the form and handle state input from the user. It should be able to be constructed from JSON and validated, and data should be extractable from it (via chained . syntax?).

Validator - A section of the library able to process the form viewer and extract it's state - convert it back to json and pass it to the zod schema and check the results (maybe this is something attached to the form viewer and dynamically updated as the viewer inputs values?). This should also be able to return whether the form is valid or not and some relevant error codes/messages.

Form-Viewer-to-Zod-JSON - Something which can take a form viewer and turn it's state into something that is zod validatable json for use in the above.

Form-Viewer-to-Pretty-JSON - Something which can take a form viewer and extract it's data in such a way that is easy for the developer to later interact with when extracting just the user data. (This may not be strictly necessary - could just make this the zod usable data)

Pretty-JSON-to-Entry-Viewer - We need to be able to take the pretty json and turn a particular entry to the form into a nicely viewable element (ie back to a static or editable (if editable we need to be able to store that as edit_data) version of the form viewer, and/or a separate viewer).