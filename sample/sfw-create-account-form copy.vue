<template>
  <fieldset>
    <cw-form-input
      ref="name"
      automation="name"
      unique-id="name"
      name="name"
      label="Full Name111"
      :maxlength="fieldAttributes.name.maxLength"
      :errors="nameErrors"
      :value="name"
      @input="(value) => onInput(value, 'name')"
      @blur="onBlur"
    />
    <cw-form-input
      ref="username"
      automation="username"
      unique-id="username"
      name="username"
      label="Email"
      :maxlength="fieldAttributes.username.maxLength"
      type="email"
      :errors="usernameErrors"
      :value="username"
      @input="(value) => onInput(value, 'username')"
      @blur="onBlur"
    />
    <cw-form-password
      ref="password"
      automation="password"
      class="cw-form-password__toggle--override"
      unique-id="password"
      name="password"
      label="Password (Min. 6 Characters)"
      :maxlength="fieldAttributes.password.maxLength"
      :errors="passwordErrors"
      :value="password"
      @input="(value) => onInput(value, 'password')"
      @blur="onBlur"
      @update:visible="togglePasswordVisibleCallback"
    />
  </fieldset>
</template>

<script>
import CwFormInput from '@chewy/design-system/cw-form/cw-form-input';
import CwFormPassword from '@chewy/design-system/cw-form/cw-form-password';
import fieldAttributes from './constants/fieldAttributes.js';

export default {
  name: 'SfwCreateAccountForm',
  components: {
    CwFormInput,
    CwFormPassword
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    nameErrors: {
      type: Array,
      default() {
        return [];
      }
    },
    username: {
      type: String,
      default: ''
    },
    usernameErrors: {
      type: Array,
      default() {
        return [];
      }
    },
    password: {
      type: String,
      default: ''
    },
    passwordErrors: {
      type: Array,
      default() {
        return [];
      }
    },
    fieldAttributes: {
      type: Object,
      default() {
        return fieldAttributes;
      }
    },
    onBlur: {
      type: Function,
      required: true
    },
    // TODO: SFW-7646 onInput should accept raw event, wait CDS tweak
    onInput: {
      type: Function,
      required: true
    },
    saveRefsCallback: {
      type: Function,
      required: true
    },
    togglePasswordVisibleCallback: {
      type: Function,
      required: true
    }
  },
  data() {
    return {};
  },
  mounted() {
    //Note: SFW-7797: this is needed for a temporary patch for a chrome browser bug with not detecting autofill
    setTimeout(() => {
      this.saveRefsCallback({
        name: this.$refs.name,
        username: this.$refs.username,
        password: this.$refs.password
      });
    }, 2000);
  }
};
</script>
