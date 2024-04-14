// @ts-ignore isolatedModules

import { GM_info, unsafeWindow, monkeyWindow, GM_addElement } from '$';

import { teach_applysquare_handler, teach_applysquare_homework_handler } from './handlers/teach_applysquare';

(function () {
  'use strict';
  (function () {
    let match_idx: string = GM_info.script.matches
      .map(rule => rule.replace(/\.|\*|\/|\?/g, match => ({ ".": "\\.", "*": ".*", "/": "\\/", "?": "\\?" }[match]) || ''))
      .map(rule => new RegExp(rule))
      .map((regExp, index) => regExp.test(window.location.href) ? index : null)
      .filter(index => index != null).join().toString();

    interface Istragety { [key: string]: () => void };

    const strategy_load: Istragety = {

    }

    const strategy_instant: Istragety = {
      "0": teach_applysquare_handler, // 教学立方 PC 微信跳转
      "1": teach_applysquare_homework_handler, // 教学立方作业评阅
    }

    if (match_idx in strategy_instant) {
      let strategy_instant_func = strategy_instant[match_idx];
      strategy_instant_func();
    } else if (match_idx in strategy_load) {
      let strategy_load_func = strategy_load[match_idx];
      if (document.readyState == "complete") {
        strategy_load_func();
      } else {
        window.addEventListener("load", strategy_load_func);
      }
    }

  })();

})();