var colCount    //列的数量
var colHeightArray = []   //列的高度的数组
var imgWidth = $('.cover img').outerWidth(true)
colCount = Math.floor($('.cover').width()/imgWidth)
for( var i= 0; i<colCount; i++){
	colHeightArray[i] = 0
}    //初始化列的高度的数组

$('.cover img').on('load',function(){    //摆放img
	var minValue = colHeightArray[0]
	var minIndex = 0
	for(var i=0; i<colCount; i++){       //获取列的高度最小的值和对应的下标
		if(colHeightArray[i]<minValue){
			minValue = colHeightArray[i]
			minIndex = i
		}
	}
	$(this).css({
		left: minIndex * imgWidth,
		top: minValue
	})
	colHeightArray[minIndex] += $(this).outerHeight(true)
})