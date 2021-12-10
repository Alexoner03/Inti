import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name:'index',
    component: () => import('pages/Index.vue'),
  },
  {
    path: '/selector',
    name: 'selector',
    component: () => import('pages/Selector.vue'),
  },
  {
    path: '/saldo',
    name: 'saldo',
    component: () => import('pages/Saldo.vue'),
  },
  {
    path: '/tipos',
    name: 'tipos',
    component: () => import('pages/Tipos.vue'),
  },
  {
    path: '/loading',
    name: 'load',
    component: () => import('pages/Loading.vue'),
  },
  {
    path: '/final',
    name: 'final',
    component: () => import('pages/Final.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
