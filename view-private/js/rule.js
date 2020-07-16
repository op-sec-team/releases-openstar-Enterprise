window.onload = function () {
    // var data = {
    //     action: 'get',
    //     mod: 'base',
    // }
    // $.ajax({
    //     type: 'POST',
    //     url: 'base.json',
    //     data: data,
    //     dataType: 'json',
    //     success: function (msg) {
    //         console.log();
    //         var basicData = msg;
    //         var strHtml = "";
    //         strHtml += '<div class="form-group">'
    //         + '<label for="baseDir" class="col-sm-2 control-label">baseDir：</label>'
    //         + '<div class="col-sm-6">'
    //         + '<input name="baseDir" type="text" class="form-control" value="'+basicData.baseDir+'">'
    //         + '</div>'
    //         +'<p class="col-sm-3 form-control-static"><i class="red-fonts">*</i>waf主目录；谨慎修改</p>'
    //         + '</div>'
    //         console.log(strHtml);
    //         $("#userForm").html(strHtml);

    //     }
    // });
    // $.getJSON("base.json",function(msg){
    //     var basicData = msg.msg;
    //     // console.log(strHtml);
    //     $("#basicForm").html(strHtml);
    // });
}
// $('#submit_button').click(function () {
//     var d = {};
//     var t = $('#basicForm').serializeArray();
//     $.each(t, function () {
//         d[this.name] = this.value;
//     });
//     var data = {
//         action: 'set',
//         mod: 'base',
//         value: JSON.stringify(d).toString(),
//     }
//     $.ajax({
//         type: 'POST',
//         url: 'http://172.17.10.5:5460/api/v2/config_dict',
//         data: data,
//         dataType: 'jsonp',
//         success: function (msg) {
//             console.log(msg);
//         }
//     });
// })