/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/theme.scss":
/*!*****************************!*\
  !*** ./src/scss/theme.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/aos.js":
/*!***********************!*\
  !*** ./src/js/aos.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
//
// aos.js
// Theme module
//



const options = {
  duration: 700,
  easing: 'ease-out-quad',
  once: true,
  startEvent: 'load',
};

aos__WEBPACK_IMPORTED_MODULE_0___default().init(options);

// Make available globally
window.AOS = (aos__WEBPACK_IMPORTED_MODULE_0___default());


/***/ }),

/***/ "./src/js/bigpicture.js":
/*!******************************!*\
  !*** ./src/js/bigpicture.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bigpicture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bigpicture */ "./node_modules/bigpicture/src/BigPicture.js");
//
// bigpicture.js
// Theme module



const toggles = document.querySelectorAll('[data-bigpicture]');

toggles.forEach(function (toggle) {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();

    const elementOptions = JSON.parse(toggle.dataset.bigpicture);

    const defaultOptions = {
      el: toggle,
      noLoader: true,
    };

    const options = {
      ...defaultOptions,
      ...elementOptions,
    };

    (0,bigpicture__WEBPACK_IMPORTED_MODULE_0__["default"])(options);
  });
});

// Make available globally
window.BigPicture = bigpicture__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ "./src/js/bootstrap.js":
/*!*****************************!*\
  !*** ./src/js/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");


// Make available globally
window.Alert = bootstrap__WEBPACK_IMPORTED_MODULE_0__.Alert;
window.Button = bootstrap__WEBPACK_IMPORTED_MODULE_0__.Button;
window.Carousel = bootstrap__WEBPACK_IMPORTED_MODULE_0__.Carousel;
window.Collapse = bootstrap__WEBPACK_IMPORTED_MODULE_0__.Collapse;
window.Dropdown = bootstrap__WEBPACK_IMPORTED_MODULE_0__.Dropdown;
window.Modal = bootstrap__WEBPACK_IMPORTED_MODULE_0__.Modal;
window.Offcanvas = bootstrap__WEBPACK_IMPORTED_MODULE_0__.Offcanvas;
window.Popover = bootstrap__WEBPACK_IMPORTED_MODULE_0__.Popover;
window.ScrollSpy = bootstrap__WEBPACK_IMPORTED_MODULE_0__.ScrollSpy;
window.Tab = bootstrap__WEBPACK_IMPORTED_MODULE_0__.Tab;
window.Toast = bootstrap__WEBPACK_IMPORTED_MODULE_0__.Toast;
window.Tooltip = bootstrap__WEBPACK_IMPORTED_MODULE_0__.Tooltip;


/***/ }),

/***/ "./src/js/choices.js":
/*!***************************!*\
  !*** ./src/js/choices.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);
//
// choices.js
// Theme module
//



const toggles = document.querySelectorAll('[data-choices]');

toggles.forEach((toggle) => {
  const elementOptions = toggle.dataset.choices ? JSON.parse(toggle.dataset.choices) : {};

  const defaultOptions = {
    shouldSort: false,
    searchEnabled: false,
    classNames: {
      containerInner: toggle.className,
      input: 'form-control',
      inputCloned: 'form-control-xs',
      listDropdown: 'dropdown-menu',
      itemChoice: 'dropdown-item',
      activeState: 'show',
      selectedState: 'active',
    },
  };

  const options = {
    ...elementOptions,
    ...defaultOptions,
  };

  new (choices_js__WEBPACK_IMPORTED_MODULE_0___default())(toggle, options);
});

// Make available globally
window.Choices = (choices_js__WEBPACK_IMPORTED_MODULE_0___default());


/***/ }),

/***/ "./src/js/countup.js":
/*!***************************!*\
  !*** ./src/js/countup.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var countup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! countup.js */ "./node_modules/countup.js/dist/countUp.min.js");
//
// countup.js
// Theme module
//



const toggles = document.querySelectorAll('[data-countup]');

function init(toggle) {
  const endVal = toggle.dataset.to ? +toggle.dataset.to : null;
  const options = toggle.dataset.countup ? JSON.parse(toggle.dataset.countup) : {};

  const countUp = new countup_js__WEBPACK_IMPORTED_MODULE_0__.CountUp(toggle, endVal, options);

  countUp.start();
}

toggles.forEach((toggle) => {
  if (toggle.getAttribute('data-aos-id') !== 'countup:in') {
    init(toggle);
  }
});

document.addEventListener('aos:in:countup:in', function (e) {
  const counts =
    e.detail instanceof Element
      ? [e.detail]
      : document.querySelectorAll('.aos-animate[data-aos-id="countup:in"]:not(.counted)');

  counts.forEach((count) => {
    init(count);
  });
});

// Make available globally
window.CountUp = countup_js__WEBPACK_IMPORTED_MODULE_0__.CountUp;


/***/ }),

/***/ "./src/js/dropzone.js":
/*!****************************!*\
  !*** ./src/js/dropzone.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_0__);
//
// dropzone.js
// Theme module
//



(dropzone__WEBPACK_IMPORTED_MODULE_0___default().autoDiscover) = false;
(dropzone__WEBPACK_IMPORTED_MODULE_0___default().thumbnailWidth) = null;
(dropzone__WEBPACK_IMPORTED_MODULE_0___default().thumbnailHeight) = null;

const toggles = document.querySelectorAll('[data-dropzone]');

toggles.forEach((toggle) => {
  let currentFile = undefined;

  const elementOptions = toggle.dataset.dropzone ? JSON.parse(toggle.dataset.dropzone) : {};

  const defaultOptions = {
    previewsContainer: toggle.querySelector('.dz-preview'),
    previewTemplate: toggle.querySelector('.dz-preview').innerHTML,
    init: function () {
      this.on('addedfile', function (file) {
        const maxFiles = elementOptions.maxFiles;

        if (maxFiles == 1 && currentFile) {
          this.removeFile(currentFile);
        }

        currentFile = file;
      });
    },
  };

  const options = {
    ...elementOptions,
    ...defaultOptions,
  };

  // Clear preview
  toggle.querySelector('.dz-preview').innerHTML = '';

  // Init dropzone
  new (dropzone__WEBPACK_IMPORTED_MODULE_0___default())(toggle, options);
});

// Make available globally
window.Dropzone = (dropzone__WEBPACK_IMPORTED_MODULE_0___default());


/***/ }),

/***/ "./src/js/flickity.js":
/*!****************************!*\
  !*** ./src/js/flickity.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_0__);


// Make available globally
window.Flickity = (flickity__WEBPACK_IMPORTED_MODULE_0___default());


/***/ }),

/***/ "./src/js/highlight.js":
/*!*****************************!*\
  !*** ./src/js/highlight.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/core */ "./node_modules/highlight.js/lib/core.js");
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/javascript */ "./node_modules/highlight.js/lib/languages/javascript.js");
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ "./node_modules/highlight.js/lib/languages/xml.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_2__);
//
// highlight.js
// Theme module
//





const highlights = document.querySelectorAll('.highlight');

// Only register the languages we need to reduce the download footprint
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().registerLanguage('xml', (highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_2___default()));
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().registerLanguage('javascript', (highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_1___default()));

highlights.forEach((highlight) => {
  highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().highlightBlock(highlight);
});

// Make available globally
window.hljs = (highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default());


/***/ }),

/***/ "./src/js/isotope.js":
/*!***************************!*\
  !*** ./src/js/isotope.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imagesloaded */ "./node_modules/imagesloaded/imagesloaded.js");
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isotope-layout */ "./node_modules/isotope-layout/js/isotope.js");
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_1__);
//
// isotope.js
// Theme module
//




const toggles = document.querySelectorAll('[data-isotope]');
const filters = document.querySelectorAll('[data-filter]');

toggles.forEach(function (toggle) {
  imagesloaded__WEBPACK_IMPORTED_MODULE_0___default()(toggle, function () {
    const options = JSON.parse(toggle.dataset.isotope);

    new (isotope_layout__WEBPACK_IMPORTED_MODULE_1___default())(toggle, options);
  });
});

filters.forEach(function (filter) {
  filter.addEventListener('click', function (e) {
    e.preventDefault();

    const cat = filter.dataset.filter;
    const target = filter.dataset.bsTarget;
    const instance = isotope_layout__WEBPACK_IMPORTED_MODULE_1___default().data(target);

    instance.arrange({
      filter: cat,
    });
  });
});

// Make available globally
window.Isotope = (isotope_layout__WEBPACK_IMPORTED_MODULE_1___default());
window.imagesLoaded = (imagesloaded__WEBPACK_IMPORTED_MODULE_0___default());


/***/ }),

/***/ "./src/js/jarallax.js":
/*!****************************!*\
  !*** ./src/js/jarallax.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jarallax */ "./node_modules/jarallax/dist/jarallax.esm.js");
//
// jarallax.js
// Theme module
//



const toggles = document.querySelectorAll('[data-jarallax], [data-jarallax-element]');

// Add Video extension
(0,jarallax__WEBPACK_IMPORTED_MODULE_0__.jarallaxVideo)();

// Add Element extension
(0,jarallax__WEBPACK_IMPORTED_MODULE_0__.jarallaxElement)();

// Init Jarallax
(0,jarallax__WEBPACK_IMPORTED_MODULE_0__.jarallax)(toggles);

// Make available globally
window.jarallax = jarallax__WEBPACK_IMPORTED_MODULE_0__.jarallax;
window.jarallaxElement = jarallax__WEBPACK_IMPORTED_MODULE_0__.jarallaxElement;
window.jarallaxVideo = jarallax__WEBPACK_IMPORTED_MODULE_0__.jarallaxVideo;


/***/ }),

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/***/ (() => {

//
// map.js
// Theme module
//

const maps = document.querySelectorAll('[data-map]');
const accessToken = 'pk.eyJ1IjoiZ29vZHRoZW1lcyIsImEiOiJjanU5eHR4N2cybDU5NGVwOHZwNGprb3E0In0.msdw9q16dh8v4azJXUdiXg';

maps.forEach((map) => {
  const elementOptions = map.dataset.map ? JSON.parse(map.dataset.map) : {};

  const defaultOptions = {
    container: map,
    style: 'mapbox://styles/mapbox/light-v9',
    scrollZoom: false,
    interactive: false,
  };

  const options = {
    ...defaultOptions,
    ...elementOptions,
  };

  // Get access token
  mapboxgl.accessToken = accessToken;

  // Init map
  new mapboxgl.Map(options);
});


/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ (() => {

//
// modal.js
// Theme module
//

const modals = document.querySelectorAll('.modal');

function overflowHide() {
  document.documentElement.style.overflowX = 'visible';
}

function overflowShow() {
  document.documentElement.style.overflowX = '';
}

modals.forEach((modal) => {
  modal.addEventListener('show.bs.modal', overflowHide);
  modal.addEventListener('hidden.bs.modal', overflowShow);
});


/***/ }),

/***/ "./src/js/navbar-dropdown.js":
/*!***********************************!*\
  !*** ./src/js/navbar-dropdown.js ***!
  \***********************************/
/***/ (() => {

//
// navbar-dropdown.js
// Theme module
//

// Selectors
const drops = document.querySelectorAll('.navbar-nav .dropdown, .navbar-nav .dropend');

// Events
const showEvents = ['mouseenter', 'focusin'];
const hideEvents = ['mouseleave', 'click', 'focusout'];

// Transition
const transitionDuration = 200;

// Breakpoint
const desktopSize = 992;

// Show drop
function showDrop(menu) {
  if (window.innerWidth < desktopSize) {
    return;
  }

  menu.classList.add('showing');

  setTimeout(function () {
    menu.classList.remove('showing');
    menu.classList.add('show');
  }, 1);
}

// Hide drop
function hideDrop(e, menu) {
  setTimeout(function () {
    if (window.innerWidth < desktopSize) {
      return;
    }

    if (!menu.classList.contains('show')) {
      return;
    }

    if (e.type === 'click' && e.target.closest('.dropdown-menu form')) {
      return;
    }

    menu.classList.add('showing');
    menu.classList.remove('show');

    setTimeout(function () {
      menu.classList.remove('showing');
    }, transitionDuration);
  }, 2);
}

drops.forEach(function (dropdown) {
  const menu = dropdown.querySelector('.dropdown-menu');

  // Show drop
  showEvents.forEach(function (event) {
    dropdown.addEventListener(event, function () {
      showDrop(menu);
    });
  });

  // Hide drop
  hideEvents.forEach(function (event) {
    dropdown.addEventListener(event, function (e) {
      hideDrop(e, menu);
    });
  });
});


/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/***/ (() => {

//
// navbar.js
// Theme module
//

const navbarTogglable = document.querySelectorAll('.navbar-togglable');
const navbarCollapse = document.querySelectorAll('.navbar-collapse');
const windowEvents = ['load', 'scroll'];

let isLight = false;

function makeNavbarDark(navbar) {
  navbar.classList.remove('navbar-light');
  navbar.classList.remove('bg-white');
  navbar.classList.add('navbar-dark');

  isLight = false;
}

function makeNavbarLight(navbar) {
  navbar.classList.remove('navbar-dark');
  navbar.classList.add('navbar-light');
  navbar.classList.add('bg-white');

  isLight = true;
}

function toggleNavbar(navbar) {
  const scrollTop = window.pageYOffset;

  if (scrollTop && !isLight) {
    makeNavbarLight(navbar);
  }

  if (!scrollTop) {
    makeNavbarDark(navbar);
  }
}

function overflowHide() {
  const scrollbarWidth = getScrollbarWidth();

  document.documentElement.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollbarWidth + 'px';
}

function overflowShow() {
  document.documentElement.style.overflow = '';
  document.body.style.paddingRight = '';
}

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

navbarTogglable.forEach(function(navbar) {
  windowEvents.forEach(function(event) {
    window.addEventListener(event, function() {
      toggleNavbar(navbar);
    });
  });
});

navbarCollapse.forEach(function(collapse) {
  collapse.addEventListener('show.bs.collapse', function() {
    overflowHide();
  });

  collapse.addEventListener('hidden.bs.collapse', function() {
    overflowShow();
  });
});


/***/ }),

/***/ "./src/js/popover.js":
/*!***************************!*\
  !*** ./src/js/popover.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
//
// popover.js
// Theme module
//



const popovers = document.querySelectorAll('[data-bs-toggle="popover"]');

popovers.forEach(popover => {
  new bootstrap__WEBPACK_IMPORTED_MODULE_0__.Popover(popover);
});

/***/ }),

/***/ "./src/js/pricing.js":
/*!***************************!*\
  !*** ./src/js/pricing.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var countup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! countup.js */ "./node_modules/countup.js/dist/countUp.min.js");
//
// pricing.js
// Theme module
//



const toggles = document.querySelectorAll('[data-toggle="price"]');
const DURATION = 1;

toggles.forEach(toggle => {
  toggle.addEventListener('change', (e) => {
    const input = e.target;
    const isChecked = input.checked;

    const target = input.dataset.target;
    const targets = document.querySelectorAll(target);

    targets.forEach(target => {
      const annual = target.dataset.annual;
      const monthly = target.dataset.monthly;
      const options = target.dataset.options ? JSON.parse(target.dataset.options) : {};

      options.startVal = isChecked ? annual : monthly;
      options.duration = options.duration ? options.duration : DURATION;

      const countUp = isChecked ? new countup_js__WEBPACK_IMPORTED_MODULE_0__.CountUp(target, monthly, options) : new countup_js__WEBPACK_IMPORTED_MODULE_0__.CountUp(target, annual, options);

      countUp.start();
    });
  });
});


/***/ }),

/***/ "./src/js/quill.js":
/*!*************************!*\
  !*** ./src/js/quill.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_0__);
//
// quill.js
// Theme module
//



const toggles = document.querySelectorAll('[data-quill]');

toggles.forEach((toggle) => {
  const elementOptions = toggle.dataset.quill ? JSON.parse(toggle.dataset.quill) : {};

  const defaultOptions = {
    modules: {
      toolbar: [
        ['bold', 'italic'],
        ['link', 'blockquote', 'code', 'image'],
        [
          {
            list: 'ordered',
          },
          {
            list: 'bullet',
          },
        ],
      ],
    },
    theme: 'snow',
  };

  const options = {
    ...defaultOptions,
    ...elementOptions,
  };

  new (quill__WEBPACK_IMPORTED_MODULE_0___default())(toggle, options);
});

// Make available globally
window.Quill = (quill__WEBPACK_IMPORTED_MODULE_0___default());


/***/ }),

/***/ "./src/js/smooth-scroll.js":
/*!*********************************!*\
  !*** ./src/js/smooth-scroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smooth-scroll */ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smooth_scroll__WEBPACK_IMPORTED_MODULE_0__);
//
// smooth-scroll.js
// Theme module
//



const toggle = '[data-scroll]';
const header = '.navbar.fixed-top';
const offset = 24;

const options = {
  header: header,
  offset: function (anchor, toggle) {
    return toggle.dataset.scroll && JSON.parse(toggle.dataset.scroll).offset !== undefined
      ? JSON.parse(toggle.dataset.scroll).offset
      : offset;
  },
};

new (smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default())(toggle, options);

// Make available globally
window.SmoothScroll = (smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default());


/***/ }),

/***/ "./src/js/theme.js":
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flickity_imagesloaded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flickity-imagesloaded */ "./node_modules/flickity-imagesloaded/flickity-imagesloaded.js");
/* harmony import */ var flickity_imagesloaded__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flickity_imagesloaded__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flickity_as_nav_for__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flickity-as-nav-for */ "./node_modules/flickity-as-nav-for/as-nav-for.js");
/* harmony import */ var flickity_as_nav_for__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flickity_as_nav_for__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flickity_fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flickity-fade */ "./node_modules/flickity-fade/flickity-fade.js");
/* harmony import */ var flickity_fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flickity_fade__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jarallax */ "./node_modules/jarallax/dist/jarallax.esm.js");
/* harmony import */ var _aos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aos */ "./src/js/aos.js");
/* harmony import */ var _bigpicture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bigpicture */ "./src/js/bigpicture.js");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bootstrap */ "./src/js/bootstrap.js");
/* harmony import */ var _choices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./choices */ "./src/js/choices.js");
/* harmony import */ var _countup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./countup */ "./src/js/countup.js");
/* harmony import */ var _dropzone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dropzone */ "./src/js/dropzone.js");
/* harmony import */ var _flickity__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./flickity */ "./src/js/flickity.js");
/* harmony import */ var _highlight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./highlight */ "./src/js/highlight.js");
/* harmony import */ var _isotope__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./isotope */ "./src/js/isotope.js");
/* harmony import */ var _jarallax__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./jarallax */ "./src/js/jarallax.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./map */ "./src/js/map.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_map__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modal */ "./src/js/modal.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_modal__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _navbar_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navbar-dropdown */ "./src/js/navbar-dropdown.js");
/* harmony import */ var _navbar_dropdown__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_navbar_dropdown__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./navbar */ "./src/js/navbar.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_navbar__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./popover */ "./src/js/popover.js");
/* harmony import */ var _pricing__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pricing */ "./src/js/pricing.js");
/* harmony import */ var _quill__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./quill */ "./src/js/quill.js");
/* harmony import */ var _smooth_scroll__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./smooth-scroll */ "./src/js/smooth-scroll.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tooltip */ "./src/js/tooltip.js");
/* harmony import */ var _typed__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./typed */ "./src/js/typed.js");
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user.js */ "./src/js/user.js");
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_user_js__WEBPACK_IMPORTED_MODULE_26__);
// Vendor







// Theme




















// User



/***/ }),

/***/ "./src/js/tooltip.js":
/*!***************************!*\
  !*** ./src/js/tooltip.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
//
// tooltip.js
// Theme module
//



const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');

tooltips.forEach((tooltip) => {
  new bootstrap__WEBPACK_IMPORTED_MODULE_0__.Tooltip(tooltip);
});


/***/ }),

/***/ "./src/js/typed.js":
/*!*************************!*\
  !*** ./src/js/typed.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_0__);
//
// typed.js
// Theme module
//



const toggles = document.querySelectorAll('[data-typed]');

toggles.forEach((toggle) => {
  const elementOptions = toggle.dataset.typed ? JSON.parse(toggle.dataset.typed) : {};

  const defaultOptions = {
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1000,
    loop: true,
  };

  const options = {
    ...defaultOptions,
    ...elementOptions,
  };

  new (typed_js__WEBPACK_IMPORTED_MODULE_0___default())(toggle, options);
});

// Make available globally
window.Typed = (typed_js__WEBPACK_IMPORTED_MODULE_0___default());


/***/ }),

/***/ "./src/js/user.js":
/*!************************!*\
  !*** ./src/js/user.js ***!
  \************************/
/***/ (() => {

// 
// user.js
// Use this to write your custom JS
//

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"theme": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkevidently"] = self["webpackChunkevidently"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/theme.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/scss/theme.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=theme.bundle.js.map