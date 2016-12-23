(function() {
    var hf_fg = true;
    var is = null;
    $$('#pinglun .a-hf').on('click', hfShow)

    function hfShow() {
        var that = this;
        var num = $$('#pinglun .a-hf');
        var nis = getI(num);
        remDiv();
        if (hf_fg) {
            addDiv(nis);
            hf_fg = false;
        } else {
            if (is != null && nis != is) {
                addDiv(nis);
                hf_fg = false;
            } else {
                hf_fg = true;
            }
        }
        is = nis;

        // 添加回复框
        function addDiv(is) {
            var dd = document.createElement("div");
            dd.innerHTML = '<div class="huifu">' +
                '<div class="iner">' +
                '<div class="holder-parent">' +
                '<textarea class="p-txt" placeholder="回复"></textarea>' +
                '</div>' +
                '<div class="pl-btns clearfix">' +
                '<a href="javascript:;" class="a-pl m-btn1">回复</a>' +
                '<!-- 最大字数 -->' +
                '<span class="max-num">140</span>' +
                '</div>' +
                '</div>' +
                '</div>';
            $$(".pl-item")[0].insertBefore(dd, $$(".item").eq(is)[0].nextSibling);
        }

        // 删除回复框
        function remDiv() {
            var divs = $$(".pl-item div");
            for (var i = 0; i < divs.length; i++) {
                if (divs[i].className == '' && divs[i].id == '') {
                    $$(divs[i]).parent()[0].removeChild(divs[i]);
                }
            }
        }

        // 获得回复框序号
        function getI(num) {
            for (var i = 0; i < num.length; i++) {
                if (that == num[i]) {
                    return i;
                }
            }
        }
    }
})();
