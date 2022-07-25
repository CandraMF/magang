<template>
  <div>
    <b-form @submit.stop.prevent="onSubmit">
      <b-form-group id="example-input-group-1" label="Name" label-for="example-input-1">
        <b-form-input
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.name.$model"
          :state="validateState('name')"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback
          id="input-1-live-feedback"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="example-input-group-2" label="Etnis" label-for="example-input-2">
        <b-form-select
          id="example-input-2"
          class="form-select"
          name="example-input-2"
          v-model="$v.form.etnicity.$model"
          :options="etnicity"
          :state="validateState('etnicity')"
          aria-describedby="input-2-live-feedback"
        ></b-form-select>

        <b-form-invalid-feedback id="input-2-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="example-input-group-2" label="Status Pernikahan" label-for="example-input-2">
        <b-form-select
          id="example-input-2"
          class="form-select"
          name="example-input-2"
          v-model="$v.form.martial.$model"
          :options="martial"
          :state="validateState('martial')"
          aria-describedby="input-2-live-feedback"
        ></b-form-select>

        <b-form-invalid-feedback id="input-2-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="example-input-group-2" label="Agama" label-for="example-input-2">
        <b-form-select
          id="example-input-2"
          class="form-select"
          name="example-input-2"
          v-model="$v.form.religion.$model"
          :options="religion"
          :state="validateState('religion')"
          aria-describedby="input-2-live-feedback"
        ></b-form-select>

        <b-form-invalid-feedback id="input-2-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button class="ml-2" @click="resetForm()">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default {
    mixins: [validationMixin],
    props: ["store"],
    data() {
            return {
            etnicity: [],
            religion: [],
            marital: [],
            form: {
                name: null,
                etnicity: null,
                martial: null,
                religion: null
            },
            email: ""
        };
    },
    validations: {
        form: {
            etnicity: {
                required
            },
            martial: {
                required
            },
            religion: {
                required
            },
            name: {
                required,
                minLength: minLength(3)
            }
        }
    },
    methods: {
        validateState(name) {
            const { $dirty, $error } = this.$v.form[name];
            return $dirty ? !$error : null;
        },
        resetForm() {
            this.form = {
                name: null,
                etnicity: null,
                martial: null,
                religion: null,
            };

            this.$nextTick(() => {
                this.$v.$reset();
            });
        },
        onSubmit() {
            this.$v.form.$touch();
            if (this.$v.form.$anyError) {
                return;
            }

            alert("Form submitted!");
        }
    },
}
</script>

<style>
</style>
