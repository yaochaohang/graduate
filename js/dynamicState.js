window.onload{
	var list = document.querySelectorAll('#list a')
	for(var i=0 ; i<list<length ; i++){
		list[i].index = i
		list[i].onclick=function(){
			list[this.index].style.background="#CCCCCC"
			list[this.index].style.color="#555555"
		}
	}
 }