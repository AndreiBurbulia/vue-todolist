
const app = new Vue({
    el: "#app",
    data: {
        logo: "./assets/img/logo.png",
        newTask: "",
        tasks: [
            "Task 1",
            "Task 2",
            "Task 3"
        ],
        taskComplete: [],
        taskDelete: [],
    },
    methods: {
        addTask() {
            if (this.newTask === "" || this.newTask === " " || this.newTask === "  ") {
                alert("Devi inserire qualcosa")
            } else {
                this.tasks.unshift(this.newTask);
                this.newTask = "";
            }
        },
        deleteTask(index) {
            this.taskDelete.unshift(this.tasks[index]);
            this.tasks.splice(index, 1);
        },
        // changeValueTask(value, index) {
        //     this.tasks[index] = value;
        // },
        updateTask() {
            alert("La task è stata modificata!")
        },
        completeTask(index) {
            this.taskComplete.unshift(this.tasks[index]);
            this.tasks.splice(index, 1);
        },
        redoTask(index) {
            this.tasks.unshift(this.taskComplete[index])
            this.taskComplete.splice(index, 1);
        },
        redoDeleteTask(index) {
            this.tasks.unshift(this.taskDelete[index])
            this.taskDelete.splice(index, 1);
        },
        deleteAllTask() {
            let conferm = prompt("Sei sicuro di voler cancellare tutta la lista ? Y/N");
            if (conferm.toLowerCase() === "y") {
                this.taskDelete = [];
            }
        },
    },

})
