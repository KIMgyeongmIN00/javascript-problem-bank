/**
 * [(lv.3)chunk.js]
 *
 * chunkArray 함수를 작성하세요.
 * - 배열(arr)과 덩어리 크기(size)를 입력받아, 해당 크기로 배열을 나눈 2차원 배열을 반환합니다.
 * - 마지막 덩어리는 나머지 원소만 포함됩니다.
 *
 * @param {any[]} arr
 * @param {number} size
 * @returns {any[][]}
 */

function chunkArray(arr, size) {
  const dividedArr = [];
  let i = 0;
  while (i < arr.length) {
    const chunk = [];
    chunk.push(...arr.slice(i, i + size));
    dividedArr.push(chunk)
    console.log(dividedArr)
    i += size
  }
  return dividedArr
}

// export 를 수정하지 마세요.
export { chunkArray };
