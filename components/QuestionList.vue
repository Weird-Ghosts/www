<template>
  <div class="full-list space-y-8" v-if="type !== 'toc'">
    <QuestionItem
      v-for="question in $static.allQuestion.edges"
      :key="question.node.id"
      :question="question.node"
    />
  </div>
  <div class="toc-list" v-else-if="type == 'toc'">
    <QuestionToc
      v-for="question in $static.allQuestion.edges"
      :key="question.node.id"
      :question="question.node"
    />
  </div>
</template>
<static-query>
query {
  allQuestion(sortBy: "order", order: ASC) {
    edges {
      node {
        title
        content
        order
        slug
      }
    }
  }
}
</static-query>
<script>
import QuestionItem from "./QuestionItem";
import QuestionToc from "./QuestionToc";

export default {
  props: ["questions", "type"],
  components: {
    QuestionItem,
    QuestionToc,
  },
};
</script>

<style scoped="true"></style>
