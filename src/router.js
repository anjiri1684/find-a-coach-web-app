import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesDetails from './pages/coaches/CoachesDetails.vue';
import ContactCoach from './pages/reaquests/ContactCoach.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import RequestReceived from './pages/reaquests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches',
    },
    {
      path: '/coaches',
      name: 'CoachesList',
      component: CoachesList,
    },
    {
      path: '/coaches/:id',
      name: 'CoachesDetails',
      component: CoachesDetails,
      props: true,
      children: [
        {
          path: 'contact',
          name: 'ContactCoach',
          component: ContactCoach,
        },
      ],
    },
    {
      path: '/register',
      name: 'CoachRegistration',
      component: CoachRegistration,
    },
    {
      path: '/requests',
      name: 'RequestReceived',
      component: RequestReceived,
    },
    {
      path: '/:notFound(.*)',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});

export default router;
