import { createStore } from 'vuex';

import coachesModule from './module/coaches/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
  },
  state() {
    return {
      userId: 'c3',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
