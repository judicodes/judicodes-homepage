<template>
  <Dialog :open="isOpen" @close="closeModal">
    <DialogOverlay class="fixed inset-0 bg-black opacity-30" />

    <div
      class="
        fixed
        mx-auto
        mt-24
        inset-0
        z-10
        w-5/6
        md:w-1/2
        h-5/6
        shadow-xl
        rounded-xl
        overflow-y-auto
        dark:text-offwhite
        bg-lighttheme-light
        dark:bg-darktheme-dark
      "
    >
      <div class="mx-6 my-10">
        <Disclosure as="div" defaultOpen class="mb-8">
          <DisclosureButton class="styled-disclosure-button"> Legal Notice </DisclosureButton>
          <DisclosurePanel class="styled-disclosure-panel">
            Yes! You can purchase a license that you can share with your entire team.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" defaultOpen>
          <DisclosureButton class="styled-disclosure-button"> Privacy Policy </DisclosureButton>
          <DisclosurePanel class="styled-disclosure-panel">
            Yes! You can purchase a license that you can share with your entire team.
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </Dialog>
</template>

<script lang="ts">
import store from "@/store";
import { Dialog, DialogOverlay, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Dialog, DialogOverlay, Disclosure, DisclosureButton, DisclosurePanel },
  computed: {
    isOpen() {
      return store.state.isLegalModalOpen;
    }
  },
  methods: {
    closeModal: function (): void {
      store.commit("closeLegalModal");
    }
  }
});
</script>

<style scoped>
@layer utilities {
  .styled-disclosure-button {
    @apply flex justify-between w-full px-4 py-2 mb-2 bg-purple-100 rounded-lg hover:bg-purple-200;
  }

  .styled-disclosure-panel {
    @apply text-gray-500;
  }
}
</style>
