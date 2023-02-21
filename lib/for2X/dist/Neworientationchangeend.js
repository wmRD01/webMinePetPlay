// 網頁的DOM已建構完畢，但圖像和CSS等資源未載入
document.addEventListener('DOMContentLoaded', () => {
    // alert('aaaa');
    // 取得使用者裝置資訊
    userAgent      = navigator.userAgent.toLowerCase();
    ucheck         = navigator.userAgent;
    isLineApp      = ucheck.indexOf("Line") > -1; // Line 內建瀏覽器
    isFbApp        = ucheck.indexOf("FBAV") > -1;// FB App 內建瀏覽器
    isappleApp     = ucheck.indexOf('Safari') > -1; //是蘋果瀏覽器
    isAndroidApp   = ucheck.indexOf('Version') > -1; //是安卓APP
    isWeixinApp    = userAgent.match(/MicroMessenger/i) == "micromessenger"; // 微信內建瀏覽器
    isbaiduApp     = userAgent.match(/baiduboxapp/i) == "baiduboxapp"; // 手机百度
    isbaidubrowser = userAgent.match(/baidubrowser/i) == "baidubrowser"; // 百度浏览器
    isucbrowser    = userAgent.match(/UCBrowser/i) == "ucbrowser"; // UC浏览器
    isqqbrowser    = userAgent.match(/MQQBrowser/i) == "mqqbrowser"; // 全部QQ
    isqqApp        = userAgent.match(/QQ/i) == "qq"; // 全部QQ
    isweibo        = userAgent.match(/Weibo/i) == "weibo"; // 微博
});
// 使用Fullscreen API使網頁全畫面顯示(Android用)
const androidToFullScreen = (event) => {
    event.preventDefault();
    // 隱藏"點擊提示面板"
    document.querySelector('#touchBox').classList.remove('active');
    const asyncFull = async () => {
        // 執行FullScreen API
        if (document.body.requestFullscreen) {
            await document.body.requestFullscreen();
        } else if (document.body.msRequestFullscreen) {
            await document.body.msRequestFullscreen();
        } else if (document.body.mozRequestFullScreen) {
            await document.body.mozRequestFullScreen();
        } else if (document.body.webkitRequestFullscreen) {
            await document.body.webkitRequestFullscreen();
        }
    };
    asyncFull().then(() => {
        // prettier-ignore
        document.addEventListener('webkitfullscreenchange', (changeevent) => {
            if (document.webkitIsFullScreen) {
            } else {
                // 顯示"點擊提示面板"
                document.querySelector('#touchBox').classList.add('active');
            }
        }, false);
        // prettier-ignore
        document.addEventListener('mozfullscreenchange', (changeevent) => {
            if (document.mozFullScreen) {
            } else {
                // 顯示"點擊提示面板"
                document.querySelector('#touchBox').classList.add('active');
            }
        }, false);
        // prettier-ignore
        document.addEventListener('fullscreenchange', (changeevent) => {
            if (document.fullscreen) {
            } else {
                // 顯示"點擊提示面板"
                document.querySelector('#touchBox').classList.add('active');
            }
        }, false);

    });
};
// 手機旋轉螢幕時判斷(IOS用)
const iosOrientation = () => {
    if(!judgeIOSFullscreen()){
        // 沒有全螢幕要出現手勢
        document.querySelector('#swipeBox').classList.remove('fullscreen');
    }
    document.body.scrollTo({ top: 0 });
    document.documentElement.scrollTop = 0;
};
// 手機畫面尺寸改變時判斷(IOS用)
const iosReSizeFunc = () => {
    if(judgeIOSFullscreen()){
        document.querySelector('#swipeBox').classList.add('fullscreen');
    }else{
        // 沒有全螢幕要出現手勢
        document.querySelector('#swipeBox').classList.remove('fullscreen');
    }
    document.body.scrollTo({ top: 0 });
    document.documentElement.scrollTop = 0;
};
// 因為手機寬高不會因為手機方向改變而改變且無法得知瀏海最後剩下的高度 所以 直:高的比例大於0.9即可 橫:網頁高=螢幕寬 
const judgeIOSFullscreen = () =>{
    // 利用網頁的寬高來判斷直橫
    if(window.innerHeight >= window.innerWidth){
        if(window.innerHeight/window.screen.height < 0.9){
            // 沒有全螢幕
            return false;
        }
        return true;
    }else{
        if(window.innerHeight/window.screen.width < 0.9){
            // 沒有全螢幕
            return false;
        }
        return true;
    }
};
window.CocosLoadEnd = () =>{
    if(isLineApp || isFbApp || isWeixinApp || isbaiduApp || isbaidubrowser || isucbrowser || isqqbrowser || isqqApp || isweibo){
         // not need change
    }
    else if(userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)) {
        // 判斷使用者裝置資訊為行動裝置
        if (userAgent.match(/iphone/i)) {
            // 判斷使用者裝置資訊為iPhone
                // 顯示"滑動提示面板"
                document.querySelector('#swipeBox').classList.add('active');
                iosReSizeFunc();
                // 監聽
                window.addEventListener('orientationchange', iosOrientation);
                window.addEventListener('resize', iosReSizeFunc);
        } else {
            // 判斷使用者裝置資訊為其他裝置
            if (navigator.standalone !== true && !isAndroidApp) {
                // 顯示"點擊提示面板"
                document.querySelector('#touchBox').classList.add('active');
                // 使用者點擊"點擊提示面板"，執行"toFullScreen Function"
                document.querySelector('#touchBox').addEventListener('click', androidToFullScreen);
            }
        }
    }
};