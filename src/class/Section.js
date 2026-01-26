export default class Section {
  /**
   * Creates an instance of the class and initializes section and link elements.
   * @param {string} id - The identifier used to select the section (by class) and link (by id) elements in the DOM.
   */
  constructor(id) {
    this.id = id;
    this.section = document.querySelector(`#${id}`);
    this.link = document.querySelector(`#${id}-link`);
  };

  /**
   * Calculates and returns the percentage of the section that is currently visible in the viewport.
   *
   * @returns {number} The percentage (0-100) of the section's visibility based on its intersection ratio.
   */
  getPercentageVisible() {
    const percentageVisible = this.section.IntersectionObserverEntry * 100;
    return percentageVisible;
  }

  /**
   * Returns the current link associated with this instance.
   *
   * @returns {string} The link value.
   */
  getLink() {
    return this.link;
  }

  /**
   * Retrieves the currently active section.
   * @returns {string|null} The active section identifier or null if no section is active.
   */
  getSection() {
    return this.section;
  }
}