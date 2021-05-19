
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
                this.tasks.push(this.newTask);
                this.newTask = "";
            }
        },
        deleteTask(index) {
            this.taskDelete.push(this.tasks[index]);
            this.tasks.splice(index, 1);
        },
        changeValueTask(value, index) {
            this.tasks[index] = value;
        },
        completeTask(index) {
            console.log(this.tasks[index]);
            this.taskComplete.push(this.tasks[index]);
            this.tasks.splice(index, 1);
        },
        redoTask(index) {
            this.tasks.push(this.taskComplete[index])
            this.taskComplete.splice(index, 1);
        },
        redoDeleteTask(index) {
            this.tasks.push(this.taskDelete[index])
            this.taskDelete.splice(index, 1);
        },
        deleteAllTask() {
            this.taskDelete = [];
        },
    },

})
