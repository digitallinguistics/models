import Model from './Model.js'

/**
 * A class representing an app user.
 * @prop {Date}   dateCreated
 * @prop {Date}   dateModified
 * @prop {String} email
 * @prop {String} [familyName]
 * @prop {String} [givenName]
 * @prop {String} id
 * @prop {String} [initials]
 */
export default class User extends Model {

  /**
   * @const
   * @readonly
   * @type {String}
   */
  type = `User`

  /**
   * Create a new User object.
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
      email:      this.email,
      familyName: this.familyName,
      givenName:  this.givenName,
      id:         this.id,
    }
  }

}
