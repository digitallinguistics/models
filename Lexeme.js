import Model from './Model.js'

/**
 * A class representing a lexeme.
 * @prop {Array<BibliographicReference>} bibliography
 * @prop {String}                        id
 * @prop {MultiLangString}               slot
 */
export default class Lexeme extends Model {

  /**
   * The forms for this lexeme.
   * @type {Array<Form>}
   */
  forms = []

  /**
   * A partially-embedded reference to the language that this lexeme is part of.
   * @prop {String} id - The ID for the language. (REQUIRED)
   */
  language = {}

  /**
   * Information about the lemma for this lexeme.
   * @prop {MultiOrthoTranscription} transcription
   */
  lemma = {
    transcription: {},
  }

  /**
   * Database references to projects that this language belongs to.
   * @type {Array<DatabaseReference>}
   */
  projects = []

  /**
   * The senses for this lexeme.
   * @type {Array<Sense>}
   */
  senses = []

  /**
   * @const
   * @readonly
   * @type {String}
   */
  type = `Lexeme`

  /**
   * Create a new Lexeme object.
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
      id:       this.id,
      language: this.language,
      lemma:    this.lemma,
    }
  }

}
