/**
 * A base class for all the DLx database models.
 */
export default class Model {

  /**
   * Get the data as a POJO.
   * @returns {Object}
   */
  get data() {
    return structuredClone(this)
  }

}
