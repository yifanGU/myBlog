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
<!-- 接口 -->
<!-- 对象形状 -->
interface Point{
    x: number;
    y: number;
}
<!-- 函数签名 -->
interface SetPoint{
    (x:number,y:number):void;
}
```

```
<!-- 类型别名 -->
type Point = {
    x:number;
    y:number;
};
type SetPoint = (x:number,y:number)=> void;

```
