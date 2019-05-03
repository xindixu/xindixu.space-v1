<template>
  <div>
    <h1>Contact</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="email-label"
                    label="Email address:"
                    label-for="email-input">
        <b-form-input id="email-input"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Albert.Einstein@physics.ox.ac.uk">
        </b-form-input>
      </b-form-group>

      <b-form-group id="name-label"
                    label="Your Name:"
                    label-for="name-input">
        <b-form-input id="name-input"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Albert Einstein">
        </b-form-input>
      </b-form-group>

      <b-form-group id="class-label"
                    label="Please describe yourself:"
                    label-for="class-input">
        <b-form-select v-model="form.class"
                       :options="classOptions"
                       class="mb-3" />
      </b-form-group>

      <b-form-group>
       <b-form-radio-group v-model="form.ut"
                           :options="utOptions"
                           name="radioInline">
       </b-form-radio-group>
      </b-form-group>

      <b-form-group id="message-label"
                    label="Message:"
                    label-for="message-input">
        <b-form-textarea id="message-input"
                     v-model="form.message"
                     placeholder="Leave your message"
                     :rows="3"
                     :max-rows="6">
        </b-form-textarea>
      </b-form-group>

      <b-button type="submit">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>

      <p>Class: <strong>{{ form.class }}</strong></p>
      <p>UT: <strong>{{ form.ut }}</strong></p>
      <p>Message: <strong>{{ form.message }}</strong></p>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        class: null,
        ut: null,
        message: ''
      },
      show: true,
      classOptions: [
        { value: null, text: 'Please select an option' },
        { value: 'undergrad', text: 'Undergrad Student'},
        { value: 'grad', text: 'Graduate Student' },
        { value: 'faculty', text: 'Faculty' },
        { value: 'other', text: 'Other' }
      ],
      utOptions: [
        { value: true, text: 'I\'m affiliated with UT'},
        { value: false, text: 'I\'m NOT affiliated with UT' }
      ]
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.class = null;
      this.form.ut = null;
      this.form.message = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<!-- b-form-1.vue -->
