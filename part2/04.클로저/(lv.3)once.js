/**
 * [(lv.3)once.js]
 *
 * 1) once(fn) 함수를 작성하세요.
 * 2) fn을 딱 한 번만 실행한 뒤, 이후 호출에는 이전 실행 결과를 반환하세요.
 * 3) 클로저를 이용해 fn이 다시 호출되지 않도록 만드세요.
 *
 * @param {Function} fn
 * @returns {Function}
 */

function once(fn) {
  let firstResult;
  return (...arg) => {
    if (firstResult) return firstResult;
    else {
      firstResult = fn(...arg)
      return firstResult
    }
  }
}

// export를 수정하지 마세요.
export { once };
