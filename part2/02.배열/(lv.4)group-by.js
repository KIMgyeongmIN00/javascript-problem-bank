/**
 * [(lv.4)group-by.js]
 *
 * 객체 배열(arr)과 프로퍼티 이름(key)을 받아,
 * 해당 key의 값에 따라 객체를 묶어 { keyValue: Object[] } 형태로 반환하세요.
 * reduce 메서드를 사용하세요.
 *
 * 예:
 * const data = [
 *   { name: 'Alice', group: 'A' },
 *   { name: 'Bob', group: 'B' },
 *   { name: 'Charlie', group: 'A' }
 * ];
 * groupBy(data, 'group') =>
 * {
 *   A: [
 *     { name: 'Alice', group: 'A' },
 *     { name: 'Charlie', group: 'A' }
 *   ],
 *   B: [
 *     { name: 'Bob', group: 'B' }
 *   ]
 * }
 * 
 *  0. 받는 데이터 arr, 그룹으로 묶을 프로퍼티 값 key
 *  1. 받은 데이터 배열 안의 key value를 나열
 *  2. 나열한 key value는 value: [] 할당
 *  3. key value가 포함된 들어있는 데이터 값들을 push
 *  4. reduce 메서드 사용
 *
 * @param {Object[]} arr
 * @param {string} key
 * @returns {Object}
 */

// TODO: groupBy 함수를 작성하세요.
function groupBy(arr, key) {
  return arr.reduce((acc, obj) => {
    const keyValue = obj[key];
    if (!acc[keyValue]) {
      acc[keyValue] = [];
    }
    acc[keyValue].push(obj);
    return acc;
  }, {});
}

// export를 수정하지 마세요.
export { groupBy };
