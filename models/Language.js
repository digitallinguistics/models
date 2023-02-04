import Model       from './Model.js'
import Permissions from './Permissions.js'

/**
 * A class representing a language.
 * @prop {String}      [defaultAnalysisLanguage]
 * @prop {String}      [defaultOrthography]
 * @prop {UUID}        id
 * @prop {Permissions} permissions
 */
export default class Language extends Model {

  /**
   * The name of the language.
   * @type {MultiLangString}
   */
  name = {}

  /**
   * Database references to projects that this language belongs to.
   * @type {Array<DatabaseReference>}
   */
  projects = []

  /**
   * @const
   * @readonly
   * @type {String}
   */
  type = `Language`

  /**
   * Create a new Language.
   * @param {Object} [data={}]
   */
  constructor(data = {}) {
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
      defaultAnalysisLanguage: this.defaultAnalysisLanguage,
      defaultOrthography:      this.defaultOrthography,
      id:                      this.id,
      name:                    this.name,
    }
  }

}
