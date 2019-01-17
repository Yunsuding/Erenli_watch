// 获取时间

function getUrl(e){
    var domain = 'https://www.isaveu.cn';
    var domains = 'www.isaveu.cn';
    switch(e){
        case 'login':
            return domain+'/human/api.login/index';  //  登录 
        break;
        case 'getting':
            return domain+'/human/api.Usersetting/getting'; //  通知设置
        break;
        case 'edit':
            return domain+'/human/api.Usersetting/edit'; //  通知设置保存
        break;
        case 'getMine':
            return domain+'/human/api.User/getMine';   //  查看工作状态
        break;
        case 'editWorkStatus':
            return domain+'/human/api.User/editWorkStatus';
        break;
        case 'admit':
            return domain+'/human/api.servicecall/admit';
        break;
        case 'info':
            return domain+'/human/api.servicecall/info';
        break;
        case 'call_deal':
            return domain+'/human/api.servicecall/call_deal';
        break;
        case 'getUserInfo':
            return domain+'/human/api.servicecall/getUserInfo';
        break;
        case 'bind':
            return domain+'/human/api.index/bind';
        break;
        case 'getSteps':
            return domain+'/human/api.watch/steps';
            break;
        case 'toUrl':
            return domain+'/mobile/#/userEvaluation';    
            break;
        case 'Order':
            return domain+'/human/api.watch/my_order';
            break;
        case 'callList':
            return domain+'/human/api.servicecall/call_list';
            break;
        case 'websocket':
            return 'wss://'+domains+':7272';
            break;
        case 'lujing':
            return domain+'/watch/web/';
            break;
        default :
            return domain+'/human/api.watch/watch_Login_out';
        break;
    }
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}

function PrefixInteger(num, length) {
 return (Array(length).join('0') + num).slice(-length);
}

function Clock() {
    var date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.date = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    this.DateDay = date.getMonth() + 1 +'月'+this.date+'日';
    this.day = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()];
    this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    this.getDate = function(){
        return this.date;
    }
    this.getDay = function(){
        return this.day;
    }
    this.getHours = function(){
        return this.hour;
    }
    this.getMinutes = function(){
        return this.minute;
    }
    this.getSeconds = function(){
        return this.second;
    }
    this.getDateDay = function(){
        return this.DateDay;
    }
    this.display = function(getMinutes,getHours,getday,getdate,getSecond) {
        var clock = new Clock();
        getMinutes.innerHTML = clock.getMinutes();
        getHours.innerHTML = clock.getHours();
        getday.innerHTML = clock.getDay();
        getdate.innerHTML = clock.getDateDay();
        if(this.second%2 == 0){
            getSecond.style.color = 'white';
        }else{
            getSecond.style.color = 'red';
        }
        window.setTimeout(function() {clock.display(getMinutes,getHours,getday,getdate,getSecond);}, 1000);
    }; 
}

function getOut() {
    $api.rmStorage('access_token');
    $api.rmStorage('user_id');
    $api.rmStorage('username');
    $api.rmStorage('shop_id');
    if($api.getStorage('clientId') && $api.getStorage('clientId') != 'undefined'){
        api.openWin({
            name: 'login',
            url: './login.html',
        });
    }else{
        window.setTimeout(function() {getOut();}, 500);
    }
}