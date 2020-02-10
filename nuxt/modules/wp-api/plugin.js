import WPApi from 'wpapi';

/**
 * Routes
 */
import registerFrontPage from '~/modules/wp-api/routes/front-page';
import registerMenu from '~/modules/wp-api/routes/menu';
import registerSlug from '~/modules/wp-api/routes/slug';
import registerCPT from '~/modules/wp-api/routes/cpt';
import registerOptions from '~/modules/wp-api/routes/options';
import registerTaxonomy from '~/modules/wp-api/routes/taxonomy';

const wp = new WPApi(<%= serialize(options) %>);

export default (ctx, inject) => {
  /**
   * Add new method calls to the WPApi object, to access the new routes exposed by the Wuxt plugin.
   */
  registerFrontPage(wp);
  registerMenu(wp);
  registerSlug(wp);
  registerCPT(wp);
  registerOptions(wp);
  registerTaxonomy(wp);

  /**
   * Inject
   */
  inject('wp', wp);
};
