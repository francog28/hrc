function addHRC(str) {
    // Check if str already starts with HRC
    if (str.startsWith("HRC")) {
        return str;
    } else {
        // concatenate HRC in front of str if it doesn't start with it
        return "HRC" + str;
    }
}