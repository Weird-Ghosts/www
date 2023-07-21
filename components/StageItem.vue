<template>
  <div class="flex flex-col">
    <h4 class="text-lg md:text-2xl  font-bold faxGray mb-4">
      {{ stage.stage }}
    </h4>
    <p class="mb-4 lg:m-0 lg:mb-0 text-xl ">
      {{ stage.text }}
    </p>
    <p class="my-4 lg:mb-0 text-lg" v-if="stage.program && stage.programLink">
      Learn more about
      <NuxtLink :to="stage.programLink">{{ stage.program }}</NuxtLink>
    </p>
    <p class="mt-auto lg:mb-0 text-lg font-mono ">Amount: {{ stage.amount }}</p>
  </div>
</template>

<script>
export default {
  props: ["stage"],
};
</script>

<style></style>
features: [
        {
          stage: "Concept",
          program: "Baby Ghosts",
          programLink: "/baby-ghosts",
          text:
            "Grants for new teams that need to stabilize studio operations and impact strategy. Prepares teams for further investment and product development. ",
          image: [],
          amount: "Grants of $20,000",
        },
        {
          stage: "Early",
          program: "",
          programLink: "",
          text:
            "Shared-earnings investments into experienced teams with a new project in any stage of development. Allows key personnel to focus full time on studio development. ",
          image: [],
          amount: "Investment up to $150,000",
        },
        {
          stage: "Growth",
          program: "",
          programLink: "",
          text:
            "Loans for established teams with a product close to completion, lowering barriers to last-mile production financing.",
          image: [],
          amount: "Varies",
        },