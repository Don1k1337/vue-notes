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
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
          return item.toUpperCase();
        },
        removeNote(note) {
            this.notes.pop(note);
        },
    },
    computed: {
        doubleCountComputed() {
            console.log('doubleCountComputed')
            return this.notes.length * 2;
        },
    }
}



Vue.createApp(App).mount('#app')