import Model from './Model.js'

/**
 * A class representing a language.
 * @prop {Date}   dateCreated
 * @prop {Date}   dateModified
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
   * Create a new Language object.
   * @param {Object} [data={}]
   */
  constructor(data = {}) {

    super()

    Object.assign(this, data)

    this.dateCreated  = this.dateCreated ? new Date(this.dateCreated) : new Date
    this.dateModified = this.dateModified ? new Date(this.dateModified) : new Date

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
