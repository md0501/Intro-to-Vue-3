const app = Vue.createApp({
    data(){
        return {
        product: 'Socks!',
        description: 'Blue or Green'
        }
    }
})
//<!--Creates vue instance and opp -->  
//Connects option object (product)
//we connect product to the app in the <h1> {{product}} in the html files
//whenebr wee change the product value, reactivity occurs and vue updates

//