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
  },
  {
    name: 'State management',
    path: '/counter-4',
    component: () => import("./demo4/DemoCounter.vue"),
  }
];
