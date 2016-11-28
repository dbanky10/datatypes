module.exports = function dataTypes(data){
if (typeof data === 'string'){
  return data.length;
}
else if (typeof data === 'undefined'){
  return "no values";
}
else if (typeof data === 'boolean'){
  return boolean;
}
else if (typeof data === 'number'){
  if (data < 100){
    return "less than 100";
  }
  else if (data > 100){
    return "more than 100";
  }
  else {
    return "equal to 100";
  }
  }
else if (data instanceof Array ){
  if (data){
    return data[3];
  }
  else {
    return "undefined";
  }
}
else if (typeof data === 'function'){
  var callback = function(arg){
    if (arg === true){
      return 'called callback';
    }
  };
}
};
