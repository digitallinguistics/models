import Model from './Model.js'

/**
 * A class representing a note.
 * @prop {Date}    dateCreated
 * @prop {Date}    dateModified
 * @prop {Boolean} [private=true]
 * @prop {String}  text
 */
export default class Note extends Model {

  /**
   * Create a new Note object.
   * @param {Object} [data={}]
   */
  constructor(data) {
    super(data)
    Object.assign(this, data)
    this.private ??= true
  }

}
