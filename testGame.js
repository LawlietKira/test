document.body.innerHTML= `<div id="asd">
    <div class="row">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
    <div class="row">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
    <div class="row">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
</div>
<button type="button" onclick="reset();">重 置</button>
`
var style = document.createElement('style')
style.innerText=`
.box{
    width:100px;
    height:100px;
    background-color:grey;
    margin: 2px;
    float: left;
    line-height: 100px;
}
.red {
    background-color:red;
}
.green{
    background-color:green;
}
.row {
    display: flex;
}
`
document.head.append(style)

var i = 0;
var a = [],
    b = [];
document.getElementById('asd').addEventListener('click', function (e){
	let tar = e.target;
	if (tar.className.indexOf('red') > -1 || tar.className.indexOf('green') > -1) {
	    return;
	}
	let c = undefined;
	if (i % 2 === 0) {
	    tar.className='box red'
	    a.push(tar)
	    if (a.length > 3) {
	        c = a.shift()
	    }
	} else {
	    tar.className='box green'
	    b.push(tar)
	    if (b.length > 3) {
	        c = b.shift()
	    }
	}
	if (c) {
	    c.className = 'box'
	    c.innerText = ''
	}
	tar.innerText = i;
	console.log(tar)
	i++
})
var reset = function () {
    i = 0;
    a = [];
    b = [];
    document.querySelectorAll('.box').forEach(item => {
        item.className = 'box'
        item.innerText = ''
    })
}
