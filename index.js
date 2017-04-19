var knap = document.getElementById('knap');
var navn = document.getElementById('navn');
var animations = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'flip'];
var konsonanter = ['q','w','r','t','p','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var vokaler = ['e','y','u','i','o','å','a','æ','ø'];

function getRandomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function shuffle(a) {
    shuffle(a);
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

knap.addEventListener('click', function() {
    var konsonant = getRandomFromArray(konsonanter);
    var vokal = getRandomFromArray(vokaler);
    var p = document.createElement('p');
    p.innerHTML = capitalizeFirstLetter(konsonant + vokal + 'c');
    p.className = 'animated ' + getRandomFromArray(animations);
    navn.innerHTML = '';
    navn.appendChild(p);
});

