/*!*
 * moduleList.js
 * Version 1.0.0
 * Copyright (C) 73tk
 * Author 73tk
 */

(function($) {
    'use strict';
    // カルーセルをプラグイン化
    $.fn.mod = function(options) {

        // 引数設定
        var defaults = {
            slideSpeed : 300
        };
        var opt = $.extend(defaults, options);

        // 配列オブジェクトへ（要素を退避）
        var $elem = this;

        // 指定要素ごとに処理
        $elem.each(function() {

            var $root = $(this);
            var $modContent = $root.find('div.mod-content');
            var modCode = $modContent.html();
            var utility = '<button class="mod-button-show">show code<span class="toggle-status"></span></button><div class="mod-code"><textarea readonly="readonly" cols="50" rows="10"></textarea></div>'
            $modContent.append(utility);
            var $modCodeArea = $root.find('div.mod-code');
            var $modTextarea = $root.find('textarea');
            var $modButton = $root.find('button');
            $modCodeArea.hide();
            $modTextarea.text(modCode);

            $modButton.on('click', function() {
                $(this).toggleClass('open')
                    .siblings('.mod-code').slideToggle(opt.slideSpeed);
            });

        });
        // メソッドチェーン用
        return(this);
    };

})(jQuery);


$(function() {
    'use strict';
    $('div.mod-body').mod();
});
