let str = "I'm?���going�??�to�?�take�??�a?�trip�?�to��?daocheng�?�on��May Day."
//去除特殊字符和问号，只保留字母和单引号，对于特殊符号后面问号跟着的,如果是字母就转换成大写

//查找问号后面是字母的字符
var patt1 = /(?<=\?)\w/ig;
//将该字符变为大写
str = str.replace(patt1, function(a){
    return a.toUpperCase();
});

//对于连续出现的非单引号以及句号的特殊字符用空格代替
var patt2 = /(?!\'|\.)\W+/ig
str = str.replace(patt2, ' ');

console.log(str) // 'I'm going to take a trip to Daocheng on May Day.'