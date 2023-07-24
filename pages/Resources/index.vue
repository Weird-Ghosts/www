<template>
  <ContentDoc v-slot="{ doc }">
    <ContentRenderer :value="doc" />
    <PageHeader />
    <ContentSlot name="default" />
  </ContentDoc>
</template>

<style>
/* Apply Tailwind CSS classes to style the table */
table {
  @apply w-full border-collapse;
}
thead {
  th {
    @apply bg-white uppercase;
  }
}
th,
td {
  @apply p-2 border border-body;
}

th {
  @apply bg-primary;
}

tr:nth-child(even) {
  @apply bg-gray-50;
}

tbody {
  a {
    @apply underline;
  }
}
</style>
