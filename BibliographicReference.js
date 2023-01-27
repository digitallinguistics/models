/**
 * A class representing a bibliographic reference.
 * @prop {Date} dateCreated
 * @prop {Date} dateModified
 */
export default class BibliographicReference {

  /**
   * @const
   * @readonly
   * @type {String}
   */
  type = `BibliographicReference`

  /**
   * Create a new BibliographicReference.
   * @param {Object} [data={}]
   */
  constructor(data = {}) {

    Object.assign(this, data)

    this.dateCreated  = this.dateCreated ? new Date(this.dateCreated) : new Date
    this.dateModified = this.dateModified ? new Date(this.dateModified) : new Date

  }

}
