<template>
  <div class="flex justify-center mb-4 z-10 relative text-center text-gray-500">
    <button @click="openLegalStuff">Legal Notice & Privacy Policy</button>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    openLegalStuff: function (): void {
      store.commit("openLegalModal");
    }
  }
});
</script>
