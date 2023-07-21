<template>
  <div class="text-xl sm:text-xl bg-white z-30 relative p-4 lg:p-12">
    <form
      v-if="!formSubmitted"
      id="application"
      name="cohort-1-application"
      v-on:submit.prevent="handleSubmit"
    >
      <input
        type="hidden"
        id="form-name"
        name="form-name"
        value="cohort-1-application"
      />
      <div>
        <h1
          class="uppercase text-2xl lg:text-4xl font-bold leading-tight lg:leading-normal"
        ></h1>

        <div>
          <div>
            <h3
              class="font-bold text-3xl leading-6 font-medium text-bold font-display uppercase"
            >
              About you
            </h3>
          </div>
          <div class="mt-6 sm:mt-5">
            <div
              class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
            >
              <label
                for="yourName"
                class="block text-xl font-bold leading-5 text-bold font-display sm:mt-px sm:pt-2"
              >
                Your name
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div class="max-w-lg flex rounded-md shadow-sm">
                  <input
                    id="yourName"
                    name="yourName"
                    v-model="formData.yourName"
                    class="flex-1 form-input block w-full min-w-0 rounded-md transition duration-150 ease-in-out sm:text-lg sm:leading-5"
                  />
                </div>
              </div>
            </div>
            <div
              class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
            >
              <label
                for="coapplicantName"
                class="block text-xl font-bold leading-5 text-bold font-display sm:mt-px sm:pt-2"
              >
                Co-founders' names
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div class="max-w-lg flex rounded-md shadow-sm">
                  <input
                    id="coapplicantName"
                    name="coapplicantName"
                    v-model="formData.coapplicantName"
                    class="flex-1 form-input block w-full min-w-0 rounded-md transition duration-150 ease-in-out sm:text-lg sm:leading-5"
                  />
                </div>
              </div>
            </div>

            <div
              class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
            >
              <label
                for="email"
                class="block text-xl font-bold leading-5 text-bold font-display sm:mt-px sm:pt-2"
              >
                Email address
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div class="max-w-lg rounded-md shadow-sm">
                  <input
                    id="email"
                    name="email"
                    v-model="formData.email"
                    type="email"
                    class="form-input block w-full transition duration-150 ease-in-out sm:text-lg sm:leading-5"
                  />
                </div>
              </div>
            </div>

            <div
              class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
            >
              <label
                for="locations"
                class="block text-xl font-bold leading-6 text-bold font-display sm:mt-px sm:pt-2"
              >
                Location(s)<br />
                <div class="text-lg font-normal text-gray-600">
                  City/province where you are now based
                </div>
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div class="max-w-lg flex rounded-md shadow-sm">
                  <input
                    id="locations"
                    name="locations"
                    v-model="formData.locations"
                    placeholder="Vancouver, BC and Winnipeg, MB"
                    class="flex-1 form-input block w-full min-w-0 rounded-md transition duration-150 ease-in-out sm:text-lg sm:leading-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
          <div>
            <h3 class="text-3xl uppercase font-bold leading-6 text-gray-900">
              About your studio
            </h3>
          </div>
          <div
            id="category"
            class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="category"
              class="block text-xl font-bold leading-5 text-bold font-display sm:mt-px sm:pt-2"
            >
              Category
              <p
                class="mt-1 max-w-2xl text-lg leading-5 text-gray-600 font-normal "
              >
                What will your studio’s
                <strong class="font-bold">primary</strong> activity be?
              </p>
            </label>
            <div class="mt-4 sm:col-span-2">
              <div
                class="flex align-top w-full self self-start items-start mt-4 "
                v-for="item in linesOfBusinessOptions"
                :key="item.id"
              >
                <input
                  :id="item.id"
                  name="category"
                  type="radio"
                  :value="item.name"
                  v-model="formData.category"
                  class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label :for="item.id" class="ml-3">
                  <span class="block text-lg leading-5 text-bold font-display">
                    <span class="font-bold text-bold font-display">
                      {{ item.name }}
                    </span>
                    <span class="block leading-7 text-gray-600">
                      {{ item.description }}
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="category"
              class="block text-xl font-bold leading-5 text-bold font-display sm:mt-px sm:pt-2"
            >
              Pitch deck
              <p
                class="mt-1 max-w-2xl text-lg leading-5 text-gray-600 font-normal "
              >
                One file only. There is no file size limit, but uploads time out
                after 30 seconds.
              </p>
            </label>

            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div
                class="max-w-lg flex justify-center px-6 pt-5 pb-6 rounded-md"
              >
                <div class="text-center">
                  <div class="flex text-sm text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span
                        class="px-6 py-2 bg-gray-600 text-white rounded-md font-display"
                        >Upload a file</span
                      >
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="team"
              class="block text-xl font-bold leading-5 text-bold font-display sm:mt-px sm:pt-2"
            >
              Team size
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="max-w-lg flex rounded-md shadow-sm">
                <input
                  id="team"
                  name="team"
                  v-model="formData.team"
                  type="text"
                  class="form-textarea block w-full transition duration-150 ease-in-out sm:text-lg sm:leading-5"
                />
              </div>
              <p class="mt-2 text-lg text-gray-600"></p>
            </div>
          </div>

          <div
            id="socialImpact"
            class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="socialImpact"
              class="block text-xl font-bold leading-5 text-bold font-display sm:mt-px sm:pt-2"
            >
              Social impact
              <p class="label-subheading">
                How will your studio provide a benefit to society?
              </p>
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="max-w-lg flex rounded-md shadow-sm">
                <textarea
                  id="socialImpact"
                  name="socialImpact"
                  v-model="formData.socialImpact"
                  rows="6"
                  class="form-textarea block w-full transition duration-150 ease-in-out sm:text-lg sm:leading-5"
                ></textarea>
              </div>
              <p class="mt-2 text-lg text-gray-600"></p>
            </div>
          </div>
        </div>

        <div class="mt-8 pt-8 sm:mt-5 sm:pt-10">
          <div
            id="comments"
            class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="comments"
              class="block text-xl font-bold leading-5 text-bold font-display sm:mt-px sm:pt-2"
            >
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
                  class="form-textarea block w-full transition duration-150 ease-in-out sm:text-lg sm:leading-5"
                ></textarea>
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
                      class="text-xl leading-6 font-bold text-bold font-display sm:leading-5"
                      id="label-eligibility"
                    >
                      Eligibility affirmation
                    </div>
                  </div>
                  <div
                    class="mt-4 sm:mt-0 sm:col-span-2"
                    :class="{
                      'form-group--error bg-red-200 text-red-500 p-2': !$v
                        .eligibility.sameAs,
                    }"
                  >
                    <div class="w-full">
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="eligibility"
                            name="eligibility"
                            type="checkbox"
                            @change="$v.eligibility.$touch()"
                            v-model="formData.eligibility"
                            v-model.trim="$v.eligibility.$model"
                            class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                          />
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
                        class="bg-red-200 text-red-500 p-2 font-bold mt-2 text-base leading-normal font-normal"
                        v-if="!$v.eligibility.sameAs"
                      >
                        Please check this box to affirm you are based in Canada
                        and that you are from a marginalized identity group.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8  border-gray-300 pt-5">
        <div class="flex justify-start">
          <span class=" inline-flex shadow-sm">
            <button
              type="submit"
              class="inline-block w-full justify-center py-4 px-8 border border-transparent text-2xl leading-5 font-medium  text-white bg-body hover:bg-bronze focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
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
import ArrowDown from "@/components/ArrowDown";
import { sameAs } from "vuelidate/lib/validators";

export default {
  components: {
    ArrowDown,
  },
  data() {
    return {
      eligibility: false,
      formSubmitted: false,
      formData: {},
      linesOfBusinessOptions: [
        {
          name: "Games and VR content",
          id: "videoGamesContent",
          description: "Video games and VR/AR/MR",
        },

        {
          name: "Other interactive digital media content",
          id: "otherContent",
          description: "Apps, ARGs, web experiences, live performance, etc.",
        },

        {
          name: "Technology development",
          id: "technology",
          description: "Tools, SaaS, platform, hardware, software",
        },
      ],
    };
  },
  validations: {
    eligibility: {
      sameAs: sameAs(() => true),
    },
  },
  watch: {
    $route(to, from) {
      this.formSubmitted = false;
    },
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/index.html", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/x-www-form-urlencoded",
        }),
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData,
        }),
      })
        .then((response) => {
          if (response.status == 200) {
            this.formSubmitted = true;
            this.$scrollTo("body", 400);

            // this.$scrollTo("body", 400, { offset: -220 });
            // scrollto #application here
          } else {
            console.log("there was an error: " + response.status);
          }
        })
        .catch((error) => {
          console.log("====================================");
          console.log(`error in submiting the form data:${error}`);
          console.log("====================================");
        });
    },
  },
};
</script>

<style lang="postcss">
.resources a {
  @apply text-base leading-normal underline cursor-pointer;
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
