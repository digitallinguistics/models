/**
 * A class representing a set of permissions.
 */
export default class Permissions {

  /**
   * Users with the owner role.
   * @type {Array}
   */
  owners = []

  /**
   * Users with the editor role.
   * @type {Array}
   */
  editors = []

  /**
   * Users with the viewer role.
   * @type {Array}
   */
  viewers = []

  /**
   * Whether the item is publicly accessible.
   * @type {Boolean}
   */
  public = true

  /**
   * Create a new Permissions object.
   * @param {Object} [data={}]
   */
  constructor(data = {}) {
    Object.assign(this, data)
  }

}
