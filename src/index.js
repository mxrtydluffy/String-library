// Challenge 1
// Capitalize(): First character of a given string uppercase.
function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str[0].toUpperCase() + str.slice(1);
}

// Challenge 2
// allCaps(): All characters uppercase.
function allCaps(str) {
    return str.toUpperCase();
}
  
// Challenge 3
//capitalizeWords(): First character of each word uppercase.
function capitalizeWords(str) {
    return str
      .split(" ")
      .map((word) => capitalize(word))
      .join(" ");
}
  
// Challenge 4
// removeExtraSpaces(): Removes all spaces from the beginning and end of a String along with any extra spaces in the middle.
function removeExtraSpaces(str) {
    return str.trim().split(/\s+/).join(" ");
}

// Challenge 5: kebobCase(): Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
function kebobCase(str) {
    str = str
      .toLowerCase()
      .split("")
      .filter((char) => {
        const code = char.charCodeAt(0);
        return (
          (code >= 97 && code <= 122) ||
          (code >= 48 && code <= 57) ||
          code === 32 ||
          code === 45
        );
      })
      .join("");
  
    return removeExtraSpaces(str).split(" ").join("-");
}
  
// Challenge 6
// snakeCase(): Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
function snakeCase(str) {
    return kebobCase(str).replace(/-/g, "_");
}
  
// Challenge 7
// camelCase(): Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.
function camelCase(str) {
    const words = str.split(" ");
    return (
      words[0].toLowerCase() +
      words
        .slice(1)
        .map((word) => capitalize(word))
        .join("")
    );
}
  
// Challenge 8
// shift() - Takes the first character of a string and moves to the end of a string.
function shift(str, n = 1) {
    return str.slice(n) + str.slice(0, n);
}
  
// Challenge 9
// makeHashTag(): Capitalizes all words and adds a hashtag to the beginning.
function makeHashTag(str) {
    const words = str
      .split(" ")
      .sort((a, b) => b.length - a.length)
      .slice(0, 3);
    return words.map((word) => "#" + word.toLowerCase());
}
  
// Challenge 10:
// isEmpty(): Returns true if the given string is empty or contains only whitespace. White space includes: spaces, line returns, and tabs.
function isEmpty(str) {
    return str.trim() === "";
}

module.exports = {
    capitalize,
    allCaps,
    capitalizeWords,
    removeExtraSpaces,
    kebobCase,
    snakeCase,
    camelCase,
    shift,
    makeHashTag,
    isEmpty,
  };