/**
 * This mixin is a solution to complex components that require adding styles to slotted children (can't add classes)
 * that use javascript variables in the values.
 *
 * To use:
 * - Extend this mixin
 * - Implement the `configVariables` computed property, and the `configStyles` method
 * - Add `:data-identifier="configIdentifier"` to the root element
 *
 * Now, when the component renders, or any of the variables in configVariables change, the component will be
 * able to produce a stylesheet, add it to a <style> tag and append it to the head.
 *
 * What's more, the combination of properties defined in configVariables allows us to uniquely identify this style tag,
 * such that it will only ever create the same style tag once for the desired configuration. The component will only be
 * targetable by the style tag when in that particular component too, due to it targeting the specific data (not a class).
 */
export const stylesFromComponentConfig = {
  computed: {
    /**
     * This method must be implemented.
     * It should return a string containing the values of all the variables that are used in the `configStyles` method.
     * e.g. return `${this.space}${this.intrinsic}`;
     * It is used to create a string to uniquely identify the current, specific configuration of the component.
     * If a null value is returned, no styles will be outputted later.
     * @returns {string|null}
     */
    configVariables() {
      return null;
    },
    /**
     * Creates a string that should uniquely identify a particular configuration of the component, by referencing the
     * name of the component, and all of the variables used in the desired stylesheet.
     * @returns {string}
     */
    configIdentifier() {
      return `${this.$options.name}-${this.configVariables}`;
    },
  },
  beforeMount() {
    this.createStylesForConfig();
  },
  updated() {
    // @todo Is using updated correct? Or should this simply be a watcher for each of the props used in the styles
    // If a watcher, then could we just watch configVariables() for changes?
    this.createStylesForConfig();
  },
  methods: {
    /**
     * This method must be implemented.
     * It receives a string that can be used as a selector in css to target this specific configuration of the component.
     * It should return null, or a string of css suitable for adding inside of a style tag.
     * If this returns null, no stylesheet will be outputted for this configuration.
     * @param selector A CSS selector that will target this component when in a particular configuration.
     * @returns {string|null}
     */
    configStyles(selector) {
      return null;
    },
    /**
     * For the specific configuration of this component (created using this.configVariables), take the styles defined
     * in this.configStyles and put them inside a style tag.
     * This style tag will be uniquely identified for this particular configuration of variable values. If it already
     * exists, it will not create another one.
     * If it doesn't exist already, then the style tag is appended to the end of the page's <head> element.
     * This allows complex, per-component styles to be created.
     */
    createStylesForConfig() {
      if (typeof this.configStyles !== 'function') return;
      if (!this.configVariables || !this.configVariables.length) return;
      if (document.getElementById(this.configIdentifier)) return;

      const styleHtml = this.configStyles(`[data-identifier="${this.configIdentifier}"]`);
      if (styleHtml === null) return;

      document.head.innerHTML += `<style id="${this.configIdentifier}">${styleHtml}</style>`
        .replace(/\s\s+/g, ' ')
        .trim();
    },
  },
};
