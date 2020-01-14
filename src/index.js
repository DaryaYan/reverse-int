module.exports = function reverse(n) {
    let str = '' + n;
    let strRev = str.split('').reverse().join('');
    return Number.parseInt(strRev);
}