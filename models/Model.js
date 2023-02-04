/**
 * A base class for all the DLx database models.
 * @prop {String} dateCreated
 * @prop {String} dateModified
 */
export default class Model {

  /**
   * Create a new database model.
   * @param {Object} [data={}]
   */
  constructor(data = {}) {
    // NOTE: Do not use `Object.assign()` here.
    // Use it in the subclasses instead.
    // Otherwise subclass public field declarations
    // will overwrite the data on the Model object.
    this.dateCreated  = Model.getDate(data.dateCreated)
    this.dateModified = Model.getDate(data.dateModified)
  }

  /**
   * Get the data as a POJO.
   * @returns {Object}
   */
  get data() {
    return structuredClone(this)
  }

  /**
   * Use the `data` property for stringification.
   * @returns {Object}
   */
  toJSON() {
    return this.data
  }

  /**
   * Parse a date into an ISO date string.
   * @param {String|Date|undefined} date
   * @returns {String} Returns an ISO date string.
   */
  static getDate(date) {
    if (date instanceof String) return new Date(date)
    if (date instanceof Date) return date
    return new Date()
  }

}
