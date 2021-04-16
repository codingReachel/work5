//1.实际运行结果5 -> 5,5,5,5,5

//2.输出变成5 -> 0,1,2,3,4
//setTimeout是异步的，for是同步的，js是单线程的，一个时间点只能做一件事，优先处理同步任务； 按照代码从上往下执行，遇到异步，就挂起，放到异步任务里，继续执行同步任务，只有同步任务执行完了，才去看看有没有异步任务，然后再按照顺序执行
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000);
}
console.log(new Date, i);

//3.输出变成0->1->2->3->4
//setTimeout()是一次执行函数，所以需要让它在不同的时间执行才可以
//但是这样的话最后那行打印语句还是会抢先打印，那就要让setTimeout()抢先执行完
//使用promise()
for (let i = 0; i < 5; i++) {
    let p = new Promise(function(resolve, reject){
        setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
    });
}
console.log(new Date, i);
