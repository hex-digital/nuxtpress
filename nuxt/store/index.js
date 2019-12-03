export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
    const initialisationActions = [dispatch('navMenus/refreshAllNavMenus')];

    await Promise.all(initialisationActions);
  },
};
