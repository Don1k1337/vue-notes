const App = {
    data() {
        return {
            inputPlaceholder: 'Input your note for Notes list',
            title: 'Notes list',
            inputValue: '',
            notes: [],
        }
    },
    methods: {
        inputHandler(event) {
            this.inputValue = event.target.value;
        },
        addNewNote(note) {
            if (this.inputValue !== '') {
                note = this.inputValue;
                this.notes.push(note);
                this.inputValue = ''
            }
        },
        removeNote(note) {
            this.notes.pop(note);
        }
    }
}



Vue.createApp(App).mount('#app')