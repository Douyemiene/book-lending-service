const BookService = require("./bookServiceClass");

//IIFE used to implement BookServiceSingleton
const BookServiceSingleton = (function () {
  let instance;

  function createInstance() {
    return new BookService();
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

module.exports = BookServiceSingleton.getInstance();
