// find
function find(string) {
    let state = start;
    for (let i of string) {
        console.log(i)
        state = state(i)
        if (state === end) break;
    }
    return state === end;``
}

function start(c) {
    if (c === 'a') {
        return findB;
    } else {
        return start;
    }
}

function end(c) {
    return end;
}

function findB(c) {
    if (c === 'b') {
        return findA2
    } else {
        return start(c)
    }
}

function findC(c) {
    if (c === 'c') {
        return findA2
    } else {
        return start
    }
}

function findA2(c) {
    if (c === 'a') {
        return findB2
    } else {
        return start
    }
}

function findB2(c) {
    if (c === 'b') {
        return findA3
    } else {
        return start
    }
}

function findA3(c) {
    if (c === 'a') {
        return findB3
    } else {
        return start
    }
}

function findB3(c) {
    if (c === 'b') {
        return findX
    } else {
        return start
    }
}

function findX(c) {
    if (c === 'x') {
        return end
    } else {
        return start
    }
}

// find abababx
console.log(find('i aabcabababxxxx'))