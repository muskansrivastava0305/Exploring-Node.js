const add = (a , b) => {
    return a + b;

};

const div = (c, d) => {
    return c / d;
}

// module.exports.add = add;
// module.exports.div = div;

module.exports = { add , div}

// module.exports is a single object or value.
// - when you rassign module.exports (e.g, module.exports = add), it completely replaces whatever was previously assigned.
// - If you reassign it gain (module.exports = mult), the previous value replaced with mult 