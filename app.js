var app = new Vue({
    el: "#app",
    data() {
        return {
            todos: [],
            todo: ""
        }
    },
    // todos : array kosong yg nantinya menampung semua isian user di dalam form 
    // todo : string kosong yg akan menampung tiap isian user di dalam form

    created() {
        this.loadLocalStorage();
    },
    watch: {
        todos() {
            localStorage.setItem("todos", JSON.stringify(this.todos));
        }
    },

    methods:
    {
      loadLocalStorage() {
        const ls = JSON.parse(localStorage.getItem("todos"));
        console.log(ls);
            if(ls == null) { return; }
             this.todos = ls;
             console.log(this.todos);
      },
      addTodo() {
          this.todos.push(this.todo);
          this.todo = "";
      },
      deleteTodo(index) {
        this.todos.splice(index, 1);
      }
    },
    // methods utk membuat fungsi menambah dan menghapus item todolist
    // push() : menambah item ke dalam array
    // splice() : menghapus item array tertentu
    // nilai index : menentukan mana yg dihapus
    // nilai 1 : menentukan banyak item yg dihapus
    
})