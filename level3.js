//创建一个异步队列，让队列里面的函数有序执行
function Student(name) {
    function People(name) {
        this.task = [];
        let fn = () => {
            console.log("Hi! This is " + name + "!");
            this.next();
        }
        this.task.push(fn);
    
        //这行代码是必须的，表示异步队列的开始调用，否则就要在链式调用之后加上next(),写法会发生较大改变
        setTimeout(() => {
            this.next();
        }, 0)
        return this;
    }

    People.prototype.sleep = function (time) {
        let fn = () => {
            setTimeout(() => {
                console.log("Wake up after " + time);
                this.next();
            }, time * 1000)
        }
        this.task.push(fn);
        return this;
    }

    People.prototype.sleepFirst = function (time) {
        let fn = () => {
            setTimeout(() => {
                console.log("Wake up after " + time);
                this.next();
            }, time * 1000)
        }
        //向队列的开头添加
        this.task.unshift(fn);
        return this;
    }

    People.prototype.study = function (course) {
        let fn = () => {
            console.log("Study " + course + "~");
            this.next();
        }
        this.task.push(fn);
        return this;
    }
    People.prototype.next = function () {
        let fn = this.task.shift();

        fn && fn();
    }

    return new People(name);
}


// Student('fxy');
// Student('fxy').sleep(3).study('javascript');
// Student('fxy').study('javascript').study('Vue');
// Student('fxy').sleepFirst(5).study('Ajax');