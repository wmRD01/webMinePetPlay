

// 定義使用者裝置資訊
let userAgent = '';
    let ucheck = '';
    let isLineApp  = ''; // Line 內建瀏覽器
    let isFbApp = '';// FB App 內建瀏覽器
    let isWeixinApp = ''; // 微信內建瀏覽器


// 暫存全螢幕使用方式 (1：滑動；2：點擊)
let touchType = 0;
// 定義瀏覽器原本可視區的高度
let orginalHeight = 0;

//var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) != null;
//var isiPad = navigator.userAgent.match(/iPad/i) != null;
//var isiPhone = navigator.userAgent.match(/iPhone|iPod/i) != null;
//var isAndroid = /android/i.test(navigator.userAgent || navigator.vendor || window.opera);

//var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
let xyz = 1;//
// 設定遊戲Canvas尺寸
const resizeCanvas = () => {
    //alert('c');
    const canvas = document.querySelector('canvas');
    const width = window.innerWidth;
    const height = window.innerHeight;
    const screenRatio = width / height;
    const canvasRatio = canvas.width / canvas.height;

    if (width < 1280) {

        if (screenRatio < canvasRatio) {

            if (window.orientation == 0 || window.orientation == 180) {
                // alert('a');
                document.querySelector('#Cocos2dGameContainer').style.width = `${height}px`;
                document.querySelector('#Cocos2dGameContainer').style.height = `${width}px`;

                document.querySelector('#Cocos2dGameContainer').classList.remove('rotate');
            }
            if (window.orientation == 90 || window.orientation == -90) {
                //   alert('AA');

            }

        } else {
            //alert('c');
            if (window.orientation == 0 || window.orientation == 180) {
                // alert('Q');
            }
            if (window.orientation == 90 || window.orientation == -90) {
                // alert('Y');
                canvas.style.width = `${width}px`;
                canvas.style.height = `${width / canvasRatio}px`;
                document.querySelector('#Cocos2dGameContainer').style.width = `${width}px`;
                document.querySelector('#Cocos2dGameContainer').style.height = `${width / canvasRatio}px`;
                document.querySelector('#Cocos2dGameContainer').classList.add('rotate');
            }
        }
    }
};
const resizeCanvas2 = () => {
    //alert('c');
    const canvas = document.querySelector('canvas');
    const width = window.innerWidth;
    const height = window.innerHeight;
    const screenRatio = width / height;
    const canvasRatio = canvas.width / canvas.height;

    if (width < 1280) {

        if (screenRatio < canvasRatio) {

            if (window.orientation == 0 || window.orientation == 180) {
                // alert('a');
                document.querySelector('#Cocos2dGameContainer').style.width = `${height}px`;
                document.querySelector('#Cocos2dGameContainer').style.height = `${width}px`;

                document.querySelector('#Cocos2dGameContainer').classList.remove('rotate');
            }
            if (window.orientation == 90 || window.orientation == -90) {
                //   alert('AA');
            }

        } else {
            //alert('c');
            if (window.orientation == 0 || window.orientation == 180) {
                // alert('Q');
            }
            if (window.orientation == 90 || window.orientation == -90) {
                // alert('Y');

                canvas.style.width = `${width}px`;
                canvas.style.height = `${width / canvasRatio}px`;
                document.querySelector('#Cocos2dGameContainer').style.width = `${width}px`;
                document.querySelector('#Cocos2dGameContainer').style.height = `${width / canvasRatio}px`;
                document.querySelector('#Cocos2dGameContainer').classList.add('rotate');
            }
        }
    }
};
// 設定遊戲Canvas尺寸
const resizeCanvas3 = () => {
    //alert('c');
    const canvas = document.querySelector('canvas');
    const width = window.innerWidth;
    const height = window.innerHeight;
    const screenRatio = width / height;
    const canvasRatio = canvas.width / canvas.height;

    if (width < 1280) {

        if (screenRatio < canvasRatio) {

            if (window.orientation == 0 || window.orientation == 180) {
                // alert('a');
                document.querySelector('#Cocos2dGameContainer').style.width = `${height}px`;
                document.querySelector('#Cocos2dGameContainer').style.height = `${width}px`;

            }
 

        } else {

            if (window.orientation == 90 || window.orientation == -90) {
                // alert('Y');
                canvas.style.width = `${width}px`;
                canvas.style.height = `${width / canvasRatio}px`;
                document.querySelector('#Cocos2dGameContainer').style.width = `${width}px`;
                document.querySelector('#Cocos2dGameContainer').style.height = `${width / canvasRatio}px`;
         
            }
        }
    }
};
// 使用上滑方式使網頁全畫面顯示
const toSwipePage = () => {
    // alert('Y');
    // 判斷裝置為直向
    if (window.orientation == 0 || window.orientation == 180) {
        // alert('5');
        // document.querySelector('#orientationswipe2').innerHTML = orginalHeight;
        if (window.innerHeight >= orginalHeight) {
            // alert('1');
            //  document.querySelector('#orientationswipe2').innerHTML = orginalHeight;
            if (window.innerHeight >= orginalHeight * 1.01) {
                orginalHeight = window.innerHeight;
                //判斷滑動後的可視區比較高
                if (xyz == 2) {
                    // alert('3');
                    xyz = 1;
                    document.querySelector('#swipeBox').classList.remove('fullscreen');//addfinger
                }
                else {
                    // alert('5');
                    document.querySelector('#swipeBox').classList.add('fullscreen');//roemovefinger
                }
                document.body.scrollTo({ top: 0 });
            }
            // 重新設定遊戲Canvas尺寸
            resizeCanvas();
        }
        else {

            orginalHeight = window.innerHeight;
            // 判斷滑動後的可視區比較小
            if (xyz == 2) {
                xyz = 1;
                document.querySelector('#swipeBox').classList.remove('fullscreen');//addfinger
            }
            else {
                document.querySelector('#swipeBox').classList.remove('fullscreen');//addfinger
            }
            // 讓滑動提示面板滾動到最上面s
            document.body.scrollTo({ top: 0 });
        }
    }
    // 判斷裝置為橫向
    if (window.orientation == 90 || window.orientation == -90) {

        //alert('4');
        if (window.innerHeight >= orginalHeight) {
            //alert('9');
            if (window.innerHeight >= orginalHeight) {
                orginalHeight = window.innerHeight;
                // 判斷滑動後的可視區比較高
                document.querySelector('#swipeBox').classList.add('fullscreen');//roemovefinger
                document.body.scrollTo({ top: 0 });
            }

            // 重新設定遊戲Canvas尺寸
            resizeCanvas2();
        }
        else {
            orginalHeight = window.innerHeight;
            // 判斷滑動後的可視區比較小
            if (xyz == 1) {
                // alert('6');
                xyz = 2;
                document.querySelector('#swipeBox').classList.add('fullscreen');//roemovefinger
            }
            else {
                //  alert('3');

                document.querySelector('#swipeBox').classList.remove('fullscreen');//addfinger
            }
        }
        // 讓滑動提示面板滾動到最上面
        document.body.scrollTo({ top: 0 });
    }

};

// 使用Fullscreen API使網頁全畫面顯示
const toFullScreen = (event) => {
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
            if (changeevent.currentTarget.webkitFullscreenElement) {
                setTimeout(() => {
                    // 重新設定遊戲Canvas尺寸
                    resizeCanvas3();
                }, 500);
            } else {
                setTimeout(() => {
                    // 重新設定遊戲Canvas尺寸
                    resizeCanvas3();
                }, 500);

                // 顯示"點擊提示面板"
                document.querySelector('#touchBox').classList.add('active');
            }

        }, false);

        // prettier-ignore
        document.addEventListener('mozfullscreenchange', (changeevent) => {
            if (changeevent.currentTarget.mozFullScreenElement) {
                setTimeout(() => {
                    // 重新設定遊戲Canvas尺寸
                    resizeCanvas3();
                }, 500);
            } else {
                setTimeout(() => {
                    // 重新設定遊戲Canvas尺寸
                    resizeCanvas3();
                }, 500);

                // 顯示"點擊提示面板"
                document.querySelector('#touchBox').classList.add('active');
            }

        }, false);

        // prettier-ignore
        document.addEventListener('fullscreenchange', (changeevent) => {
            if (changeevent.currentTarget.fullScreenMode) {
                setTimeout(() => {
                    // 重新設定遊戲Canvas尺寸
                    resizeCanvas3();
                }, 500);
            } else {
                setTimeout(() => {
                    // 重新設定遊戲Canvas尺寸
                    resizeCanvas3();
                }, 500);

                // 顯示"點擊提示面板"
                document.querySelector('#touchBox').classList.add('active');
            }

        }, false);

    });
};


// 網頁的DOM已建構完畢，但圖像和CSS等資源未載入
document.addEventListener('DOMContentLoaded', () => {
    // 取得使用者裝置資訊
    userAgent = navigator.userAgent.toLowerCase();
    ucheck = navigator.userAgent;
    isLineApp  = ucheck.indexOf("Line") > -1; // Line 內建瀏覽器
    isFbApp = ucheck.indexOf("FBAV") > -1;// FB App 內建瀏覽器
    isWeixinApp = userAgent .match(/MicroMessenger/i) == "micromessenger"; // 微信內建瀏覽器

    if(isLineApp || isFbApp || isWeixinApp){
         // not need change
    }
    else if(userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)) {
        // 判斷使用者裝置資訊為行動裝置
        if (userAgent.match(/iphone/i)) {
            // 判斷使用者裝置資訊為iPhone

            if (navigator.standalone !== true) {
                // 顯示"滑動提示面板"
                document.querySelector('#swipeBox').classList.add('active');
                // 紀錄全螢幕使用方式為"滑動"
                touchType = 1;
            }


        } else {
            // 判斷使用者裝置資訊為其他裝置

            if (navigator.standalone !== true) {
                // 顯示"點擊提示面板"
                document.querySelector('#touchBox').classList.add('active');
                // 紀錄全螢幕使用方式為"點擊"
                touchType = 2;
            }


        }
    }
});
// 網頁畫面載入完成
window.onload = () => {

    // 取得瀏覽器原本可視區的高度
    orginalHeight = window.innerHeight;

    // 讓滑動提示面板滾動到最上面
    document.body.scrollTo({ top: 0 });


    // 判斷全螢幕使用方式
    if (touchType === 1) {
        // 全螢幕使用方式為"滑動"
        if (window.orientation == 0 || window.orientation == 180) {
            // 設定Canvas尺寸
            xyz = 1;
            resizeCanvas();
            //alert('Y');
        }
        //==
        if (window.orientation == 90 || window.orientation == -90) {
            // 設定Canvas尺寸
            xyz = 2;
            resizeCanvas2();
            //alert('s');
        }
        // 使用者往上滑動瀏覽器網頁部分，使網頁全螢幕顯示
        window.onresize = toSwipePage;
    } else if (touchType === 2) {
        // 全螢幕使用方式為"點擊"

        // 使用者點擊"點擊提示面板"，執行"toFullScreen Function"
        document.querySelector('#touchBox').addEventListener('click', toFullScreen);
    }
    else {
        // 電腦版的需求

    }
};
