let i = 0;

const binarySearch = ( item, sortedArr ) => {
    i++;
    const { length } = sortedArr;

    if ( length === 1 ) {
        if ( sortedArr[0] === item ) {
            return item;
        } else {
            return undefined;
        }
    }

    if ( !length ) {
        return undefined;
    }

    let start = sortedArr[0];
    let end = sortedArr[ length - 1 ];
    let middle = Math.floor( (start + end ) / 2);
    let ind = sortedArr.indexOf(middle);

    return (
        item === middle
            ? item
            : binarySearch(
                item,
                (item > middle)
                    ? sortedArr.slice(ind + 1)
                    : sortedArr.slice(0, ind)
            )
    );
};

let a = [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ];

let expectedRuns = Math.log(a.length);

console.log(`${binarySearch(7, a)} in ${i} runs. Expected runs: ${ expectedRuns }`);

module.exports = undefined;