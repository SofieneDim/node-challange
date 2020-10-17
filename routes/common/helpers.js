function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
};

function shuffle(a) {
    console.log('a:', a)
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    console.log('a:', a)
    return a;
}

module.exports = { paginate, shuffle };