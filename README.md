# Js-Assist
A modern JavaScript utility library. 

## Installation
Using npm
```
$ npm i --save lodash
```


## Methods
* [Number Utils](#number)
* [String Utils](#string)
* [Array Utils](#array)
* [Map Utils](#map)
* [Object Utils](#obj)
* [Color Utils](#color)
* [Spacial Utils](#space)
* [Time Utils](#time)
* [SVG Utils](#svg)
<!-- 2. [Some paragraph](#paragraph1) 
    1. [Sub paragraph](#subparagraph1) -->

## Number Utils <a name='number'></a>

---
__randNum(min, max)__

Generate random number in a certain range.

| para | type   | description                  |
| ---- | ------ | ---------------------------- |
| min  | number | min value of the given range |
| max  | number | max value of the given range |

---
__isNumber(str)__

Judge whether a string is number.

| para | type   | description  |
| ---- | ------ | ------------ |
| str  | string | given string |

---
__floor(input, num)__

Floor to decimal with specific length

| para  | type   | description                      |
| ----- | ------ | -------------------------------- |
| input | number | input number                     |
| num   | number | Number of decimal places to keep |

---
__round(input, num)__

Rounded to decimal with specific length

| para  | type   | description                      |
| ----- | ------ | -------------------------------- |
| input | number | input number                     |
| num   | number | Number of decimal places to keep |

---
__ceil(input, num)__

Ceil to decimal with specific length

| para  | type   | description                      |
| ----- | ------ | -------------------------------- |
| input | number | input number                     |
| num   | number | Number of decimal places to keep |


## String Utils <a name='string'></a>

---
__firstLetterUppercase(str)__

Capitalize the first letter of the given string.

| para | type   | description  |
| ---- | ------ | ------------ |
| str  | string | input string |

---
__toHyphen(str)__

Camel to hyphen.

| para | type   | description  |
| ---- | ------ | ------------ |
| str  | string | input string |


## Array Utils <a name='array'></a>

---
__shuffle(arr)__

Shuffle an array.

| para | type       | description |
| ---- | ---------- | ----------- |
| arr  | Array<any> | input array |

---
__randSeries(count)__

Generate a series of numbers without repetition.

| para  | type   | description                |
| ----- | ------ | -------------------------- |
| count | number | length of the target array |

---
__removeRept(arr)__

Remove repetition in the array.

| para | type       | description |
| ---- | ---------- | ----------- |
| arr  | Array<any> | input array |

---
__sameArrays(arr1, arr2)__

Judge whether two arrays are identical.

| para | type       | description |
| ---- | ---------- | ----------- |
| arr1 | Array<any> | input array |
| arr2 | Array<any> | input array |

---
__sameSets(set1, set2)__

Judge whether two sets are identical.

| para | type     | description |
| ---- | -------- | ----------- |
| set1 | Set<any> | input set   |
| set2 | Set<any> | input set   |

---
__isChild(targetArr, inputArr)__

Check whether inputArr is an item in targetArr.

| para      | type       | description  |
| --------- | ---------- | ------------ |
| targetArr | Array<any> | target array |
| inputArr  | Array<any> | input array  |

---
__arrayContained(arr1, arr2)__

Whether arr1 contains arr2.

| para | type       | description |
| ---- | ---------- | ----------- |
| arr1 | Array<any> | input array |
| arr2 | Array<any> | input array |

---
__excludeArray(arr1, arr2)__

Remove arr2 from arr1.

| para | type       | description |
| ---- | ---------- | ----------- |
| arr1 | Array<any> | input array |
| arr2 | Array<any> | input array |

---
__containObj(objArr, obj)__

Check whether an array contains an object.

| para   | type                          | description  |
| ------ | ----------------------------- | ------------ |
| objArr | Array<{ [key: string]: any }> | input array  |
| obj    | { [key: string]: any }        | input object |

## Map Utils <a name='map'></a>

---
__sameMaps(map1, map2)__

Check whether two maps are same.

| para | type     | description |
| ---- | -------- | ----------- |
| map1 | Map<any> | input map   |
| map2 | Map<any> | input map   |

## Object Utils <a name='obj'></a>

---
__isEmptyObj(obj)__

Check whether an object is empty.

| para | type | description  |
| ---- | ---- | ------------ |
| obj  | any  | input object |

---
__deepClone(obj)__

Deep clone.

| para | type | description  |
| ---- | ---- | ------------ |
| obj  | any  | input object |

---
__getType(var)__

Get type of the input variable.

| para | type | description    |
| ---- | ---- | -------------- |
| var  | any  | input variable |

## Color Utils <a name='color'></a>

---
__hexToRgb(hex)__

Hex to rgb.

| para | type   | description         |
| ---- | ------ | ------------------- |
| hex  | string | color in hex string |

---
__rgbToHex(rgb)__

Rgb to hex.

| para | type   | description         |
| ---- | ------ | ------------------- |
| rgb  | string | color in rgb string |

## Spacial Utils <a name='space'></a>

## Time Utils <a name='time'></a>

## SVG Utils <a name='svg'></a>