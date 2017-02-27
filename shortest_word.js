/*
x Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

// SOLUTIONS:


function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}

/// 

function findShort(s){
    var words = s.split(' ');
    var shortest = words[0];
    words.forEach(function(i) {
        if (i.length < shortest.length)
        shortest = i;
    });
    return shortest.length;
}

function findShort(s){
    var words = s.split(' ');
    var shortest = words[0];
    
    words.forEach(function(i) {
        if (i.length < shortest.length)
        shortest = i;
    });
    return shortest.length;
}