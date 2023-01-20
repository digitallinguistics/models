import Model from './Model.js'

/**
 * A class representing a lexeme form.
 * @prop {Array<Allomorph>}              [allomorphs]
 * @prop {Array<DatabaseReference:Form>} [components]
 * @prop {Array<DatabaseReference:Form>} [componentOf]
 * @prop {Date}                          dateCreated
 * @prop {Date}                          dateModified
 * @prop {Array<DatabaseReference:Form>} [etymology]
 * @prop {UUID}                          id
 * @prop {MultiOrthoTranscription}       [UR]
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
