!(function () {
  // Throttling function to limit how often a function can be executed
  const throttle = (fn, wait) => {
    let inThrottle = false;
    return () => {
      if (!inThrottle) {
        fn();
        inThrottle = true;
        setTimeout(() => (inThrottle = false), wait);
      }
    };
  };

  // Function to add the taos class
  const addTaosClass = (el) => {
    if (el.className !== el.dataset.taosClass) {
      el.className = el.dataset.taosClass;
    }
  };

  // Function to remove taos: prefix from the class
  const removeTaosPrefix = (el) => {
    el.className = el.className.replaceAll("taos:", "");
  };

  // Function to initialize the taos element
  const initializeTaosElement = (el) => {
    if (!el.className.includes("taos-init")) {
      el.dataset.taosClass = el.className + " taos-init";
      addTaosClass(el);
    }
    el.className += " !duration-[0ms] !delay-[0ms]";
    removeTaosPrefix(el);
    return {
      element: el,
      once: getComputedStyle(el)["animation-iteration-count"] === "1",
      offset: parseInt(el.dataset.taosOffset || 0),
    };
  };

  let taosElements = [];
  let windowWidth = window.innerWidth;
  let scrollY = window.scrollY;

  // Function to update triggers for taos elements
  const updateTriggers = throttle(() => {
    taosElements.forEach((entry) => {
      entry.trigger =
        entry.element.getBoundingClientRect().top -
        window.innerHeight +
        entry.offset +
        scrollY;
    });
  }, 250);

  // Function to refresh taos elements list and update triggers
  const refreshTaosElements = () => {
    taosElements = [];
    document.querySelectorAll('[class*="taos"]').forEach((el) => {
      taosElements.push(initializeTaosElement(el));
    });
    updateTriggers();
    requestAnimationFrame(checkTaosElements);
  };

  // Function to check taos elements and update their state based on scroll position
  const checkTaosElements = () => {
    scrollY = window.scrollY;
    taosElements.forEach(({ element, trigger, once }) => {
      if (trigger < scrollY) {
        addTaosClass(element);
      } else if (!once && element.classList.contains("taos:")) {
        removeTaosPrefix(element);
      }
    });
    updateTriggers();
  };

  // Initial setup
  refreshTaosElements();
  addEventListener("scroll", throttle(checkTaosElements, 32));
  addEventListener("orientationchange", refreshTaosElements);
  addEventListener("resize", throttle(() => {
    if (windowWidth !== window.innerWidth) {
      windowWidth = window.innerWidth;
      refreshTaosElements();
    }
  }, 250));

  // Observe DOM changes to handle dynamically added elements
  new MutationObserver((mutations) => {
    mutations.forEach(({ target }) => {
      if (
        target.className &&
        !target.classList.contains("taos-init") &&
        target.classList.contains("taos:")
      ) {
        taosElements.push(initializeTaosElement(target));
      }
    });
  }).observe(document, { attributes: true, childList: true, subtree: true });
})();
