function fibonacci(n){
    var arr = [];
    
    for (var i=0; i<n; i++){
        if(i===0){
            arr.push(0);
        }else if(i===1){
            arr.push(1);
        }else{
            arr.push(arr[i-1] + arr[i-2]);
        }
    };
    return arr;    
}

output = fibonacci(20);
console.log(output);
