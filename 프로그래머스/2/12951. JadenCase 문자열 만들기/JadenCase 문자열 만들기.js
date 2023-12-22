function solution(s) {

    return s.toLowerCase().replace(/(^|\s)\S/g, v => v.toUpperCase());
}