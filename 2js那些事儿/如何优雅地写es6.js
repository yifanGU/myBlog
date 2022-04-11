// 本内容出自博文https://juejin.cn/post/7016520448204603423
// 1、取值
const obj_1 = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
}

// 注意结构赋值不能是undefined
const {a:a1} = obj_1||{};


// 2、合并数据
const a2 = [1,2,3];
const b2 = [1,5,6];
const c2 = [...new Set([...a2,...b2])];//[1,2,3,1,5,6]

const obj2_1 = {
  a:1,
}
const obj2_2 = {
  b:1,
}
const obj2 ={...obj2_1,...obj2_2};

// 三、拼接字符串

const name = 'xiaomin'
const score = 59
const result = `${name} 考试成绩${score>60?"及格":"不及格"}`

// 四、if条件判断
type = 1
if ([1,2,3,4].includes(type)){
    // blablabla
}

// 五、列表搜索
const a_5 = [1,2,3,4,5]
const result_5 = a_5.find(item=>item===3);


// 六、数组扁平化
const deps = {
    '采购部':[1,2,3],
    '人事部':[5,8,12],
    '行政部':[5,14,79],
    '运输部':[3,64,105],
    }
let member = Object.values(deps).flat(Infinity)
// flat 不支持ie

// 七、可选操作符
const name7 = obj?.name

// 八、添加对象属性
let obj8 = {};
let index8 = 1;
obj8[`topic${index8}`] = '话题内容';


// 九、输入框非空
if((value??'') !== ''){
    //...
  }