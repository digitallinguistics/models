import Model from './Model.js'

/**
 * A class representing a lexeme form.
 * @prop {Date}   dateCreated
 * @prop {Date}   dateModified
 * @prop {String} id
 */
export default class Form extends Model {

  /**
   * The transcription of this form.
   * @type {MultiOrthoTranscription}
   */
  transcription = {}

  /**
   * Create a new Form object.
   * @param {Object} [data={}]
   */
  constructor(data = {}) {

    super()

    Object.assign(this, data)

    this.dateCreated  = this.dateCreated ? new Date(this.dateCreated) : new Date
    this.dateModified = this.dateModified ? new Date(this.dateModified) : new Date

  }

}
