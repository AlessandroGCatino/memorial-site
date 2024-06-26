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


    apiUrl: 'https://api.memorialgestures.org.uk/api/memorial-gestures',
    apiBase: 'https://api.memorialgestures.org.uk/',
    infos:[],
    openCall:[],
    
    dataReady: false,
    openCallActive:false,
    hcnActive: true,
    menuInteraction:false
})