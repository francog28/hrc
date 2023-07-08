function swapFirstAndLast(str) {
    if (str.length <= 1) {
      return str;
    } else {
      const firstChar = str[0];
      const lastChar = str[str.length - 1];
      const middleChars = str.substring(1, str.length - 1);
  
      return lastChar + middleChars + firstChar;
    }
}
