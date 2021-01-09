const Router = require("express-promise-router");
const apiResponse = require("../Utils/ApiResponse");

const route = new Router();

route.post("/", async (req, res) => {
    try{
      let arrayInicial = req.body.array
      let dataSalida = await getArray(arrayInicial)   

      const response = apiResponse(
        dataSalida,
        200,
        "Operacion exitosa"
      );
      res.send(response);

    }catch(error){
      res.send(apiResponse([], 500, error));
    }
})

const getArray = originalArray => {
  let newNums = [...originalArray];
  newNums.sort((i, j) => {return i - j}); 
  let outArray = [];
  originalArray.forEach( (value, i) => {
    let seq = newNums.indexOf(originalArray[i]);
    outArray.push(seq);
    newNums.splice(seq, 1);
  });
  return outArray;
}


module.exports = route;

// var countDatos = function(array) {
//   var n = array.length;
//   if(n<1){
//     return[];
//   }
//   var res = new Array(n).fill(0);
//   var Node = function(val,sum){
//     this.val=val;
//     this.sum= sum;
//     this.dup=1
//   }

//   var insert = function(val, node, i ,preSum){
//     if(!node){
//       node = new Node(val,0)
//       res[i]=preSum;
//     }else if (node.val == val){
//       node.dup++;
//       res[i] = node.sum + preSum;        
//     }else if (val < node.val) {
//       node.sum++;
//       node.left=insert(val,node.left , i ,preSum)
//     }else {
//       node.right=insert(val,node.right, i , preSum+ node.dup + node.sum)
//     }
//     return node;
//   }

//   var root=null
//   for(var i=n-1; i>=0;i--){
//     root= insert(array[i], root, i, 0)
//   }
//   return res
// }