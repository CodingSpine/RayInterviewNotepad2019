1. Access nested objects without ever worrying about the error 'Cannot access x of undefined'.

    Method 1:
    const name = ((user || {}).personalInfo || {}).name;

    Method 2 (better, since it can access any index of an array as well):
    const getNestedObject = (nestedObj, pathArr) => {
        return pathArr.reduce((obj, key) =>
        (
          obj && obj[key] !== 'undefined') ?
          obj[key] : undefined,
          nestedObj
        );
    }

        Usage:
        /* pass in your object structure as array elements */
        const name = getNestedObject(user, ['personalInfo', 'name']);
        /* to access nested array, just pass in array index as an element the path array */
        const city =  getNestedObject(
                        user, ['personalInfo', 'addresses', 0, 'city']
                      );
