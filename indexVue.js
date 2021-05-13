
/* - - - - - - - - - - Vue App - - - - - - - - - - */


let appHeader = new Vue({
    el: '#appHeader',
    data: {
        title: 'Welcome to WinterFang Game'
    }
});
// appHeader.message = 'ohh mais lol';

let appCore = new Vue({
    el: '#appCore',
    data: {
        message: 'Game One ?'
    }
});
// appCore.message = 'ohh mais lol';

let appFooter = new Vue({
    el: '#appFooter',
    data: {
        list: 'Network'
    }
});
// appCore.message = 'ohh mais lol';