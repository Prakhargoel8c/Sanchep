import Vue from 'vue';
import VueRouter from 'vue-router';
import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils';
import { canNavigate } from '@/libs/acl/routeProtection';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {},
    },
    {
      path: '/login',
      name: 'auth-login-v2',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
        resource: 'Auth',
        redirectIfLoggedIn: true,
      },
    },
    {
      path: '/signup',
      name: 'auth-register-v2',
      component: () => import('@/views/Register-v2.vue'),
      meta: {
        layout: 'full',
        resource: 'Auth',
        redirectIfLoggedIn: true,
      },
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('@/views/ForgotPassword.vue'),
      meta: {
        layout: 'full',
        resource: 'Auth',
        redirectIfLoggedIn: true,
      },
    },
    {
      path: '/reset-password/:token',
      name: 'reset-password',
      props: (route) => ({
        token: route.params.token,
      }),
      component: () => import('@/views/ResetPassword.vue'),
      meta: {
        layout: 'full',
        resource: 'Auth',
        redirectIfLoggedIn: true,
      },
    },
    {
      path: '/new-account/:token',
      name: 'new-account',
      props: (route) => ({
        token: route.params.token,
      }),
      component: () => import('@/views/CompleteSignUp.vue'),
      meta: {
        layout: 'full',
        resource: 'Auth',
        redirectIfLoggedIn: true,
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/account-setting/AccountSetting.vue'),
      meta: {},
    },
    {
      path: '/upload-passage',
      name: 'upload-passage',
      component: () => import('@/views/UploadPassage.vue'),
      meta: {},
    },
    {
      path: '*',
      redirect: 'error-404',
      resource: 'Auth',
      action: 'read',
    },
  ],
});

router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn();

  if (!canNavigate(to)) {
    // Redirect to login if not logged in
    if (!isLoggedIn) return next({ name: 'auth-login-v2' });
  }

  // Redirect if logged in
  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    next('/');
  }

  return next();
});

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg');
  if (appLoading) {
    appLoading.style.display = 'none';
  }
});

export default router;
