import Model from './Model.js'

/**
 * A class representing a bibliographic source.
 * @prop {Object} csl
 * @prop {String} id
 */
export default class BibliographicSource extends Model {

  /**
   * Information for this bibliographic source in CSL JSON format.
   */
  csl = {}

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
    super(data)
    Object.assign(this, data)
  }

}
