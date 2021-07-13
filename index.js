/* global Vue */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      message1: "Hello Vue!",
      hidden: false,
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" },
        { text: "Sleep" },
      ],
      words: ["tea", "apple", "albino"],
      newWord: "",
    };
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
    seeMessage: function () {
      console.log("Toggling hidden");
      this.hidden = !this.hidden;
    },
    addWord: function () {
      console.log("Adding word");
      console.log(this.newWord);
      this.words.push(this.newWord);
      this.newWord = "";
    },
  },
});
