<script setup>
import { createLocalStoragePlugin } from "@formkit/addons";

import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const formSubmitted = ref(false);
const provincesAndTerritories = [
  { label: "Alberta", value: "AB" },
  { label: "British Columbia", value: "BC" },
  { label: "Manitoba", value: "MB" },
  { label: "New Brunswick", value: "NB" },
  { label: "Newfoundland and Labrador", value: "NL" },
  { label: "Northwest Territories", value: "NT" },
  { label: "Nova Scotia", value: "NS" },
  { label: "Nunavut", value: "NU" },
  { label: "Ontario", value: "ON" },
  { label: "Prince Edward Island", value: "PE" },
  { label: "Quebec", value: "QC" },
  { label: "Saskatchewan", value: "SK" },
  { label: "Yukon", value: "YT" },
];
watch(router.currentRoute, (to) => {
  if (to.query.success) {
    formSubmitted.value = true;
  } else {
    formSubmitted.value = false;
  }
});
const handleSubmit = async function (payload, node) {
  const applicationForm = document.getElementById("apply-form");
  let formData = new FormData(applicationForm);

  try {
    const response = await fetch("/apply?success", {
      method: "POST",
      body: formData,
    });

    if (response.status == 200) {
      await navigateTo({
        path: "/apply",
        query: {
          success: true,
        },
      });
    } else {
      node.restoreCache();
      console.log(node);
      if (response.status == 400) {
        node.setErrors([
          "There was an error in submitting. This is likely because your file upload is too large – it must be under 8MB.",
        ]);
      } else {
        node.setErrors([
          "There was an error submitting your form. Please correct any errors and try again, or email us at hello@weirdghosts.ca.",
        ]);
      }
    }
  } catch (error) {
    console.log(`error in submitting the form data: ${error}`);
    node.restoreCache();
  }
};
</script>

<template>
  <div
    class="text-xl sm:text-xl bg-white z-30 relative p-4 lg:p-12 mx-auto max-w-screen-xl">
    <div id="thank-you" v-if="formSubmitted == true">
      <div class="mb-12 w-full lg:w-2/3 lg:pr-10">
        <h2 class="text-4xl font-black block mb-6">
          We&#8217;ve received your application!
        </h2>
        <p>
          We&#8217;ll be in touch before September 25 to let you know the next
          steps.
        </p>
      </div>
    </div>
    <div id="application" v-else>
      <div class="flex flex-wrap">
        <div class="w-full md:w-2/3 md:pr-10">
          <h2 class="text-xl block mb-6">
            A few important things before you apply:
          </h2>
          <ol>
            <li>
              <b>Make sure you&#8217;re eligible.</b> Your studio must be based
              in Canada, and a majority of founders from an underrepresented
              identity group.
            </li>
            <li>
              <b>Familiarize yourself</b> with our mandate of social impact, and
              supporting studio development rather than single projects.
            </li>
            <li>
              Complete the <b>goal alignment</b> and
              <b>pain point</b> exercises. [add more detail here, and link to
              template]
            </li>
          </ol>
        </div>
        <div class="resources md:text-xl max-w-lg md:w-1/3">
          Resources to review before applying:
          <ul>
            <li>
              <nuxt-link to="/baby-ghosts">Program details</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/faq#whats-the-eligibility-criteria-for-funding"
                >Eligibility criteria</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/faq">FAQ</nuxt-link>
            </li>
          </ul>
          <p class="bg-fog p-2 mt-2">
            Questions?
            <a href="mailto:hello@weirdghosts.ca">Email us</a>!
          </p>
        </div>
      </div>

      <FormKit
        type="form"
        enctype="application/x-www-form-urlencoded"
        method="POST"
        :plugins="[
          createLocalStoragePlugin({
            control: 'save',
          }),
        ]"
        use-local-storage
        @submit="handleSubmit"
        submit-label="Submit Application"
        name="baby-ghosts-2023"
        id="apply-form"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        netlify>
        <FormKit
          type="hidden"
          id="form-name"
          name="form-name"
          value="baby-ghosts-2023" />

        <FormKit
          type="checkbox"
          name="save"
          :value="true"
          label="Save my progress as I type" />

        <FormKit type="group" name="aboutYou" id="aboutYou">
          <h3>About You</h3>
          <FormKit
            type="text"
            name="yourName"
            id="yourName"
            label="Your name"
            help="What do we call you?"
            placeholder="Alex Ramirez"
            validation="required" />
          <FormKit
            type="text"
            name="pronouns"
            id="pronouns"
            label="Pronoun(s)"
            help="If you feel comfortable sharing your pronouns, please do, so we can refer to you correctly."
            placeholder="They/them or she/her" />
          <FormKit
            type="email"
            name="email"
            id="email"
            help="How should we contact you?"
            validation="required|email"
            placeholder="alex@weirdghosts.ca"
            label="Email address" />

          <FormKit
            type="text"
            name="locations"
            id="locations"
            label="Location(s)"
            validation="required"
            placeholder="Enter your location(s)"
            multiple
            help="Province(s) or territor(ies) where you and your team members reside."
            :options="provincesAndTerritories" />

          <FormKit
            type="textarea"
            name="founderExperience"
            id="founderExperience"
            label="Collaboration experience"
            validation="required"
            rows="6"
            help="Do you have experience founding or participating in a startup, student group, co-op, ad hoc collective, or any other organization with multiple collaborators? If yes, how will you incorporate those experiences in your studio? If no, why are you interested in doing so now?" />
        </FormKit>
        <FormKit type="group" name="aboutYourStudio" id="aboutYourStudio">
          <h3>Alignment Exercises</h3>
          <FormKit
            type="url"
            name="miroLink"
            id="miroLink"
            label="Miro board link"
            validation="required|url"
            placeholder="https://miro.com/app/board/abcde=/?share_link_id=123456789"
            help="Share the link to the Miro board with your completed Goal Alignment and Pain Point exercises." />
        </FormKit>
        <FormKit type="group" name="aboutYourStudio" id="aboutYourStudio">
          <h3>About Your Studio</h3>
          <FormKit
            type="text"
            label="Studio name"
            name="studioName"
            help="What is the name of your studio?"
            validation="required"
            :validation-messages="{
              required: 'This field is required.',
            }" />

          <FormKit
            type="textarea"
            label="Concept"
            rows="6"
            name="concept"
            help="Describe your dream studio, including business structures you’re interested in, size, and values."
            validation="required"
            :validation-messages="{
              required: 'This field is required.',
            }" />

          <FormKit
            type="textarea"
            label="Team"
            rows="6"
            name="team"
            validation="required"
            help="Provide names, pronouns, and short bios for each team member. What will you be looking for in collaborators or co-op members if you intend to grow?" />

          <FormKit
            type="textarea"
            label="Background"
            rows="6"
            name="background"
            help="If you have already incorporated or have been operating, tell us about your structure and history, including any fundraising experience and work done to date."
            validation="required"
            :validation-messages="{
              required: 'This field is required.',
            }" />
          <FormKit
            type="textarea"
            label="Financial sustainability"
            rows="6"
            name="financialSustainability"
            help="Briefly, what are your initial ideas about how your studio will approach financial sustainability? Where will your revenue come from and how will you distribute it?"
            validation="required"
            :validation-messages="{
              required: 'This field is required.',
            }" />
          <FormKit
            type="textarea"
            label="Social impact"
            rows="6"
            name="socialImpact"
            help="What is your interest in social impact, and how does that relate to your studio?"
            validation="required"
            :validation-messages="{
              required: 'This field is required.',
            }" />
        </FormKit>
        <FormKit type="group" name="aboutYourStudio" id="aboutYourStudio">
          <h3>About Your Game</h3>
          <FormKit
            type="textarea"
            label="Game description"
            name="game"
            rows="6"
            help="Tell us about the game you are working on now, if applicable." />
          <FormKit
            type="file"
            label="Creative assets"
            name="creative"
            help="If you have multiple images you'd like to share, please combine them into one file. PDF, PNG, or JPG accepted (max 8MB)."
            accept=".jpg,.png,.pdf" />
        </FormKit>
        <FormKit type="group" name="aboutYourStudio" id="aboutYourStudio">
          <h3>Eligibility</h3>
          <FormKit
            type="checkbox"
            label="Yes, we are eligible"
            help="Your studio must be based in Canada, and a majority of founders from an underrepresented identity group."
            name="eligibility"
            :value="true"
            validation="accepted"
            :validation-messages="{
              required:
                'You must accept the eligibility requirements to submit this form.',
            }"
            validation-visibility="dirty" />
        </FormKit>
      </FormKit>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
h3 {
  @apply font-black text-3xl uppercase leading-6 text-gray-900 mt-12;
  &:first-child {
    @apply mt-0;
  }
}
</style>
