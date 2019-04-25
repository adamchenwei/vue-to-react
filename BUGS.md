- not able to process comments
  - i.e.
  //Note: SFW-7797: this is needed for a temporary patch for a chrome browser bug with not detecting autofill
- not able to process : syntax binding
  - i.e.
  :maxlength="fieldAttributes.name.maxLength"
  :errors="nameErrors"

- not process @ binding
  - i.e.
  @input="(value) => onInput(value, 'name')"
  @blur="onBlur"

