/**
 * A class representing a linguistic text.
 * @prop {Date} dateCreated
 * @prop {Date} dateModified
 */
export default class Text {

  /**
   * @const
   * @readonly
   * @type {String}
   */
  type = `Text`

  /**
   * Create a new Text.
   * @param {Object} [data={}]
   */
  constructor(data = {}) {

    Object.assign(this, data)

    this.dateCreated  = this.dateCreated ? new Date(this.dateCreated) : new Date
    this.dateModified = this.dateModified ? new Date(this.dateModified) : new Date

  }

}
