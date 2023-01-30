import Model from './Model.js'

/**
 * A class representing a lexeme sense.
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
   * Create a new Sense.
   * @param {Object} [data={}]
   */
  constructor(data = {}) {
    super(data)
    Object.assign(this, data)
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
