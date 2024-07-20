import { reactive } from "vue"

export const store = reactive({
    selected: {
        section: 0,
        exhibition: "",
        artist: 0,
        article: 0
    },

    displaySidebar: true,
    displayMiddle: false,
    displayContent: false,


    apiUrl: 'http://127.0.0.1:8000/api/memorial-gestures',
    apiBase: 'http://127.0.0.1:8000/',
    infos:[],
    openCall:[],
    AboutPage:[],
    
    dataReady: false,
    openCallActive:false,
    hcnActive: true,
    menuInteraction:false
})