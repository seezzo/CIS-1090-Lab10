import words from "./words.js";

function binarySearch(needle, haystack) {
    let high = haystack.length;
    let low = 0;

    while (low < high) {
        let mid = Math.floor((high + low) / 2)
        if (haystack[mid] === needle)
            return true;
        if (needle > haystack[mid])
            low = mid + 1
        else
            high = mid
    }

    return false;
}

export default function (word) {
    return binarySearch(word, words);
}