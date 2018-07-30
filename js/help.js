$(function () {
    var helpData = [     
          {
            title: "如何绑定智能行车记录仪",
            listCon: '<p>\n'+
            '首先确定您的智能行车记录仪设备连接电源（电源要求为5V2A）并开机正常,进入手机设置->无线网络设置->开启WLAN,在可用的网络列表中选择以X100_CRADV开头的无线网络名称进行连接，默认密码为12345678，连接成功后启动APP在设备列表中选择连接的X100设备即可。\n'+
            '</p>'+
            '<img src="images/p1.gif" class="img_one"/>'
         },
         
         {
            title: "如何设置行车记录仪双录风格",
            listCon: '<p>\n'+
            '您可以从设置->录影->双录风格中进行设置，同样也可以在录像界面中直接点击切换按钮<img/ class="img_two" src="images/img_qiehuan.png">（图）进行切换。\n'+
            '</p>'+
            '<img src="images/p2.gif" class="img_one"/>'
         },
          {
            title: "如何进行图片抓拍",
            listCon: '<p>\n'+
            '在录像过程中点击屏幕上方的拍照按钮<img/ class="img_two" src="images/img_paizhao.png">（图），即可对图像进行抓拍\n'+
            '</p>'+
            '<img src="images/p3.gif" class="img_one"/>'
         },
          {
            title: "如何调节行车记录仪亮度",
            listCon: '<p>\n'+
            '在录像界面，点击屏幕上方的亮度调节按钮<img/ class="img_two" src="images/img_liangdu.png">（图），可以设置行车记录仪的亮度\n'+
            '</p>'+
            '<img src="images/p4.gif" class="img_one"/>'
         },
          {
            title: "如何设置行车记录仪的无线名称和密码",
            listCon: '<p>\n'+
            '设置->选择摄影机，设置新的网络名称和密码，确定即可。修改完成后，需要重新进入手机无线网络设置重新选择该设备的无线网络名称，输入新的密码进行连接。\n'+
            '</p>' 
         },
           {
            title: "自动录影",
            listCon: '<p>\n'+
            '设置->开启自动录影后，当行车记录仪重新上电启动后会自动开启录影功能，录制的影片可以自SD卡中查看。\n'+
            '</p>'
         },
         {
            title: "物体移动侦测触发录影",
            listCon: '<p>\n'+
            '设置->开启移动侦测触发录影后，行车记录仪的前镜头（对着车外）如果侦测到移动后，会触发录影，录影时间约10秒，到时间后自动停止。录制的影片可以自SD卡中查看。\n'+
            '</p>'
         },
         {
            title: "如何格式化SD卡",
            listCon: '<p>\n'+
            '设置->记忆卡，选择格式化，点击确定后，SD卡将会被格式化。\n'+
            '</p>'
         },
         {
            title: "如何查看行车记录仪录制的影片",
            listCon: '<p>\n'+
            '在远御记录仪的首页界面，点击文件夹按钮，可以查看所有SD卡中录制存储的影片，您可以选择打开查看，下载和删除操作。\n'+
            '</p>'
          },
         {
            title: "如何行车记录仪进行系统重置",
            listCon: '<p>\n'+
            '在录像预览界面，点击设置->系统重置，重置后，会将之前一些录影风格等会恢复成默认项。无线网络名称和密码,SD卡中的内容不会被删除。\n'+
            '</p>'
         },
         {
            title: "如果行车记录仪的无线密码忘记了怎么办",
            listCon: '<p>\n'+
            '保持设备处于开机状态，按下复位键，停顿5-10秒后松手，复位成功。\n'+
            '</p>'+
            '<img src="images/x100-line.png" class="img_one"/>'
         },    
    ]

    var app = new Vue({
        el: '#help',
        data: {
            helpData: helpData,
            tip: 123,
            filterText : "",
            searchTip : false,
            seaT : "",
            seaNum : 0
        },
        methods:{
            myfilter : function(value){
                if(value.indexOf(this.seaT) !== -1){

                    this.seaNum = 1 ;
                    return value;


                }else {
                    return false
                }


            }
        }

    })
    // app.tipC();
    $(".com").on("click",".tip",function () {
        $(this).parent().siblings().find('.arrow i').removeClass("arrowRot");
        $(this).find(".arrow i").toggleClass("arrowRot");
        $(this).parent().siblings().find(".listCon").slideUp();
        $(this).next().slideToggle();
    })
    var flagN = true;
    $(".str").keyup(function () {
        flagN = true;
        if( $(".str").val() == "") {
            $(".result").hide();
            app.seaT = ""
        }
    });

    $(".seaBtn").click(function () {
        $(".result").hide();
        if (flagN) {
            flagN = false;
            app.seaNum = 0;
        }
        app.seaT = $(".str").val();
        if(app.seaT !== "") {
            setTimeout(function () {
                if (app.seaNum !== 1){
                    $(".result").show();
                }
            },500)
        }

    });


    // Vue.filter('search', function (value) {
    //     var tit = value.indexOf(seaT);
    //     console.log(tit);
    //     if (tit !== -1) {
    //         return value;
    //     } else {
    //         return "";
    //     }
    // })
    //
    // var myFil = filter("search");


})
