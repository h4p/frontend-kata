const myModule = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const unboundGetX = myModule.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  const boundGetX = unboundGetX.bind(myModule);
  console.log(boundGetX());
  // expected output: 42
