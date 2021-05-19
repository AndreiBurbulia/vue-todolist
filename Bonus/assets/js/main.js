/*
Bonus (opzionale)
Quando una task é stata completa allora vuole che venga inserita in un'altra colonna tipo "tasks completate"
ma vuole anche poter indicare che la task é stata completata (con un icona cliccabile)
se una task é stata completa allora vuole che venga inserita in un'altra colonna tipo "tasks completate"
se una task é stata marcata come completa per sbaglio allora vuole poterla rimettere nella todo list (cliccando su un altra icona)
ah non é finita, dice che quando cancella una task non vuole che questa venga subito rimossa, ma vuole che resti visibile ma venga spostata in una colonna tipo "cestino"
si, l'utente é un rompi scatole, dice infine che vuole poter rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino"
Il nostro utente per ora sembra non avere altre richieste ... ma chissá se dopo gli viene in mente che vuole anche poter rimettere una task cancellata nella lista di tasks da fare, magari l'ha cancellata per sbaglio.
*/

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

    mounted() {
        document.getElementById("inputTask").addEventListener("keyup", (e) => {
            let tasto = e.key;
            if (tasto === "Enter") {
                this.addTask();
            }
        })
    },

})