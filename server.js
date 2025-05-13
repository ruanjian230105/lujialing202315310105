const tape=require('tape');
function add(num1,num2){
    return num1+num2;
}
function minus(num1,num2){
    return num1-num2;
}
tape("function test",asserts=>{
    asserts.equal(add(1,2),3,"finished");
    asserts.equal(add(3,4),7,"finished");
    asserts.equal(minus(6,4),2,"finished");
    asserts.equal(minus(4,2),2,"finished");
    asserts.end();
});
//这是我的第一个GitHub项目
