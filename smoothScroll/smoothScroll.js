/*!*
 * smoothScroll.js
 * Version 1.0.0
 * Copyright (C) 73tk
 * Author 73tk
 *
 * 機能
 * ・aタグのhref属性で、#で始まるページ内アンカーをスムーススクロールさせる。
 * ・ただしaタグのhref属性が#のみ、または.js-no-scrollの付いたものは無視する。
 * ・ページに追従ヘッダがある場合は引数で余白分の数値を渡す。
 */
$(function() {
  'use strict';
  function smoothScroll(marginTop) {
    // for all anchor
    var $scrollAnchor = $('a[href^="#"]').not('a[href$="#"]').not('.js-no-scroll');
    $scrollAnchor.on('click', function(e) {
      e.preventDefault();
      var speed = 300;
      var href= $(this).attr('href');
      var $target = $(href === '#' || href === '' ? 'html' : href);
      var targetPos = $target.offset().top;
      var scrollPos = marginTop ? targetPos - marginTop : targetPos;
      $('body, html').animate({
        scrollTop : scrollPos
      }, speed, 'swing');
    });
  }

  smoothScroll(50);

});
