const simpleHash = function (str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }
  return new Uint32Array([hash])[0].toString(36);
};

const preserveExpansionStates = function (skipEventListener) {
  const state = new URLSearchParams(window.location.search.substring(1));

  if (document.querySelectorAll('.markdown').length == 0) {
    return setTimeout(preserveExpansionStates, 100);
  }

  document.querySelectorAll('details, .tabs-container').forEach(function (el, index) {
    const expansionKey = "x" + (el.id || index);
    const stateChangeElAll = el.querySelectorAll(':scope > summary, :scope > [role="tablist"] > *');

    if (el.getAttribute("data-preserve-state") !== "true") {
      el.setAttribute("data-preserve-state", "true")

      const persistState = function (i) {
        if (Number.isInteger(i)) {
          const state = new URLSearchParams(window.location.search.substring(1));
          if (el.open || el.classList.contains("tabs-container")) {
            state.set(expansionKey, i);
          } else {
            state.delete(expansionKey);
          }

          window.history.replaceState(null, '', window.location.pathname + '?' + state.toString() + window.location.hash);
        }
      }

      el.addEventListener("toggle", persistState.bind(el, 1));
      stateChangeElAll.forEach(function (stateChangeEl, i) {
        stateChangeEl.addEventListener("click", persistState.bind(stateChangeEl, i + 1))
      })
    }

    if (state.get(expansionKey) && el.open != true) {
      el.open = true;
      stateChangeElAll.forEach(function (stateChangeEl, i) {
        if (state.get(expansionKey) === (i + 1).toString()) {
          stateChangeEl.click();
        }
      })
    }
  });

  if (location.host.match(/^localhost(:[0-9]+)?$/)) {
    setTimeout(function () {
      preserveExpansionStates();
    }, 500)
  }
}

preserveExpansionStates();
window.addEventListener("popstate", preserveExpansionStates);
