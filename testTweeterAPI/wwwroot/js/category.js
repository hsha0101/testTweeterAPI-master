
$(document).ready(function () {
    $('.sort_category').hover(function () {
        $(this).find('.sort_type_select').show();
        $(this).find('.meat_sort_type').addClass('Mhover');
    }, function () {
        $(this).find('.sort_type_select').hide();
        $(this).find('.meat_sort_type').removeClass('Mhover');
    })
    $('.sort_type_select a').click(function () {
        var val = $(this).text();
        $(this).parents('.sort_type_select').hide();
        $(this).parents('.sort_category').find('.current_sort_type').text(val);
    })

    var tmpPage = $("div.page").find("a");
    if (tmpPage.size() > 0) {
        //alert(tmpPage.first().html());
        //alert(tmpPage.last().html());
        var ft = tmpPage.first().add(tmpPage.last()).clone();
        // alert(ft.html());
        $("div.next-pre").append(ft);
    }

    $(".priceSort").hover(function () {
        $(this).toggleClass('on');
    });

    //quick view
    $('.p-img').hover(function () {
        $(this).children('.p-quick').show();
    }, function () {
        $(this).children('.p-quick').hide();
    })

    //meat-priceSort
    $('.meat-price-input input').focus(function () {
        $('.meat-price-input').addClass('inputclick');
    });
    $('.meat-price-input input').blur(function () {
        $('.meat-price-input').removeClass('inputclick');
    })

});

function HTMLEnCode(str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&/g, "&gt;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/    /g, "&nbsp;");
    s = s.replace(/\'/g, "'");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\n/g, "<br>");
    return s;
}

function increment(d) {
    if (d.size() > 0) {
        var a = d.val();
        var c = /^[1-9]\d{0,2}$/g;
        if (!a.match(c)) {
            alert("输入的数量有误,应为[1-999]");
            d.val(1);
            a = 1
        }
        var b = parseInt(a) + 1;
        if (b > 999) {
            b = 999
        }

        d.val(b)
    }
}
function incrementAll() {
    increment(jQuery("#product_amount"));
    for (var a = 2; a <= 4; a++) {
        increment(jQuery("#product_amount" + a))
    }
    // UpdateCommodityDetailNum(jQuery("#product_amount")[0]);
}
function decrement(d) {
    if (d.size() > 0) {
        var a = d.val();
        var c = /^[1-9]\d{0,2}$/g;
        if (!a.match(c)) {
            //alert("输入的数量有误,应为[1-999]");
            d.val(1);
            a = 1
        }
        var b = parseInt(a) - 1;
        if (b > 999) {
            b = 999
        }
        if (b <= 0) {
            //alert("输入的数量有误,应为[1-999]");
            b = 1
        }
        d.val(b)
    }
}
function decrement1() {
    decrement(jQuery("#FormView1_qty"));
}
function increment1() {
    increment(jQuery("#FormView1_qty"));
}
function decrementAll() {
    decrement(jQuery("#product_amount"));
    for (var a = 2; a <= 4; a++) {
        decrement(jQuery("#product_amount" + a))
    }
}
function checkAmount(c, d) {
    if (c.size() > 0) {
        var a = c.val();
        var b = /^[1-9]\d{0,2}$/g;
        if (!a || !a.match(b)) {
            c.val(1);
            alert("输入的数量有误,应为[1-999]");
            return false
        }
        if (d && a < d) {
            c.val(d);
            alert("购买的数量不能低于<b>" + d + "</b>。");
            return false
        }
    }
    return true
}
function inputOnlyNum(c, b, a) {
    c.value = c.value.replace(/\D+/g, "");
    if (c.value > a) {
        c.value = a
    }
    if (c.value < b) {
        c.value = b

    }
}


function checkNum2(obj,max) {
    //检查是否是非数字值 
    if (isNaN(obj.value)) {
        obj.value = "";
    }
    if (obj.value > max || obj.value < 0) {
        obj.value = "";
    }
    if (obj != null) {
        //检查小数点后是否对于两位 
        if (obj.value.toString().split(".").length > 1 && obj.value.toString().split(".")[1].length > 2) {
            //alert("小数点后多于两位！");
            obj.value = "";
        }
    }
};

function checkNum3(obj, max) {
    //检查是否是非数字值 
    if (isNaN(obj.value)) {
        obj.value = "0";
    }
    if (obj.value > max || obj.value < 0) {
        obj.value = "0";
    }
    if (obj != null) {
        //检查小数点后是否对于两位 
        if (obj.value.toString().split(".").length > 1) {
            //alert("小数点后多于两位！");
            obj.value = "0";
        }
    }
}

function checkNum4(obj, max) {
    //检查是否是非数字值 
    if (isNaN(obj.value)) {
        obj.value = "1";
    }
    if (obj.value > max || obj.value < 0) {
        obj.value = "1";
    }
    if (obj != null) {
        //检查小数点后是否对于两位 
        if (obj.value.toString().split(".").length > 1) {
            //alert("小数点后多于两位！");
            obj.value = "1";
        }
    }
}

function buyButtonNumChange(c) {
    var a = jQuery("#" + c).val();
    if (c != "product_amount") {
        jQuery("#product_amount").val(a)
    }
    for (var b = 2; b <= 4; b++) {
        if (c != "#product_amount" + b) {
            jQuery("#product_amount" + b).val(a)
        }
    }
}


function AddtoShoppingCart2(commodityState, commodityId) {//购物车
    if (commodityState == "1") {
        G.app.itemDetail.doPurchaseListJ(this, commodityId, 1);
    }
    //预定
    else if (commodityState == "4") {
        if (isLogined()) {
            G.app.itemDetail.doBookOneJ(this, commodityId, 1);
        }
    }
}

function AddtoShoppingCart2(commodityState, commodityId, commodityCode) {//购物车
    if (commodityState == "1") {
        G.app.itemDetail.doPurchaseListJ(this, commodityId, 1);
    }
    //预定
    else if (commodityState == "4") {
        if (isLogined()) {
            G.app.itemDetail.doBookOneJ(this, commodityId, 1);
        }
    }
}

function AddtoShoppingCart3(commodityState, commodityId) {//购物车
    //关闭当前弹出层quickdiv
    $("#quickdiv").click();
    var num = 1;
    var type = 1;
    //alert(commodityState+commodityId);
    //commodityId = $.trim($("span.comId").html());
    num = parseFloat($("#product_amount").val());
    type = $.trim($("span.promotionsType").html());
    //alert(commodityId + "_" + num + "_" + type);

    if (num >= 0) {
        if (commodityState == "1") {
            if ($.trim($("input:hidden[id$='MjsCommodityId']").get(0).value).toString().length > 0) {
                var mjsNum3 = parseInt($.trim($("input:hidden[id$=MjsAssignCommodityAmount]").get(0).value).toString());
                var msjCount3 = mjsNum3; // Math.floor(num / mjsNum3);
                //alert(msjCount3);
                if (msjCount3 > 0) {
                    G.app.itemDetail.doMjsPurchaseInDetailPageCurr(this, commodityId, num, 1, $.trim($("input:hidden[id$=MjsCommodityId]").get(0).value).toString());
                } else {
                    G.app.itemDetail.doPurchaseInDetailPageCurr(this, commodityId, num, type);
                }
            } else {
                G.app.itemDetail.doPurchaseListJ(this, commodityId, num);
            }
        } else if (commodityState == "4") {
            G.app.itemDetail.doBookOneJ(this, commodityId, num, type);
        }
    }
}

function ShowScroll() {
    //alert("test");
    var len = $('.pop_favour .pop_favour_box').length;
    if (len >= 3) {
        $('.pop_favour').addClass('pop_scroll');
    }
}
function ChaoZhiZuHe(obj, PromotionsID) {
    //关闭当前弹出层quickdiv
    $("#quickdiv").click();
    G.app.itemDetail.doPurchaseInDetailPageJ2(obj, PromotionsID, 1, 8);
}
function MaiZeng(obj, CommodityID, mzAmount) {
    //关闭当前弹出层quickdiv this,
    $("#quickdiv").click();
    G.app.itemDetail.doMjsPurchaseInDetailPageCurr(obj, CommodityID, mzAmount, 1, '')
}
function DuoFen(obj, PromotionsID) {
    //关闭当前弹出层quickdiv this,
    $("#quickdiv").click();
    G.app.itemDetail.doPurchaseInDetailPageJ2(this, PromotionsID, 1, 8);
}


$(function () {
    $(".cate-h").click(function () {
        var o = $(this);
        o.addClass('sidemenu_selected').siblings('.cate-h').removeClass('sidemenu_selected');
        //o.toggleClass('on').parents('.cate-h').siblings('.cate-h').find('h2').removeClass('on');
        o.find('.cate-box').slideToggle('fast').parents('.cate-h').siblings('.cate-h').find('.cate-box').slideUp('fast');
    })
    var index = $("#ctl00_ContentMain_inpindexpath").val();
    if (index != "" && index != undefined) {
        var o = $(".cate-h[v=" + index + "] h2");

        o.toggleClass('on').parents('.cate-h').siblings('.cate-h').find('h2').removeClass('on');
        o.next('div').slideToggle('fast').parents('.cate-h').siblings('.cate-h').find('div').slideUp('fast');
    }
})



function ClosePop(obj) {
    $(obj).parents('.popout').fadeOut();
    $('.pop_mask').hide();
}

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}


function submitCx2() {
    var path = "";
    var url1 = window.location.href;

    url1 = url1.substring(0, url1.indexOf("?")) + "?";

    i = 0;
    if (GetQueryString("mode") != null) {
        var mode = HTMLEnCode(GetQueryString("mode"));
        if (i > 0) {
            path += "&mode=" + mode;

        } else {
            path += "mode=" + mode; i++;
        }
    }

    if (GetQueryString("time") != null) {
        var time = HTMLEnCode(GetQueryString("time"));
        if (i > 0) {
            path += "&time=" + time;

        } else {
            path += "time=" + time; i++;
        }
    }

    if (GetQueryString("taste") != null) {
        var taste = HTMLEnCode(GetQueryString("taste"));
        if (i > 0) {
            path += "&taste=" + taste;

        } else {
            path += "taste=" + taste; i++;
        }
    }

    var txtminprice1 = HTMLEnCode($("#txtminprice2").val());
    if (txtminprice1.length > 0 && txtminprice1 != "0") {
        if (i > 0) {
            path += "&txtminprice1=" + txtminprice1;

        } else {
            path += "txtminprice1=" + txtminprice1; i++;
        }
    }

    var txtmaxprice1 = HTMLEnCode($("#txtmaxprice2").val());
    if (txtmaxprice1.length > 0 && txtmaxprice1 != "0") {
        if (i > 0) {
            path += "&txtmaxprice1=" + txtmaxprice1;

        } else {
            path += "txtmaxprice1=" + txtmaxprice1; i++;
        }
    }


    window.location = url1 + path;
}

function submitCx() {
    var a = $("#formCx").attr("action");
    if (a.indexOf("?") < 0) {
        a += "?";
    }

    var i = 1;
    if ((a.lastIndexOf("&") + 1 == a.length)) {
        i = 0;
    }
    var path = "";
    var txtminprice1 = HTMLEnCode($("#txtminprice1").val());
    if (txtminprice1.length > 0 && txtminprice1 != "0") {
        if (i > 0) {
            path += "&txtminprice1=" + txtminprice1;

        } else {
            path += "txtminprice1=" + txtminprice1; i++;
        }
    }

    var txtmaxprice1 = HTMLEnCode($("#txtmaxprice1").val());
    if (txtmaxprice1.length > 0 && txtmaxprice1 != "0") {
        if (i > 0) {
            path += "&txtmaxprice1=" + txtmaxprice1;

        } else {
            path += "txtmaxprice1=" + txtmaxprice1; i++;
        }
    }



    if ($("#ckIsTodayDir").attr("checked")) {
        if (i > 0) {
            path += "&ckIsTodayDir=1";

        } else {
            path += "ckIsTodayDir=1"; i++;
        }
    }
    if ($("#cbYH").attr("checked")) {
        if (i > 0) {
            path += "&cbYH=1";

        } else {
            path += "cbYH=1"; i++;
        }
    }
    if ($("#cbNew").attr("checked")) {
        if (i > 0) {
            path += "&cbNew=1";

        } else {
            path += "cbNew=1"; i++;
        }
    }
    //$("#formCx").attr("action", a + path);
    window.location = a + path;
}


$(document).ready(function () {
    $(".page a").click(function () {
        $.scrollTo("#dingwei", 100);
    })
})

//快速查看

//quick view
$('.p-img').hover(function () {
    // alert("显示");
    $(this).children('.p-quick').show();
}, function () {
    $(this).children('.p-quick').hide();
})

$('.quick-view').click(function () {
   
//    var popH = $("#quickviewdiv").height();
//    var sTop = $('html').scrollTop();
//    var docH = $(window).height();
//    $("#quickviewdiv").html("正在加载中……");
//    $.get("../test.htm", {CommodityId: $(this).attr("CommodityId")}, function (result, status) {

//        $("#quickviewdiv").html(result);
//        //            alert(result);
//    })
//    //  $(".popout").css({ 'marginTop': '0', 'top': sTop + (docH - popH) / 2 - 200 });
//    $('.pop_mask').fadeTo(0, 0.65);
//    //订阅不显示
//    $("#divRss").hide();
//    //  $("#divpopout").hide();
//    $("#popout_detail").hide();
//    $("#ms_popout").hide();
//    // alert("完毕");
$("div#popout_detail").fadeIn();
$.get("ProductDetail.aspx", { ID: 13 }, function(result, status) {
    $("div#popout_detail dl").html(result);
    //alert(result);

})
})
//    var len = $('.pop_favour .pop_favour_box').length;
//    if (len >= 3) {
//        $('.pop_favour').addClass('pop_scroll');
//    }

function AddtoShoppingCart() {
    $("#quickviewdiv").fadeIn();
    //        $(window).scroll(function () {
    //            var popH = $(".popout").height();
    //            var sTop = $('html').scrollTop();
    //            var docH = $(window).height();
    //            $(".popout").css({ 'marginTop': '0', 'top': sTop + (docH - popH) / 2 - 200 });
    //        })
}

var popH = $("#quickviewdiv").height();
$("#quickviewdiv").css('marginTop', -popH / 2);
$(".close,.cancel").click(function () {
    $(this).parents('#quickviewdiv').fadeOut();
    $('.pop_mask').hide();
})
    