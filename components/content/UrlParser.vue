// components/UrlParser.vue
<template>
  <div>
    <div v-for="(label, key) in labels" :key="key">
      <p>
        <span class="font-bold">{{ label }}:</span> {{ params[key] }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue"; // Import reactive and onMounted
import dayjs from "dayjs"; // Import dayjs

const labels = {
  invitee_full_name: "Your Name",
  answer_1: "Studio Name",
  assigned_to: "Meeting With",
  event_start_time: "Date & Time",
  event_type_name: "Type",
  invitee_email: "Your Email",
};

const params = reactive({});

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  Object.keys(labels).forEach((key) => {
    let value = decodeURIComponent(urlParams.get(key)); // Use let instead of const
    if (key === "assigned_to") {
      value = value.replace(/,/g, ", ");
    }
    if (key === "event_start_time") {
      value = dayjs(value).format("MMMM D, h:mm A");
    }
    params[key] = value; // Assign the value to the params object
  });
});
</script>
