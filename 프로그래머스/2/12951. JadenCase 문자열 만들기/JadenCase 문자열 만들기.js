function solution(s) {

    //모든 단어의 첫문자를 대문자로 변환
    return s.toLowerCase().replace(/(^|\s)\S/g, v => v.toUpperCase());
}