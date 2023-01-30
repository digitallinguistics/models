import Model from './Model.js'

/**
 * A class representing an app user.
 * @prop {String} email
 * @prop {String} [familyName]
 * @prop {String} [givenName]
 * @prop {String} id
 */
export default class User extends Model {

  /**
   * @const
   * @readonly
   * @type {String}
   */
  type = `User`

  /**
   * Create a new Person.
   * @param {Object} [data={}]
   */
  constructor(data = {}) {
    super(data)
    Object.assign(this, data)
  }

  /**
   * Get a core subset of the data for partial embedding and reference.
   * @returns {Object}
   */
  getReference() {
    return {
      email:      this.email,
      familyName: this.familyName,
      givenName:  this.givenName,
      id:         this.id,
    }
  }

}
