const App = {
    data() {
        return {
            inputPlaceholder: 'Input your task for To-Do',
            title: 'To-Do list',
            inputValue: '',
            notes: [],
        }
    },
    methods: {
        inputHandler(event) {
            this.inputValue = event.target.value;
        },
        addNewTask(task) {
            task = this.inputValue;
            this.notes.push(task);
            this.inputValue = ''
        },
        // inputKeyPress(event) {
        //     if (event.key === 'Enter') {
        //         this.addNewTask();
        //     }
        // }
    }
}



Vue.createApp(App).mount('#app')