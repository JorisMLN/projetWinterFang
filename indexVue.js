
const elt = document.getElementById("idtest");
elt.addEventListener('click', function() {
    elt.style.color = "#457898";
});


const app = new Vue({
    el: '#app',
    data:{
        intro: "It's a good place to die, but not today",

    },
    computed: {
        
    }
});

