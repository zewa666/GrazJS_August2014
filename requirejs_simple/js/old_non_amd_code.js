var Module = function() {
  this.sayHello = function() {
    return $("<div>Hello</div>")[0].outerHTML;
  };
};
