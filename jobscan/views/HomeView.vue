<template>
  <div>
    <MainContent></MainContent>
    <ContentButton></ContentButton>
    <ExampleTemplates></ExampleTemplates>
  </div>
</template>

<script>
import MainContent from "../components/MainContent.vue";
import ContentButton from "../components/ContentButton.vue";
import ExampleTemplates from "../components/ExampleTemplates.vue";

export default {
  data() {
    return {};
  },
  components: {
    MainContent,
    ContentButton,
    ExampleTemplates,
  },
};
</script>

<style></style>
