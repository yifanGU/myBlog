# 我的TS小抄
## 一、基础类型
- boolean、number、string、array、tuple、enum、any、unknown、never(永远没有返回值，死循环、报错)、void、null、undefined、object(ts专有，和js有区别)、{}(非null，undefined任意类型)、Object(和{}一致，区别是会对器内置方法toString，hasOwnProperty进行校验)
- js基本类型有null、boolean、number、symbol、object、undefined、string
## 二、类型断言
- <断言>变量，告诉编译器我知道自己在干什么
- as语法
- 类型守卫（typeof(基础数据类型)， instanceof(引用数据类型) in == === ！= ！==）
- in
## 三、接口
- 对类的一部分行为进行抽象，也常用于对对象形状的描述
- 索引签名 
```
[propName:string]:any;
```
- 接口和类型别名


```
<!-- 类 -->
class Dog{
    name:string
    age:number
    constructor(name,age){
        this.name = name
        this.age = age
    }
    bark(){
        alert('woof!')
    }
}
<!-- 继承 -->
class AttackDog extends Dog{
    // constructor 可选,如果不写，那就直接使用父类构造函数，如果写了，那么必须手动去调用父类的构造函数
    constructor(name,age){
        super(name,age)
    }
    bark(){
        alert('woooooooof!')
    }
}
<!-- 抽象类 -->
//抽象类只能被继承，不能通过抽象类创建实例
abstract class Animal{
    name:string
    constructor(name:string){
        this.name=name;
    }

    //抽象类的方法没有方法体，只能定义在抽象类中，必须被重写，否则报错
    abstract sayHello():void;
}


// 接口允许重复声明，允许重写，扩展
// 类型不允许重复声明,type 可以声明基本类型别名，联合类型，元组等类型
type Mytype = Number | String
type Mytype2 = [Number,String]

// 接口允许限制类的结构（有点类似abstract，但是所有方法必须是抽象方法）
// 接口中所有属性不允许有实际的值，方法不允许有方法体


<!-- 接口 -->
<!-- 对象形状 -->
interface Point{
    x: number;
    y: number;

    sayHello():void;
}
class Myclass implements Point{
    x:number;
    y:number;
    constructor(x:number,y:number){
        this.x = x
        this.y = y
    }
    sayHello(){
        console.log('hello')
    }
}
<!-- 函数签名 -->
interface SetPoint{
    (x:number,y:number):void;
}

<!-- 类型别名 -->
type Point = {
    x:number;
    y:number;
};
type SetPoint = (x:number,y:number)=> void;

<!-- 属性封装 -->
// TS可以在属性前添加修饰符
// 默认public，允许private public protected
// private只允许类内部访问
class Person{
    public name:string
    private age:number
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
    // 属性存取器,ts js都可以使用
    // 用的时候直接 .name
    get name(){
        return this.name
    }
    set name(name){
        this.name = name
    }

}

<!-- 泛型 -->
// 类型不明确，可以使用泛型,泛型允许只当多个
function fn<T>(a: T): T{
    return a
}
function fn2<K,T>(a:T,b:K):void{
    console.log(a)
    console.log(b)
}

// 可以直接调用
fn(1)
// 可以直接指定
fn<string>('hello')
// 可以用extends使用接口或者类
interfance: Inter{
    length:number
}
function fn2<T extends Inter>(a: T): number{
    return a.length
}
class MyClass<T>{
    name:T;
    constructor(name:T){
        this.name=name
    }
}
```
