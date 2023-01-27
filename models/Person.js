import Model from './Model.js'

/**
 * A class representing a person.
 * @prop {String} abbreviation
 * @prop {Date}   dateCreated
 * @prop {Date}   dateModified
 * @prop {String} email
 * @prop {String} familyName
 * @prop {String} givenName
 * @prop {String} id
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
      id: this.id,
      ...this.abbreviation && { abbreviation: this.abbreviation },
      ...this.familyName && { familyName: this.familyName },
      ...this.givenName && { givenName: this.givenName },
    }
  }

}
