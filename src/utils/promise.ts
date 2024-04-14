export function waitForElm(selector: string) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

export function waitForElms(selector: string) {
  return new Promise(resolve => {
    if (document.querySelectorAll(selector).length > 0) {
      return resolve(document.querySelectorAll(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelectorAll(selector).length > 0) {
        resolve(document.querySelectorAll(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}
