import { waitForElm } from "../utils/promise";

export function teach_applysquare_handler() {
  console.debug('Solving teach applysquare');
  const prefix = 'https://teaching.applysquare.com/S/Course/index/cid';
  if (window.location.href.includes('announcement')) {
    window.stop();
    const matches = window.location.href.match(/___detail___(\d+)___(\d+)/);
    if (matches) {
      const url = `${prefix}/${matches[1]}#S-Announcement-view-id-${matches[2]}`;
      window.location.href = url;
    }
  } else if (window.location.href.includes('work')) {
    window.stop();
    const matches = window.location.href.match(/___detail___(\d+)___(\d+)/);
    if (matches) {
      const url = `${prefix}/${matches[2]}#S-Work-answer-id-${matches[1]}`
      window.location.href = url;
    }
  }
}

export function teach_applysquare_homework_handler() {
  console.debug('Solving teach applysquare');

  if (window.location.href.includes('treviewinfo')) {
    // In the detail page of a stundent's homework
    waitForElm('.caozuo').then((data) => {
      const divElement = data as HTMLDivElement;
      const review_elem = divElement.querySelector('a') as HTMLAnchorElement;
      if (review_elem && review_elem.innerText == '评阅' && review_elem.checkVisibility() == true) {
        review_elem.click();
        // if reviewing finished, closed the tab
        waitForElm('.playback-box1').then(() => {
          window.close();
        });
      }
    });
  } else {
    // In the list page of students' homework
    waitForElm('#tab-1').then((data) => {
      const placeholderText = "请输入学号或者姓名";
      const divElement = data as HTMLDivElement;

      const clickedElementsMap = new Map<string, boolean>();
      // let intervalId = setInterval(function () {
      setInterval(() => {
        const table_elem = divElement.querySelector('table') as HTMLTableElement;

        if (table_elem) {
          const trElements = table_elem.querySelectorAll('tr.tr-disabled');

          if (trElements.length === 1) {
            const tdElements = trElements[0].querySelectorAll('td');
            const lastTdElement = tdElements[tdElements.length - 1] as HTMLTableCellElement;

            lastTdElement.querySelectorAll('a').forEach((aElement: HTMLAnchorElement) => {
              const studentid = tdElements[1].innerText;
              if (!aElement.innerText.includes('评阅') || clickedElementsMap.has(studentid)) {
                return;
              }
              aElement.click();
              const search_elem = divElement.querySelector(`input[placeholder="${placeholderText}"]`) as HTMLInputElement;
              search_elem.value = '';  // clear search_elem
              clickedElementsMap.set(studentid, true);
            });
          }
        }
      }, 500);
    });
  }
};
