export default {
  registerCoach(state, payload) {
    state.coaches = [...state.coaches, payload];
  },
};
