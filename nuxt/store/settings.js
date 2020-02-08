/**
 * Grabs the global settings from the Advanced Custom Fields settings.
 */

/**
 * The mutation types available to this store module.
 * @type {Object<string>}
 */
const types = {
  SET_SETTINGS: 'SET_SETTINGS',
};

export const state = () => ({
  settings: {},
});

export const actions = {
  async refreshAllSettings({ commit }) {
    let settings;
    try {
      settings = await this.$wp
        .options()
        .options()
        .get();
    } catch (e) {
      // @todo Log this somewhere
      return;
    }
    commit(types.SET_SETTINGS, { settings: settings.acf });
  },
};

export const mutations = {
  [types.SET_SETTINGS](state, { settings }) {
    state.settings = settings;
  },
};
