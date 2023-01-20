import Model from './Model.js'
import Permissions from './Permissions.js'

/**
 * A class representing a project.
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
  constructor(data = {}) {

    super()

    Object.assign(this, data)

    this.dateCreated  = this.dateCreated ? new Date(this.dateCreated) : new Date
    this.dateModified = this.dateModified ? new Date(this.dateModified) : new Date
    this.permissions  = new Permissions(this.permissions)

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
