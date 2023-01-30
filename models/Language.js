import Model from './Model.js'

/**
 * A class representing a language.
 * @prop {String} [defaultAnalysisLanguage]
 * @prop {String} [defaultOrthography]
 * @prop {UUID}   id
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
