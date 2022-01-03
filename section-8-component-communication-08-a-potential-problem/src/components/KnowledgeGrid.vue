<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      @select-topic="$emit('select-topic', $event)"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  // props: ['topics'],
  inject: ['topics'], // 'inject' access data `provide`d by any parent, not by children
  emits: ['select-topic'],
};
</script>