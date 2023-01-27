import Model from './Model.js'

/**
 * A class representing a lexeme sense. Only certain core database properties are documented here. See the [DaFoDiL](https://github.com/digitallinguistics/data-format) specification for details about other properties.
 * @prop {Date}              dateCreated
 * @prop {Date}              dateModified
 * @prop {UUID}              id
 * @prop {DatabaseReference} lexeme
 */
export default class Sense extends Model {

  /**
   * The gloss for this sense.
   * @type {MultiLangString}
   */
  gloss = {}

  /**
   * Create a new Sense object.
   * @param {Object} [data={}]
   */
  constructor(data = {}) {

    super()

    Object.assign(this, data)

    this.dateCreated  = this.dateCreated ? new Date(this.dateCreated) : new Date
    this.dateModified = this.dateModified ? new Date(this.dateModified) : new Date

  }

  /**
   * Get the data as a POJO.
   * @returns {Object}
   */
  get data() {
    const data = structuredClone(this)
    delete data.lexeme // Avoid storing redundant data in the database.
    return data
  }

  /**
   * Get a core subset of the data for partial embedding and reference.
   * @returns {Object}
   */
  getReference() {
    return {
      gloss:  this.gloss,
      id:     this.id,
      lexeme: this.lexeme,
    }
  }

}
