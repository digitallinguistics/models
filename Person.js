import Model from './Model.js'

/**
 * A class representing a Person.
 * @prop {String}   abbreviation
 * @prop {Date}     dateCreated
 * @prop {Date}     dateModified
 * @prop {String}   email
 * @prop {String}   familyName
 * @prop {String}   givenName
 * @prop {String}   id
 * @prop {'Person'} type
 */
export default class Person extends Model {

  type = `Person`

  /**
   * Create a new Person.
   * @param {Object} [data={}]
   */
  constructor(data = {}) {

    super()

    Object.assign(this, data)

    this.dateCreated  = new Date(this.dateCreated)
    this.dateModified = new Date(this.dateModified)

  }

  /**
   * Get a core subset of the data for partial embedding and reference.
   * @returns {Object}
   */
  getReference() {
    return {
      abbreviation: this.abbreviation,
      familyName:   this.familyName,
      givenName:    this.givenName,
      id:           this.id,
    }
  }

}
