/* global Vue, axios */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      message1: "Hello Vue!",
      hidden: false,
      hiddenTodo: false,
      todos: [],
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
    loadTodos: function () {
      console.log("I am loading todos...");
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response.data);
        this.todos = response.data;
        this.hiddenTodo = !this.hiddenTodo;
      });
    },
    postTodo: function () {
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          userId: 1,
          title: "Flintstone",
          completed: false,
        })
        .then(function (response) {
          console.log(response);
        });
    },
  },
});
