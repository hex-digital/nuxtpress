import WpMenuItem from '~/models/WordPress/WpMenuItem';

/**
 * Grabs the navigational menus once on serverside render, and stores them in here for use.
 */

/**
 * The mutation types available to this store module.
 * @type {Object<string>}
 */
const types = {
  SET_MENU: 'SET_MENU',
};

/**
 * A map that maps the keys from the vuex store to the names of menu locations in WordPress.
 * @type {Object<string>}
 */
const stateKeysToLocationName = {
  main: 'main',
};

export const state = () => ({
  main: [],
});

export const getters = {
  /**
   * Transform the menu states into WpMenuItem instances. We cannot store these straight on the store as Nuxt serialises
   * the store during server-side rendering, which means no functions on objects. Instead, we do it after via a getter.
   */
  mainItems: (state) => WpMenuItem.transformWpMenuItem(state.main),
};

export const actions = {
  async refreshAllNavMenus({ dispatch }) {
    const locations = Object.keys(stateKeysToLocationName);
    await Promise.all(locations.map((location) => dispatch('refreshNavMenu', { location })));
  },
  async refreshNavMenu({ commit }, { location }) {
    let menu;
    try {
      menu = await this.$wp
        .menu()
        .location(location)
        .get();
    } catch (e) {
      // @todo Log this somewhere
      return;
    }

    commit(types.SET_MENU, { location, menu });
  },
};

export const mutations = {
  [types.SET_MENU](state, { location, menu }) {
    state[location] = menu;
  },
};
