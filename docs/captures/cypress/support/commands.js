import { screenshortDefaultPadding } from "./const"
import { extraStyle } from "./extraStyle"

Cypress.Screenshot.defaults({
  overwrite: true,
  padding: screenshortDefaultPadding,
  onBeforeScreenshot: function ($el) {
    if ($el && $el[0] && $el[0].scrollIntoView) {
      $el[0].scrollIntoView()
    }
    console.log($el)

    const domEl = $el.first()[0]
    let hoverEL = domEl.ownerDocument.querySelector(".is-----active-hover");
    for (; hoverEL && hoverEL !== document; hoverEL = hoverEL.parentElement) {
      hoverEL.classList.add("hover")
    }
  },
  onAfterScreenshot: function ($el) {
    if ($el && $el[0] && $el[0].scrollIntoView) {
      $el[0].scrollIntoView()
    }
    console.log($el)

    const domEl = $el.first()[0]
    let hoverEL = domEl.ownerDocument.querySelector(".is-----active-hover");
    for (; hoverEL && hoverEL !== document; hoverEL = hoverEL.parentElement) {
      hoverEL.classList.remove("hover")
    }
  }
})

const addExtraStyle = function () {
  cy.get('body').then($body => {
    var extraStyleEl = $body[0].querySelector("#extra-style")

    if (!extraStyleEl) {
      extraStyleEl = $body[0].ownerDocument.createElement("style")
      extraStyleEl.setAttribute("id", "extra-style")

      if (extraStyleEl.styleSheet) {
        extraStyleEl.styleSheet.cssText = extraStyle;
      } else {
        extraStyleEl.appendChild(extraStyleEl.ownerDocument.createTextNode(extraStyle));
      }
      $body.append(extraStyleEl);
    }
  })
}

const getCursor = function (body) {
  var cursor = body.querySelector("#fake-cursor")

  if (!cursor) {
    cursor = body.ownerDocument.createElement("div")

    cursor.setAttribute("id", "fake-cursor")
    cursor.setAttribute("style", `top: ${cursorY}px; left: ${cursorX}px;`)

    addExtraStyle()

    body.append(cursor);
  }
  return cursor
}

Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  if (url && !url.match(/^https?:\/\//)) {
    url = Cypress.env('baseUrl') + url
  }

  return originalFn(url, options)
})

Cypress.Commands.add('prepare', () => {
  addExtraStyle()
})

Cypress.Commands.add('login', (showClick = false) => {
  cy.visit("/")

  const focusFunction = showClick ? "click" : "focus"

  cy.get('[placeholder="name@company.tld"]')[focusFunction]()
    .type(Cypress.env('user'))

  cy.get('[placeholder="*************"]')[focusFunction]()
    .type(Cypress.env('PASSWORD'))

  cy.get('[type="submit"]')
    .click()
})

var cursorX = 800;
var cursorY = 800;

Cypress.Commands.add('hover', { prevSubject: true, }, ($el, options) => {
  cy.wait(1000)

  const domEl = $el.first()[0]
  const cursor = getCursor(domEl.ownerDocument.body)

  let coords = $el.first()[0].getBoundingClientRect()
  cursorX = coords.x + coords.width / 3 * 2
  cursorY = coords.y + coords.height / 3 * 2

  cursor.setAttribute("class", "")
  cursor.setAttribute("style", `top: ${cursorY}px; left: ${cursorX}px;`)

  console.log($el)

  domEl.ownerDocument.querySelector(".is-----active-hover")?.classList.remove("is-----active-hover")
  domEl.classList.add("is-----active-hover")

  cy.wrap($el).realHover();
  cy.wait(1000)

  return cy.wrap($el)
})

Cypress.Commands.add('addBeacon', { prevSubject: true, }, ($el, options) => {
  cy.wrap($el).hover()

  const domEl = $el.first()[0]
  const cursor = getCursor(domEl.ownerDocument.body)

  cursor.setAttribute("class", "")
  cursor.setAttribute("class", "click")

  setTimeout(function () {
    cursor.setAttribute("class", "")
  }, 2000)

  return cy.wrap($el).wait(2000)
})

Cypress.Commands.add('addFrame', { prevSubject: true, }, ($el, options) => {
  const domEl = $el.first()[0]
  var screenshotFrame = domEl.ownerDocument.body.querySelector("#screenshot-frame")

  if (!screenshotFrame) {
    screenshotFrame = domEl.ownerDocument.body.ownerDocument.createElement("div")

    screenshotFrame.setAttribute("id", "screenshot-frame")
    screenshotFrame.setAttribute("class", "hidden")

    addExtraStyle()

    domEl.ownerDocument.body.append(screenshotFrame);
  }

  let coords = $el[0].getBoundingClientRect()
  screenshotFrame.setAttribute("style", `width: ${coords.width + 34}px; height: ${coords.height + 34}px; top: ${coords.y - 17}px; left: ${coords.x - 17}px;`)

  const cursor = getCursor(domEl.ownerDocument.body)

  screenshotFrame.setAttribute("class", "")
  cursor.setAttribute("class", "hidden")

  setTimeout(function () {
    screenshotFrame.setAttribute("class", "hidden")
    cursor.setAttribute("class", "")
  }, 2000)

  cy.wait(1000)

  return cy.wrap($el)
})

Cypress.Commands.add('hideCursor', { prevSubject: "optional", }, ($el, options) => {
  cy.get('body').then($body => {
    const cursor = getCursor($body[0])

    cy.wrap($body[0]).realHover()

    cursor.setAttribute("class", "hidden")
  })

  cy.wait(1000)

  return cy.wrap($el)
})

Cypress.Commands.overwrite('click', (originalFn, $el, options) => {
  cy.wrap($el).hover()
  cy.wrap($el).addBeacon()

  return cy.wrap(originalFn($el.first(), Object.assign(options || {}, { force: true })))
})

Cypress.Commands.overwrite('type', (originalFn, $el, options) => {
  return cy.wrap($el).realType(options)
})
