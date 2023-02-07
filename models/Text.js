import Model from './Model.js'

/**
 * A class representing a linguistic text.
 */
export default class Text extends Model {

  /**
   * An array of Database References to Projects.
   */
  projects = []

  /**
   * @const
   * @readonly
   * @type {String}
   */
  type = `Text`

  /**
   * The utterances in the text.
   */
  utterances = []

  /**
   * Create a new Text.
   * @param {Object} [data={}]
   */
  constructor(data = {}) {
    super(data)
    Object.assign(this, data)
  }

}
