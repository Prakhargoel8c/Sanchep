import useJwt from '@/auth/jwt/useJwt';

export default {
  namespaced: true,
  state: { pendingWorkflows: [], workflows: [], pendingWorkflowApiStatus: 'idle', workflowApiStatus: 'idle' },
  getters: {},
  mutations: {
    setPendingWorkflows: (state, workflows) => (state.pendingWorkflows = workflows),
    setPendingWorkflowsStatus: (state, status) => (state.pendingWorkflowApiStatus = status),
    setWorkflows: (state, workflows) => (state.workflows = workflows),
    setWorkflowsStatus: (state, status) => (state.workflowApiStatus = status),
  },
  actions: {
    getPendingWorkflows({ commit }) {
      commit('setPendingWorkflowsStatus', 'pending');
      return useJwt.pendingSurveys().then(({ data }) => {
        commit('setPendingWorkflowsStatus', 'fulfilled');
        commit('setPendingWorkflows', data);
      });
    },
    getWorkflows({ commit }) {
      commit('setWorkflowsStatus', 'pending');
      return useJwt.surveys().then(({ data }) => {
        commit('setWorkflowsStatus', 'fulfilled');
        commit('setWorkflows', data);
      });
    },
  },
};
