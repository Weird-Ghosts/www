<script setup>
import { createLocalStoragePlugin } from "@formkit/addons";
import { ref, onMounted } from "vue";

// Reactive value to track whether the form has been submitted successfully
const formSubmitted = ref(false);

onMounted(() => {
  if (window.location.search.includes("success")) {
    formSubmitted.value = true;
  }
});
</script>

<template>
  <div
    class="text-xl sm:text-xl bg-white z-30 relative p-4 lg:p-12 mx-auto max-w-6xl">
    <div class="flex flex-wrap">
      <div class="mb-12 w-full lg:w-2/3 lg:pr-10">
        <h2 class="text-2xl block mb-6">
          A few important things before you apply:
        </h2>
        <ol>
          <li>
            <b>Make sure you&#8217;re eligible.</b> Your studio must be based in
            Canada, and a majority of founders from an underrepresented identity
            group.
          </li>
          <li>
            <b>Familiarize yourself</b> with our mandate of social impact, and
            supporting studio development rather than single projects.
          </li>
          <li>
            Complete the goal alignment and pain point exercises. [add more
            detail here, and link to template]
          </li>
        </ol>
        <p class="bg-fog p-2 mt-2">
          Questions?
          <a href="mailto:hello@weirdghosts.ca">Email us</a>!
        </p>
      </div>
      <div
        class="resources text-fog bg-faxGray text-xl mb-12 max-w-lg lg:w-1/3">
        <div class="p-6">
          Resources to review before applying:
          <ul>
            <li>
              <nuxt-link to="/faq#whats-the-eligibility-criteria-for-funding"
                >Eligibility criteria</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/faq">FAQ</nuxt-link>
            </li>
            <li>
              <a href="">Info session video</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <FormKit
      type="form"
      method="POST"
      action="/apply?success"
      :plugins="[
        createLocalStoragePlugin({
          control: 'save',
        }),
      ]"
      use-local-storage
      submit-label="Submit Application"
      name="formkit-test-baby-ghosts-2023"
      id="apply-form"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      netlify
      v-if="!formSubmitted">
      <FormKit
        type="hidden"
        id="form-name"
        name="form-name"
        value="formkit-test-baby-ghosts-2023" />

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
          validation="required|email"
          placeholder="alex@weirdghosts.ca"
          label="Email address" />

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
          help="Tell us about your experience (if any) founding or participating in a startup, student group, co-op, ad hoc collective, or any other organization with multiple collaborators." />
      </FormKit>
      <FormKit type="group" name="aboutYourStudio" id="aboutYourStudio">
        <h3>Alignment Exercises</h3>
        <FormKit
          type="text"
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
          help="What is the name of your studio?"
          validation="required"
          :validation-messages="{
            required: 'This field is required.',
          }" />

        <FormKit
          type="textarea"
          label="Concept"
          rows="6"
          help="Describe your dream studio, including business structures you’re interested in, size, and values."
          validation="required"
          :validation-messages="{
            required: 'This field is required.',
          }" />

        <FormKit
          type="textarea"
          label="Team"
          rows="6"
          help="Provide names, pronouns, and short bios for each of your team members, if any. What will you be looking for in collaborators or co-op members if you intend to grow your team?" />

        <FormKit
          type="textarea"
          label="Background"
          rows="6"
          help="If you have already incorporated or have been operating, tell us about your structure and history, including any fundraising experience and work done to date."
          validation="required"
          :validation-messages="{
            required: 'This field is required.',
          }" />

        <FormKit
          type="textarea"
          label="Game"
          rows="6"
          help="Tell us about the game you are working on now, if applicable." />

        <FormKit
          type="textarea"
          label="Financial sustainability"
          rows="6"
          help="Briefly, what are your initial ideas about how your studio will approach financial sustainability? Where will your revenue come from and how will you distribute it?"
          validation="required"
          :validation-messages="{
            required: 'This field is required.',
          }" />

        <FormKit
          type="textarea"
          label="Social impact"
          rows="6"
          help="What is your interest in social impact, and how does that relate to your studio?"
          validation="required"
          :validation-messages="{
            required: 'This field is required.',
          }" />
        <FormKit
          type="file"
          label="Creative assets"
          name="creative"
          help="If you have multiple images you'd like to share, please combine them into one file. PDF, PNG, or JPG accepted (max 8MB)."
          accept=".jpg,.png,.pdf" />
      </FormKit>
      <FormKit
        type="checkbox"
        label="Our studio meets all eligibility requirements"
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
  </div>
</template>

<style lang="postcss">
h3 {
  @apply font-black text-3xl uppercase leading-6 text-gray-900 mt-12;
  &:first-child {
    @apply mt-0;
  }
}
</style>
