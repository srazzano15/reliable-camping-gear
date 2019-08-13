<template>
  <b-modal
    id="contact-us"
    title="Contact Us"
    header-class="rcg__header--sec px-4"
    header-bg-variant="rcg-purple"
    ok-title="Send"
    ok-variant="rcg-blue"
    cancel-variant="rcg-dark"
    footer-class="rcg__btn--custom px-4"
    body-class="px-4"
    @ok="submitForm"
  >
    <h6 class="rcg__paragraph font-weight-bolder">We are eager to hear from you!</h6>
    <p class="rcg__paragraph text-break pb-3">
      Drop us a note and we will get back to you 
      as soon as we can to answer your questions.
    </p>
    <b-form id="contact-form" class="mt-3">
      <b-form-group
        label="Name:"
        label-for="name"
        label-size="lg"
        label-cols="3"
        label-class="rcg__form__label"
      >
        <b-form-input
          id="contact-name"
          required
          v-model="form.name"
          placeholder="Enter full name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Email:"
        label-for="email"
        label-size="lg"
        label-cols="3"
        label-class="rcg__form__label"
      >
        <b-form-input
          id="contact-email"
          required
          v-model="form.email"
          placeholder="Enter email address"
          type="email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Message:"
        label-for="message"
        label-size="lg"
        label-class="rcg__form__label"
      >
        <b-form-textarea
          id="contact-name"
          required
          v-model="form.message"
          placeholder="Enter message..."
          rows="4"
          max-rows="8"
        ></b-form-textarea>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      const msg = {
        to: 'srazzano15@gmail.com',
        from: 'srazzano15@gmail.com',
        subject: 'sent with VueJS',
        text: 'this actually works',
        html: '<p>this actually works</p>'
      }
      sgMail.send(msg)
    }
  },
}
</script>