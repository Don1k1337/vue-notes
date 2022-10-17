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
        addNewNote(note) {
            if (this.inputValue !== '') {
                note = this.inputValue;
                this.notes.push(note);
                this.inputValue = '';
                this.saveNotes();
            }
        },
        toUpperCase(item) {
          return item.toUpperCase();
        },
        removeNote(note) {
            this.notes.pop(note);
            this.saveNotes();
        },
        saveNotes() {
            const parsed = JSON.stringify(this.notes);
            localStorage.setItem('notes', parsed);
        }
    },
    mounted() {
        if (localStorage.getItem('notes')) {
            try {
                this.notes = JSON.parse(localStorage.getItem('notes'));
            } catch(e) {
                localStorage.removeItem('notes');
            }
        }
    },
}



Vue.createApp(App).mount('#app')