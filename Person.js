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
export default class Person {

  type = `Person`

  /**
   * Create a new Person.
   * @param {Object} [data={}]
   */
  constructor(data = {}) {

    Object.assign(this, data)

    this.dateCreated  = new Date(this.dateCreated)
    this.dateModified = new Date(this.dateModified)

  }

  getReference() {
    return {
      abbreviation: this.abbreviation,
      familyName:   this.familyName,
      givenName:    this.givenName,
      id:           this.id,
    }
  }

}
