<template>
  <FormKit
    type="form"
    method="POST"
    @submit="handleSubmit"
    :plugins="[
      createLocalStoragePlugin({
        control: 'save',
      }),
    ]"
    use-local-storage
    submit-label="Submit Application"
    name="TEST-baby-ghosts-2023"
    id="apply-form"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    netlify
    v-if="!formSubmitted">
    <FormKit
      type="hidden"
      id="form-name"
      name="form-name"
      value="TEST-baby-ghosts-2023" />
    <FormKit
      type="checkbox"
      name="save"
      :value="true"
      label="Save my progress as I type" />
    <FormKit type="group" name="aboutYou" id="aboutYou">
      <FormKit
        type="text"
        name="yourName"
        id="yourName"
        label="Name"
        value="Alex Ramirez"
        help="Your full name"
        placeholder="Alex Ramirez"
        validation="required"
        validation-visibility="live" />
      <FormKit
        type="email"
        value="jennie@jenniefaber.com"
        name="email"
        id="email"
        label="Email address" />
      <!-- <FormKit
        type="text"
        name="coapplicantName"
        id="coapplicantName"
        label="Co-applicants names (if any)" />

      <FormKit
        type="text"
        name="locations"
        id="locations"
        label="Location(s)"
        placeholder="Vancouver, BC and Winnipeg, MB"
        help="City/province where you live now or plan to be based" />
      <FormKit
        type="textarea"
        name="founderExperience"
        id="founderExperience"
        label="Collaboration experience"
        rows="6"
        placeholder="Tell us about your experience (if any) founding or participating in a startup, student group, co-op, ad hoc collective, or any other organization with multiple collaborators."
        help="Tell us about your experience collaborating with others." /> -->
    </FormKit>
    <FormKit
      type="file"
      label="Creative assets"
      name="creative"
      help="Please upload a portfolio of your work."
      accept=".jpg,.png,.pdf" />

    <!-- <FormKit
      type="text"
      label="Studio name"
      placeholder="What is the name of your studio, if you have one?"
      help="What's your studio called?"
      validation="required"
      :validation-messages="{
        required: 'This field is required.',
      }" />

    <FormKit
      type="textarea"
      label="Concept"
      rows="6"
      placeholder="Describe your dream studio, including business structures you’re interested in, size, and values."
      help="Let's hear about your studio concept."
      validation="required"
      :validation-messages="{
        required: 'This field is required.',
      }" />

    <FormKit
      type="textarea"
      label="Team"
      rows="6"
      placeholder="Provide short bios for each of your team members, if any. What will you be looking for in collaborators or co-op members if you intend to grow your team?"
      help="Tell us about your team members or collaborators."
      validation="required"
      :validation-messages="{
        required: 'This field is required.',
      }" />

    <FormKit
      type="textarea"
      label="Background"
      rows="6"
      placeholder="If you have already incorporated or have been operating, tell us about your structure and history, including any fundraising experience and work done to date."
      help="Share the background of your studio."
      validation="required"
      :validation-messages="{
        required: 'This field is required.',
      }" />

    <FormKit
      type="textarea"
      label="Game"
      rows="6"
      placeholder="Tell us about the game you are working on now, if applicable."
      help="Describe the game you're currently working on."
      validation="required"
      :validation-messages="{
        required: 'This field is required.',
      }" />

    <FormKit
      type="textarea"
      label="Financial sustainability"
      rows="6"
      placeholder="Briefly, what are your initial ideas about how your studio will approach financial sustainability? Where will your revenue come from and how will you distribute it?"
      help="Explain your financial sustainability plans."
      validation="required"
      :validation-messages="{
        required: 'This field is required.',
      }" />

    <FormKit
      type="textarea"
      label="Social impact"
      rows="6"
      placeholder="What is your interest in social impact, and how does that relate to your studio? If you're unsure, please read our blog post, A brief intro to making your indie game studio impactful, and review our Learn site."
      help="Discuss your studio's social impact goals."
      validation="required"
      :validation-messages="{
        required: 'This field is required.',
      }" />

    <FormKit
      type="checkbox"
      label="Eligibility"
      help="Do you meet all eligibility requirements?"
      name="eligibility"
      :value="true"
      validation="accepted"
      validation-visibility="dirty" /> -->
  </FormKit>
</template>

<script>
import { createLocalStoragePlugin } from "@formkit/addons";

import { ref } from "vue";

export default {
  setup(_, { root }) {
    const formSubmitted = ref(false);
    const formData = ref();

    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    };

    const handleSubmit = (e) => {
      const myForm = document.getElementById("apply-form");
      const formDataObj = new FormData(myForm);

      // Converting FormData to an object
      const formData = {};
      for (const [key, value] of formDataObj.entries()) {
        formData[key] = value;
      }

      // Using your encode function
      const encodedData = encode(formData);

      fetch("/thanks", {
        method: "POST",
        body: encodedData,
      })
        .then(async (response) => {
          console.log(response.status);
          const text = await response.text();
          console.log("Response body:", text); // Log the response body
          if (response.status == 200) {
            formSubmitted.value = true;
            alert("Form submitted successfully!");
          } else {
            e.preventDefault();
            alert("There was an error submitting the form.");
          }
        })
        .catch((error) => {
          console.log("====================================");
          console.log(`error in submitting the form data:${error}`);
          console.log("====================================");
        });
    };

    return {
      createLocalStoragePlugin,
      formSubmitted,
      formData,
      handleSubmit,
    };
  },
};
</script>

<style lang="postcss">
.resources a {
  @apply text-base  underline cursor-pointer;
}
form {
  p.label-subheading {
    @apply mt-1 max-w-2xl text-lg leading-6 text-gray-600 font-normal;
  }
  .input-wrapper {
    @apply relative flex-1  shadow-sm;
  }
  .form-input__text {
    @apply block w-full;
    @screen sm {
      @apply text-lg leading-5;
    }
  }
}
</style>
