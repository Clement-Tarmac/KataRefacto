function bubbleSort(t){ 
    const n = t.length;
    for (let i=0; i<n; i++) {
        for (let j = 0; j < (n - i - 1); j++) {
            if (t[j] > t[j + 1]) {
                let a = t[j + 1];
                let b = t[j];
                t[j] = a;
                t[j + 1] = b;
            };
        };
    };
    return t
};

module.exports = bubbleSort;