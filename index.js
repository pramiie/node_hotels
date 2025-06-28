var _ = require('lodash');
console.log("hello");
var add=function(a,b){
    return a+b;
}
console.log(add(3,7));
(function(){
    console.log('hellllo');
})();

var data=["person", "person",1,2,1,2,'2']
console.log(_.uniq(data))
console.log(_.isString(5))//lodash