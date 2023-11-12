const fibs = (n) => {
    if (n === 1) return [0];

    const fibs = [0, 1];

    for (let i = 1; i < n - 1; i++) {
        fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    }

    return fibs;
};

const fibsRec = (n) => {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const prev = fibsRec(n - 1);
    return prev.concat(prev[prev.length - 1] + prev[prev.length - 2]);
};

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    else {
        const splitPoint = Math.floor(arr.length / 2);
        const firstHalf = mergeSort(arr.slice(0, splitPoint));
        const secondHalf = mergeSort(arr.slice(splitPoint));

        const sorted = [];
        let i = 0,
            j = 0;
        while (i < firstHalf.length || j < secondHalf.length) {
            if (j >= secondHalf.length || firstHalf[i] < secondHalf[j]) {
                sorted.push(firstHalf[i++]);
            } else {
                sorted.push(secondHalf[j++]);
            }
        }

        return sorted;
    }
};
