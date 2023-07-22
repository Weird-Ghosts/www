<template>
  <div class="full-list space-y-8" v-if="type !== 'toc'">
  {{questions}}
    <QuestionItem
      v-for="question in questions"
      :key="question.id"
      :question="question" />
  </div>
  <!-- <div class="toc-list" v-else-if="type == 'toc'">
    <QuestionToc
      v-for="question in questions"
      :key="question.id"
      :question="question" />
  </div> -->
</template>

<script>
export default {
  // props: ["questions", "type"],
  setup() {
    const questions = ref([]);

    useAsyncData("questions", async () => {
      const data = await queryContent("questions")
        .only(["title", "order", "slug"])
        .sortBy("order", "asc")
        .fetch();

      questions.value = data;
      
    });

    return {
      questions,
    };
  },
};
</script>

<style scoped="true"></style>
