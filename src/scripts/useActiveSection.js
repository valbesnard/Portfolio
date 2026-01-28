class Section {
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

class ActiveSection {
  /**
   * Initializes the active section tracker with an IntersectionObserver.
   * 
   * Sets up an observer that monitors multiple sections and tracks their visibility ratios.
   * Uses 101 threshold points (0 to 1 in 0.01 increments) for precise visibility detection.
   * Automatically updates the 'active-content' class on the link associated with the 
   * section that has the highest visibility ratio on the viewport.
   * 
   * @constructor
   */
  constructor() {
    this.sections = [];

    // Observer avec threshold multiple pour plus de précision
    const thresholds = Array.from({length: 101}, (_, i) => i / 100);

    this.observer = new IntersectionObserver(
      (entries) => {
        // Mettre à jour chaque section avec son ratio
        entries.forEach(entry => {
          const sec = this.sections.find(s => s.section === entry.target);
          if (sec) {
            sec.visibleRatio = entry.intersectionRatio; // 0 à 1
          }
        });

        // Trouver la section avec le plus grand ratio
        let maxSection = null;
        let maxRatio = 0;
        this.sections.forEach(sec => {
          if (sec.visibleRatio > maxRatio) {
            maxRatio = sec.visibleRatio;
            maxSection = sec;
          }
        });

        // Mettre à jour le lien actif
        this.sections.forEach(sec => {
          if (sec.link) sec.link.classList.remove('active-content');
        });
        if (maxSection && maxSection.link) {
          maxSection.link.classList.add('active-content');
        }
      },
      {
        threshold: thresholds // permet d’avoir des updates fines
      }
    );
  }

  /**
   * Adds a new section to the sections list and observes it for visibility changes.
   * @param {string} id - The unique identifier for the section.
   * @returns {void}
   */
  addSection(id) {
    const newSection = new Section(id);
    newSection.visibleRatio = 0; // initialisation
    this.sections.push(newSection);
    if(newSection.section) this.observer.observe(newSection.section);
  }
}

const activeSection = new ActiveSection()

export default activeSection;