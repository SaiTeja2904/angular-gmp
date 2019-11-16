export function searchInArrayOfObjects(searchString: string, dataArray, field: string) {
    return searchString.length > 0 ? dataArray.filter(each => stringContains(searchString, each[field])) : dataArray;
}

function stringContains(search, dataString: string) {
    let isStringPresent = false;
    if (dataString.toUpperCase().indexOf(search.toUpperCase()) >= 0) {
        isStringPresent = true;
    }
    return isStringPresent;
}
