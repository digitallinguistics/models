import Model from './Model.js'

/**
 * A class representing a lexeme form.
 * @prop {Date}                    dateCreated
 * @prop {Date}                    dateModified
 * @prop {UUID}                    id
 * @prop {DatabaseReference}       lexeme
 * @prop {MultiOrthoTranscription} transcription
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
      abstract:      this.abstract,
      id:            this.id,
      lexeme:        this.lexeme,
      reconstructed: this.reconstructed,
      transcription: this.transcription,
    }
  }

}
