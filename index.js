const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById("moive");

// var sid = movieSelect.selectedIndex;
// var movieValue = movieSelect[sid].value;


//1.获得下拉列表框对象的value属性值就是选中项的value值
// var selected_val = document.getElementById(select_id).value;
//2.或者通过下拉列表框对象的value属性值就是选中项的value值
// var sel = document.getElementById(select_id);
// var selected_val = sel.options[sel.selectedIndex].value;

var number = 0;

// 对座位进行选择
for(let i = 0; i < seats.length; i++){
    seats[i].onclick = function(){
        if(seats[i].className.indexOf('selected') > -1){
            seats[i].classList.remove('selected');
            console.log("取消选择");
            number--;
            count.innerHTML = number;
            // 获得当前选项卡票价
            var movieValue = movieSelect.options[movieSelect.selectedIndex].value;
            total.innerHTML = number * movieValue;
        }else{
            seats[i].classList.add('selected');
            console.log("选择");
            number++;
            count.innerHTML = number;
            var movieValue = movieSelect.options[movieSelect.selectedIndex].value;
            console.log(movieValue);
            total.innerHTML = number * movieValue;
        }
        
    }
}
