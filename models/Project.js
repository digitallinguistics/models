import Model       from './Model.js'
import Permissions from './Permissions.js'

/**
 * A class representing a project.
 * @prop {String} id
 */
export default class Project extends Model {

  /**
   * The name of the project.
   * @type {MultiLangString}
   */
  name = {}

  /**
   * @const
   * @readonly
   * @type {String}
   */
  type = `Project`

  /**
   * Create a new Project object.
   * @param {Object} [data={}]
   */
  constructor(data) {
    super(data)
    Object.assign(this, data)
    this.permissions = new Permissions(this.permissions)
  }

  /**
   * Get a core subset of the data for partial embedding and reference.
   * @returns {Object}
   */
  getReference() {
    return {
      id:   this.id,
      name: this.name,
    }
  }

}
