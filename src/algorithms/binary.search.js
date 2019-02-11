let runs = 0;

const algorithm = ( item, sortedArr ) => {
    runs++;
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

module.exports = { algorithm, runs };