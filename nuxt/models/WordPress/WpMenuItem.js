export default class WpMenuItem {
  constructor(menuObject = {}) {
    this.id = menuObject.ID || null;
    this.menuOrder = menuObject.menu_order || null;
    this.postType = menuObject.post_type || null;
    this.menuItemParent = menuObject.menu_item_parent || null;
    this.object = menuObject.object || null;
    this.type = menuObject.type || null;
    this.typeLabel = menuObject.type_label || null;
    this.url = menuObject.url || null;
    this.title = menuObject.title || null;
    this.classes = menuObject.classes || [];
    this.xfn = menuObject.xfn || null;
    this.current = menuObject.current || false;
    this.current_item_ancestor = menuObject.current_item_ancestor || false;
    this.current_item_parent = menuObject.current_item_parent || false;
    this.isCurrent = menuObject.isCurrent || false;
    this.level = menuObject.level || 1;
    this.children = WpMenuItem.transformWpMenuItem(menuObject.children) || [];
  }

  getText() {
    return this.title;
  }

  getUrl() {
    return this.url;
  }

  getMenuOrder() {
    return this.menuOrder;
  }

  getChildren() {
    return this.children;
  }

  getLevel() {
    return this.level;
  }

  getClassString() {
    return this.classes.join(' ');
  }

  static transformWpMenuItem(rawMenu = null) {
    if (!rawMenu) return null;

    const rawMenuKeys = Object.keys(rawMenu);

    if (!rawMenuKeys.length) return null;

    return rawMenuKeys
      .map((rawMenuItemKey) => {
        const rawMenuItem = rawMenu[rawMenuItemKey];
        return new WpMenuItem(rawMenuItem);
      })
      .sort(WpMenuItem.orderedAgainst);
  }

  static orderedAgainst(wpMenuItemOne, wpMenuItemTwo) {
    const orderOne = wpMenuItemOne.getMenuOrder();
    const orderTwo = wpMenuItemTwo.getMenuOrder();

    if (orderOne > orderTwo) return 1;
    if (orderOne < orderTwo) return -1;
    return 0;
  }
}
