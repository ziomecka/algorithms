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

    let start = 0;
    let end = length - 1;
    let middle = Math.floor( (start + end ) / 2);
    let middleItem = sortedArr[ middle ];

    return (
        item === middleItem
            ? item
            : algorithm(
                item,
                (item > middleItem)
                    ? sortedArr.slice( middle + 1 )
                    : sortedArr.slice( 0, middle )
            )
    );
};

module.exports = { algorithm, runs };