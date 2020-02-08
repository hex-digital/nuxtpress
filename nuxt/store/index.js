export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
    const initialisationActions = [
      dispatch('navMenus/refreshAllNavMenus'),
      dispatch('settings/refreshAllSettings'),
    ];
    await Promise.all(initialisationActions);
  },
};
