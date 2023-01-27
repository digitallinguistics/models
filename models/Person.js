import Model from './Model.js'

/**
 * A class representing a person.
 * @prop {Date}   dateCreated
 * @prop {Date}   dateModified
 * @prop {String} familyName
 * @prop {String} givenName
 * @prop {String} id
 * @prop {String} initials
 */
export default class Person extends Model {

  /**
   * @const
   * @readonly
   * @type {String}
   */
  type = `Person`

  /**
   * Create a new Person.
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
      familyName: this.familyName,
      givenName:  this.givenName,
      id:         this.id,
      initials:   this.initials,
    }
  }

}
