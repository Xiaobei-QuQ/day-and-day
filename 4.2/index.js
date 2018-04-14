function flatten(arr,result,depth){
    depth--;
    for(var i = 0;i<arr.length;i++){
      var value = arr[i]
      if(depth> -1 && Array.isArray(value)){
        flatten(value,result,depth)
      }else{
        result.push(value)
      }
    }return result
  }
  var a = [1,[1,[1,[23,32],32],3232],[[3]],[4]];
  var result=[];
  var depth= 0;
  
  flatten(a,result,depth);
  console.log(result);
//结果是[ 1, [ 1, [ 1, [Object], 32 ], 3232 ], [ [ 3 ] ], [ 4 ] ]
//这个其实是bug,实际上打印出来的就是原数组