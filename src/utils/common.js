/* @flow */

/**
* Utility function to execute callback for eack key->value pair.
*/
export function forEach(obj: Object, callback: Function) {
  if (obj) {
    for (const key in obj) { // eslint-disable-line no-restricted-syntax
      if ({}.hasOwnProperty.call(obj, key)) {
        callback(key, obj[key]);
      }
    }
  }
}

export function hasProperty(obj: Object, property: string) {
  let result = false;
  if (obj) {
    for (const key in obj) { // eslint-disable-line no-restricted-syntax
      if ({}.hasOwnProperty.call(obj, key) && property === key) {
        result = true;
        break;
      }
    }
  }
  return result;
}

/**
* The function returns true if the string passed to it has no content.
*/
export function isEmptyString(str: string): boolean {
  return !str || !str.trim()
}

/**
* The function will return true for simple javascript object,
* which is not any other built in type like Array.
*/
export function isMap(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
* The function will return filter out props fron and return new props.
*/
export function filter(obj, keys) {
  const filteredKeys = Object.keys(obj).filter(key => keys.indexOf(key) < 0);
  const filteredObject = {};
  if (filteredKeys && filteredKeys.length > 0) {
    filteredKeys.forEach((key) => {
      filteredObject[key] = obj[key];
    });
  }
  return filteredObject;
}

export function stopPropagation(event) {
  event.stopPropagation();
}

/** 
 * The function will return array which contain all the elements
 *  which matches with the searchText
 */

export function searchElement(searchList, searchText, isCaseSensitive) {
  const result = searchList && searchList.filter(suggestion => {
    if (!searchText || searchText.length === 0) {
      return true;
    }
    if (isCaseSensitive) {
      return suggestion.value.indexOf(searchText) >= 0;
    }
    return (
      suggestion.value
        .toLowerCase()
        .indexOf(searchText && searchText.toLowerCase()) >= 0
    );
  });
  return result;
}

export function debounce(func, delay = 500) {
  let timerId;
  return function () {
    clearTimeout(timerId)
    timerId = setTimeout(() => func.apply(this, arguments), delay)
  };
};
