/**
 * A class representing a bibliographic source.
 * @prop {Date}   dateCreated
 * @prop {Date}   dateModified
 * @prop {String} id
 */
export default class BibliographicSource {

  /**
   * @const
   * @readonly
   * @type {String}
   */
  type = `BibliographicSource`

  /**
   * Create a new BibliographicSource.
   * @param {Object} [data={}]
   */
  constructor(data = {}) {

    Object.assign(this, data)

    this.dateCreated  = this.dateCreated ? new Date(this.dateCreated) : new Date
    this.dateModified = this.dateModified ? new Date(this.dateModified) : new Date

  }

}
