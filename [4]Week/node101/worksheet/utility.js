function add(a,b) {
    return a+b;
  }
  module.exports.add = add;

function compare(a, b){
    return JSON.stringify(a) === JSON.stringify(b);
  }
  module.exports.compare = compare;


  function largest(a){
    let b = 0;
    for(let i = 0; i < a.length; i++){
        a[i] > b ? b = a[i] : false;
    }

    return b;
  }
  module.exports.largest = largest;
