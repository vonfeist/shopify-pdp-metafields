class HeaderExploded extends HTMLElement {
  constructor() {
    super();
    this.headerExploded = this.querySelector('.header-exploded');
    this.headerDescription = this.querySelector('.header__text');
    this.header = document.querySelector('.header');
    this.headerIcons = document.querySelector('.header__icons');
    this.headerHeight = this.header.offsetHeight;
    console.log('this.hederHeight', this.headerHeight)

    window.addEventListener('scroll', this.scrollDocument.bind(this));
  }

  scrollDocument() {
    var distanceToTop = window.pageYOffset + this.header.getBoundingClientRect().top;
    var elementHeight = this.headerExploded.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;
    let opacity = 0;

    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      this.headerExploded.classList.add('condensed');
      this.header.classList.add('condensed');
    } else {
      this.headerExploded.classList.remove('condensed');
      this.header.classList.remove('condensed');
    }

    if (scrollTop > distanceToTop) {
      opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
    }
  }

}

customElements.define('header-exploded', HeaderExploded);
