//全局变量
var isDrag = false; //是否开始拖拽 false 不拖拽
var disX, disY; //鼠标相对于图片的位置



//初始化可以被拖动的图片
window.onload = function() {
    console.log("初始化");

    //初始化被拖动的图片
    var pic1 = document.getElementById('pic');
    enabledrag(pic1);

}

//注册拖动所需事件函数
function enabledrag(obj) {
    obj.onmousedown = mouseDown;
    obj.onmousemove = mouseMove;
    obj.onmouseup = mouseUp;
}


//鼠标按下时
function mouseDown(e) {
    isDrag = true;
    this.style.cursor = 'move';
    e = e || window.event; //兼容性写法
    //鼠标位置
    var x = e.clientX;
    var y = e.clientY;
    //鼠标相对于图片的位置
    disX = x - this.offsetLeft;
    disY = y - this.offsetTop;
}

//鼠标移动时
function mouseMove(e) {
    if (!isDrag) {
        return;
    }
    e = e || window.event; //兼容性写法
    //鼠标位置
    var x = e.clientX;
    var y = e.clientY;
    //若鼠标在框内则修改图片位置
    var filmstage = document.getElementById("filmStage");
    if (x > parseInt(filmstage.style.left) && x < parseInt(filmstage.style.left) + parseInt(filmstage.style.width) && y > parseInt(filmstage.style.top)  && y <parseInt(filmstage.style.top) + parseInt(filmstage.style.height) ) {
        console.log("11");
        this.style.left = x - disX + 'px';
        this.style.top = y - disY + 'px';
    }
    //若鼠标超出框则视为抬起
    else{
        isDrag = false;
        this.style.cursor = "default";
    }


}

//鼠标抬起时
function mouseUp(e) {
    isDrag = false;
    this.style.cursor = 'default';
}

