import { createStore } from 'vuex';

import coachesModule from './module/coaches/index.js';
import requestsModule from './module/requests/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },
  state() {
    return {
      userId: 'c1',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
