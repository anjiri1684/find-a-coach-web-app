export default {
  registerCoach(state, payload) {
    state.coaches = [...state.coaches, payload];
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};
