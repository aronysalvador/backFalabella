const Router = require("express-promise-router");
const apiResponse = require("../Utils/ApiResponse");

const route = new Router();

route.post("/", async (req, res) => {
    try{
      let numberInicial = req.body.number
      let dataSalida = await getArray(numberInicial)   

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

route.post("/maxLength", async (req, res) => {
  try{
    let numberInicial = req.body.number
    let dataSalida = await getArrayMax(numberInicial)   

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

const getArray = numberInicial => {
  let number = parseInt(numberInicial)
  let outArray = [number];
  while(number > 1){
    if(number % 2 == 0){     
       number = parseInt(number/2)
       outArray.push(number)
    }else{
       number = (number*3)+1
       outArray.push(number)
    }
  }
  return outArray;
}

const getArrayMax = n => {
    var res = [1, 1];
    for (var k = 2; k <= n; k++) {
        var c = collatz(k);
        if (c > res[1]) {
            res[0] = k;
            res[1] = c;
        }
    }
    return res;

}

var precomp = {1: 1};

const collatz = (n) => {
    var orig = n;
    var len = 0;
    while (!(n in precomp)) {
        n = (n % 2) ? 3*n + 1 : n / 2;
        len++;
    }
    return (precomp[orig] = len + precomp[n]);
}

module.exports = route;
