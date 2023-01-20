import Model from './Model.js'

/**
 * A class representing a lexeme sense.
 * @prop {Category} [baseCategory]
 * @prop {Category} [category]
 * @prop {Date}     dateCreated
 * @prop {Date}     dateModified
 * @prop {UUID}     id
 * @prop {Category} [inflectionClass]
 * @prop {Category} [semanticClass]
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

}