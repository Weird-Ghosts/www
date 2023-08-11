<template>
  <div class="text-xl sm:text-xl bg-white z-30 relative p-4 lg:p-12">
    <form
      v-if="!formSubmitted"
      id="application"
      name="cohort-1-application"
      data-netlify="true"
      v-on:submit.prevent="handleSubmit">
      <input
        type="hidden"
        id="form-name"
        name="form-name"
        value="cohort-1-application" />

      <div>
        <h1
          class="uppercase text-2xl lg:text-4xl font-bold leading-tight lg:leading-normal">
          Baby Ghosts Peer Accelerator Application
        </h1>
        <div class="flex flex-wrap">
          <div class="mb-12 w-full lg:w-2/3 lg:pr-10">
            <p class="text-black text-xl">
              This form is pretty long and does not save your data if you close
              this browser window! We highly recommend making a copy of
              <a
                href="https://docs.google.com/document/d/1edzAljXStKM9ofWjsWw-WRNhJ413FtLpnUvUa5sg9AI/edit?usp=sharing"
                target="_blank">
                this Google Doc
              </a>
              to compose your responses, then copying and pasting them into the
              form before submitting.
            </p>
            <p class="bg-fog p-2 mt-2">
              Questions?
              <a href="mailto:hello@damagelabs.ca">Email us</a> or join the
              <a
                href="https://dmgto.slack.com/archives/GT0RME944/p1597962381005700"
                >#damage-labs</a
              >
              Slack channel!
            </p>
          </div>
          <div
            class="resources text-fog bg-faxGray text-xl mb-12 max-w-lg lg:w-1/3">
            <div class="p-6">
              Resources to review before applying:
              <ul>
                <li>
                  <a> Eligibility criteria</a>
                </li>
                <li>
                  <a> FAQ</a>
                </li>
                <li>
                  <a href="https://vi.to/hubs/damage-labs"
                    >Info session video recording</a
                  >
                </li>
                <li>
                  <a
                    href="https://vi.to/attendee/hubs/damage-labs#/pages/q-a-recap"
                    target="_blank"
                    >Q&amp;A recap</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3
              class="font-bold text-3xl leading-6 font-medium text-black uppercase">
              About you
            </h3>
          </div>
          <div class="mt-6 sm:mt-5">
            <div
              class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                for="yourName"
                class="block text-xl font-bold leading-5 text-black sm:mt-px sm:pt-2">
                Your name
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div class="max-w-lg flex rounded-md shadow-sm">
                  <input
                    id="yourName"
                    name="yourName"
                    v-model="formData.yourName"
                    class="flex-1 form-input block w-full min-w-0 rounded-md transition duration-150 ease-in-out sm:text-lg sm:leading-5" />
                </div>
              </div>
            </div>
            <div
              class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                for="coapplicantName"
                class="block text-xl font-bold leading-5 text-black sm:mt-px sm:pt-2">
                Co-applicant's name
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div class="max-w-lg flex rounded-md shadow-sm">
                  <input
                    id="coapplicantName"
                    name="coapplicantName"
                    v-model="formData.coapplicantName"
                    class="flex-1 form-input block w-full min-w-0 rounded-md transition duration-150 ease-in-out sm:text-lg sm:leading-5" />
                </div>
              </div>
            </div>

            <div
              class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                for="email"
                class="block text-xl font-bold leading-5 text-black sm:mt-px sm:pt-2">
                Email address
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div class="max-w-lg rounded-md shadow-sm">
                  <input
                    id="email"
                    name="email"
                    v-model="formData.email"
                    type="email"
                    class="form-input block w-full transition duration-150 ease-in-out sm:text-lg sm:leading-5" />
                </div>
              </div>
            </div>

            <div
              class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                for="locations"
                class="block text-xl font-bold leading-6 text-black sm:mt-px sm:pt-2">
                Location(s)<br />
                <div class="text-lg font-normal text-gray-600">
                  City/province where you live now or plan to be based
                </div>
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div class="max-w-lg flex rounded-md shadow-sm">
                  <input
                    id="locations"
                    name="locations"
                    v-model="formData.locations"
                    placeholder="Vancouver, BC and Winnipeg, MB"
                    class="flex-1 form-input block w-full min-w-0 rounded-md transition duration-150 ease-in-out sm:text-lg sm:leading-5" />
                </div>
              </div>
            </div>
            <div
              id="founderExperience"
              class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                for="founderExperience"
                class="block text-xl font-bold leading-5 text-black sm:mt-px sm:pt-2">
                Founder experience
                <p class="label-subheading">
                  Tell us about your experience – if any – starting a business,
                  student group, co-op, ad hoc collective or any other
                  organization with multiple collaborators.
                </p>
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div class="max-w-lg flex rounded-md shadow-sm">
                  <textarea
                    id="founderExperience"
                    name="founderExperience"
                    v-model="formData.founderExperience"
                    rows="6"
                    class="form-textarea block w-full transition duration-150 ease-in-out sm:text-lg sm:leading-5"></textarea>
                </div>
                <p class="mt-2 text-lg text-gray-600"></p>
              </div>
            </div>
            <div
              id="workExperience"
              class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                for="workExperience"
                class="block text-xl font-bold leading-5 text-black sm:mt-px sm:pt-2">
                Work experience
                <p class="label-subheading">
                  Provide a <strong class="font-bold">summary of</strong> or
                  <strong class="font-bold">link to</strong>
                  your creative work and/or professional experience (portfolio,
                  CV or resume). Include your co-applicant if you have one.
                </p>
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div class="max-w-lg flex rounded-md shadow-sm">
                  <textarea
                    id="workExperience"
                    name="workExperience"
                    v-model="formData.workExperience"
                    rows="6"
                    class="form-textarea block w-full transition duration-150 ease-in-out sm:text-lg sm:leading-5"></textarea>
                </div>
                <p class="mt-2 text-lg text-gray-600"></p>
              </div>
            </div>
            <div
              id="financialExperience"
              class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                for="financialExperience"
                class="block text-xl font-bold leading-5 text-black sm:mt-px sm:pt-2">
                Financial experience
                <p class="label-subheading">
                  What is your level of familiarity with accounting, including
                  financial statements and cash management?
                </p>
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div class="max-w-lg flex rounded-md shadow-sm">
                  <textarea
                    id="financialExperience"
                    name="financialExperience"
                    v-model="formData.financialExperience"
                    rows="6"
                    class="form-textarea block w-full transition duration-150 ease-in-out sm:text-lg sm:leading-5"></textarea>
                </div>
                <p class="mt-2 text-lg text-gray-600"></p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
          <div>
            <h3 class="text-3xl uppercase font-bold leading-6 text-gray-900">
              About your studio
            </h3>
            <p class="label-subheading">
              Tell us what you're dreaming of building.
            </p>
          </div>
          <div
            id="category"
            class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              for="category"
              class="block text-xl font-bold leading-5 text-black sm:mt-px sm:pt-2">
              Category
              <p
                class="mt-1 max-w-2xl text-lg leading-5 text-gray-600 font-normal">
                What will your studio’s
                <strong class="font-bold">primary</strong> activity be?
              </p>
            </label>
          </div>
          <div
            class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              for="concept"
              class="block text-xl font-bold leading-5 text-black sm:mt-px sm:pt-2">
              Concept
              <p class="label-subheading">
                Describe your studio concept, including business structures
                you’re interested in, size/scale and values. Why are you excited
                about your studio’s potential?
              </p>
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="max-w-lg flex rounded-md shadow-sm">
                <textarea
                  id="concept"
                  name="concept"
                  rows="6"
                  v-model="formData.concept"
                  class="form-textarea block w-full transition duration-150 ease-in-out sm:text-lg sm:leading-5"></textarea>
              </div>
              <p class="mt-2 text-lg text-gray-600"></p>
            </div>
          </div>

          <div
            class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              for="team"
              class="block text-xl font-bold leading-5 text-black sm:mt-px sm:pt-2">
              Team
              <p class="label-subheading">
                What will you be looking for in collaborators, co-op members, or
                talent if you intend to grow your team?
              </p>
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="max-w-lg flex rounded-md shadow-sm">
                <textarea
                  id="team"
                  name="team"
                  v-model="formData.team"
                  rows="6"
                  class="form-textarea block w-full transition duration-150 ease-in-out sm:text-lg sm:leading-5"></textarea>
              </div>
              <p class="mt-2 text-lg text-gray-600"></p>
            </div>
          </div>

          <div
            id="history"
            class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              for="history"
              class="block text-xl font-bold leading-5 text-black sm:mt-px sm:pt-2">
              Background
              <p class="label-subheading">
                If you have already incorporated or have been operating, tell us
                about your structure and history, including any fundraising
                experience and work done to date.
              </p>
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="max-w-lg flex rounded-md shadow-sm">
                <textarea
                  id="history"
                  name="history"
                  v-model="formData.history"
                  rows="6"
                  class="form-textarea block w-full transition duration-150 ease-in-out sm:text-lg sm:leading-5"></textarea>
              </div>
              <p class="mt-2 text-lg text-gray-600"></p>
            </div>
          </div>

          <div
            class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              for="project"
              class="block text-xl font-bold leading-5 text-black sm:mt-px sm:pt-2">
              Product/project
              <p class="label-subheading">
                Tell us about the first project (game, interactive digital media
                project, tool/technology, etc.) your studio will build.
              </p>
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="max-w-lg flex rounded-md shadow-sm">
                <textarea
                  id="project"
                  name="project"
                  v-model="formData.project"
                  rows="6"
                  class="form-textarea block w-full transition duration-150 ease-in-out sm:text-lg sm:leading-5"></textarea>
              </div>
              <p class="mt-2 text-lg text-gray-600"></p>
            </div>
          </div>
          <div
            id="financialModel"
            class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              for="financialModel"
              class="block text-xl font-bold leading-5 text-black sm:mt-px sm:pt-2">
              Financial sustainability
              <p class="label-subheading">
                Briefly, what are your initial ideas about how your studio will
                approach financial sustainability? Where will your revenue come
                from and how will you distribute it?
              </p>
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="max-w-lg flex rounded-md shadow-sm">
                <textarea
                  id="financialModel"
                  name="financialModel"
                  v-model="formData.financialModel"
                  rows="6"
                  class="form-textarea block w-full transition duration-150 ease-in-out sm:text-lg sm:leading-5"></textarea>
              </div>
              <p class="mt-2 text-lg text-gray-600"></p>
            </div>
          </div>
          <div
            id="socialImpact"
            class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              for="socialImpact"
              class="block text-xl font-bold leading-5 text-black sm:mt-px sm:pt-2">
              Social impact
              <p class="label-subheading">
                What is your interest in social impact, and how does that relate
                to your studio concept? How will your studio provide a benefit
                to society?
              </p>
              <p class="label-subheading">
                If you're unsure, please read our blog post,
                <nuxt-link
                  to="/a-brief-intro-to-making-your-indie-game-studio-impactful"
                  >A brief intro to making your indie game studio
                  impactful</nuxt-link
                >, and our
                <nuxt-link to="https://learn.weirdghosts.ca"
                  >Learn site</nuxt-link
                >!
              </p>
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="max-w-lg flex rounded-md shadow-sm">
                <textarea
                  id="socialImpact"
                  name="socialImpact"
                  v-model="formData.socialImpact"
                  rows="6"
                  class="form-textarea block w-full transition duration-150 ease-in-out sm:text-lg sm:leading-5"></textarea>
              </div>
              <p class="mt-2 text-lg text-gray-600"></p>
            </div>
          </div>
        </div>

        <div class="mt-8 pt-8 sm:mt-5 sm:pt-10">
          <div
            id="comments"
            class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              for="comments"
              class="block text-xl font-bold leading-5 text-black sm:mt-px sm:pt-2">
              Comments
              <p class="label-subheading">
                Anything else you'd like us to know?
              </p>
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="max-w-lg flex rounded-md shadow-sm">
                <textarea
                  id="comments"
                  name="comments"
                  v-model="formData.comments"
                  rows="6"
                  class="form-textarea block w-full transition duration-150 ease-in-out sm:text-lg sm:leading-5"></textarea>
              </div>
              <p class="mt-2 text-lg text-gray-600"></p>
            </div>
          </div>

          <div class="mt-6 sm:mt-5">
            <div class="sm:border-t sm:border-gray-200 sm:pt-5">
              <div role="group" aria-labelledby="label-email">
                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                  <div>
                    <div
                      class="text-xl leading-6 font-bold text-black sm:leading-5"
                      id="label-eligibility">
                      Eligibility affirmation
                    </div>
                  </div>
                  <div
                    class="mt-4 sm:mt-0 sm:col-span-2"
                    :class="{
                      'form-group--error bg-red-200 text-red-500 p-2':
                        !v$.formData.eligibility.sameAs,
                    }">
                    <div class="w-full">
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="eligibility"
                            name="eligibility"
                            type="checkbox"
                            @change="v$.formData.eligibility.$touch()"
                            v-model="formData.eligibility"
                            class="form-checkbox h-4 w-4 text-body transition duration-150 ease-in-out" />
                        </div>
                        <div class="ml-3 text-lg leading-5">
                          <label
                            for="eligibility"
                            required
                            class="font-medium text-gray-700"
                            >I meet all eligibility requirements</label
                          >
                        </div>
                      </div>
                      <div
                        class="bg-red-200 text-red-500 p-2 font-bold mt-2 text-base font-normal"
                        v-if="!v$.formData.eligibility.sameAs">
                        Please check this box to affirm you meet all of the
                        eligibility criteria listed below.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 border-gray-300 pt-5">
        <div class="flex justify-start">
          <span class="inline-flex shadow-sm">
            <button
              type="submit"
              class="inline-block w-full justify-center py-4 px-8 border border-transparent text-2xl leading-5 font-medium text-white bg-body hover:bg-primary focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Submit Application
            </button>
          </span>
        </div>
      </div>
    </form>
    <div class="container-inner mx-auto p-0 md:w-2/3 text-center" v-else>
      <div class="text-center text-4xl font-bold">Thank you!</div>
      <div class="p-3 text-center text-2xl">
        Your application has been received, and you should receive an email
        confirmation in a few minutes. If you have any follow-up questions or
        comments, please reach out to us at
        <a href="mailto:hello@weirdghosts.ca" class="font-bold underline"
          >hello@weirdghosts.ca</a
        >.
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { sameAs } from "@vuelidate/validators";

export default {
  setup(_, { root }) {
    const formSubmitted = ref(false);
    const formData = ref({
      eligibility: false, // initialize the eligibility property
    });
    const v$ = useVuelidate(
      {
        formData: {
          eligibility: { sameAs: sameAs(() => true) },
        },
      },
      formData // Pass formData instead of { eligibility }
    );

    // Watch the eligibility validation model and update formData accordingly
    watch(
      () => v$.formData.eligibility.$model,
      (newVal) => {
        formData.value.eligibility = newVal;
      }
    );
    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    };

    const handleSubmit = (e) => {
      fetch("/index.html", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/x-www-form-urlencoded",
        }),
        body: encode({
          "form-name": e.target.getAttribute("name"),
          ...formData.value,
        }),
      })
        .then((response) => {
          if (response.status == 200) {
            formSubmitted.value = true;
            // root.$scrollTo("body", 400);
          } else {
            console.log("there was an error: " + response.status);
          }
        })
        .catch((error) => {
          console.log("====================================");
          console.log(`error in submitting the form data:${error}`);
          console.log("====================================");
        });
    };

    return {
      formSubmitted,
      formData,
      v$,
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
