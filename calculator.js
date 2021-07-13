/* global Vue */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello Vue!",
      number1: 0,
      number2: 0,
      number3: 0,
      totalSum: null,
      totalProduct: null,
    };
  },
  methods: {
    sum: function () {
      console.log("Adding the numbers.");
      this.totalSum = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    },
    product: function () {
      console.log("Multipling the numbers.");
      this.totalProduct = parseInt(this.number1) * parseInt(this.number2) * parseInt(this.number3);
    },
  },
});
