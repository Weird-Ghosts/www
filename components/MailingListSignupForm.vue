<template>
  <div class="flex w-full">
    <div id="mailing-list" class="signup w-full mx-auto md:mt-8">
      <p class="text-xl font-display font-bold mt-0">
        Join our mailing list to receive announcements and our newsletter!
      </p>

      <form
        action="https://weirdghosts.us5.list-manage.com/subscribe/post?u=400f118c2dee2a8da8090c928&amp;id=fafb3f76f3"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate flex"
        target="_blank"
        novalidate>
        <div class="mt-5 w-full">
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/2">
              <div class="mb-2 md:mr-2">
                <label for="mce-FNAME" class="sr-only">First Name</label>
                <div class="relative">
                  <input
                    type="text"
                    value=""
                    name="FNAME"
                    id="mce-FNAME"
                    class="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-body rounded-md font-display"
                    placeholder="First Name" />
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div class="mb-2">
                <label for="mce-LNAME" class="sr-only">Last Name</label>
                <div class="relative">
                  <input
                    type="text"
                    value=""
                    name="LNAME"
                    id="mce-LNAME"
                    class="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-body rounded-md font-display"
                    placeholder="Last Name" />
                </div>
              </div>
            </div>

            <div class="w-full md:w-1/2">
              <div class="mb-2 md:mr-2">
                <label for="mce-EMAIL" class="sr-only">Email</label>
                <div class="relative">
                  <input
                    type="email"
                    value=""
                    name="EMAIL"
                    id="mce-EMAIL"
                    class="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-body rounded-md font-display"
                    placeholder="E-mail address" />
                </div>
              </div>
            </div>
            <div class="mc-field-group w-full md:w-1/2">
              <div class="mb-2">
                <label
                  for="mce-TYPE"
                  class="block text-sm font-medium text-gray-700">
                </label>
                <select
                  name="TYPE"
                  class="block w-full pl-3 pr-10 py-2 text-base border-body focus:outline-none focus:ring-black focus:border-black sm:text-sm rounded-md text-black font-display"
                  id="mce-TYPE">
                  <option disabled selected value="">
                    What is your interest in Weird Ghosts?
                  </option>
                  <option value="Founder seeking funding">
                    Founder seeking funding
                  </option>
                  <option value="Funder/LP interested in supporting the fund">
                    Donating to or sponsoring the fund
                  </option>
                  <option value="General interest in the fund">
                    General interest in the fund
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div id="mce-responses" class="clear">
            <div
              class="response"
              id="mce-error-response"
              style="display: none"></div>
            <div
              class="response"
              id="mce-success-response"
              style="display: none"></div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px" aria-hidden="true">
            <input
              type="text"
              name="b_1dfb9be606afc767987be97b5_67d532ced7"
              tabindex="-1"
              value="" />
          </div>
          <span class="mt-2 w-full">
            <button
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent font-bold bg-white text-body hover:bg-gray-200 focus:outline-none focus:border-body focus:shadow-outline-indigo active:bg-body active:text-white transition ease-in-out duration-150 sm:w-auto text-lg md:text-2xl sm:leading-8 font-display">
              Submit
            </button>
          </span>
        </div>
        <div class="hidden">
          <input
            checked
            type="checkbox"
            value="2"
            name="group[24138][2]"
            id="mce-group[24138]-24138-1" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="postcss">
.signup {
  @apply p-10 text-primary border-none bg-body;
  input {
    @apply text-black;
  }
}
</style>
