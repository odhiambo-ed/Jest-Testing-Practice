const stringLength = (str) => {
    const leng = str.length;
    if (leng >= 1 && leng <= 10) {
        return leng;
    }
    throw new Error('The string is less then 1 char or more then 10 characters');
};

module.exports = stringLength;