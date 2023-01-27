import Model from './Model.js'

/**
 * A class representing a note.
 * @prop {Date}                     dateCreated
 * @prop {Date}                     dateModified
 * @prop {Boolean}                  [private=true]
 * @prop {DatabaseReference:Person} [source]
 * @prop {String}                   text
 */
export default class Note extends Model {

  /**
   * Create a new Note object.
   * @param {Object} [data={}]
   */
  constructor(data = {}) {

    super()

    Object.assign(this, data)

    this.dateCreated  = this.dateCreated ? new Date(this.dateCreated) : new Date
    this.dateModified = this.dateModified ? new Date(this.dateModified) : new Date
    this.private    ??= true

  }

}
