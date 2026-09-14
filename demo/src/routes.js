export default [
  {
    name: 'Couter Base',
    path: '/counter-0',
    component: () => import('./demo0/DemoCounter.vue'),
  },
  {
    name: 'Couter Extra',
    path: '/counter-1',
    component: () => import('./demo0/DemoCounter.vue'),
  }
];
