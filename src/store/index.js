import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import app from './app';
import appConfig from './app-config';
import verticalMenu from './vertical-menu';
import workflow from './workflow';
import uwesReport from './uwes-report';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    workflow,
    uwesReport,
  },
  strict: process.env.DEV,
});
