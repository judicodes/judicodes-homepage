import { createStore } from "vuex";

export default createStore({
  state: {
    isLegalModalOpen: false
  },
  mutations: {
    openLegalModal(state) {
      state.isLegalModalOpen = true;
    },
    closeLegalModal(state) {
      state.isLegalModalOpen = false;
    }
  },
  actions: {},
  modules: {}
});
