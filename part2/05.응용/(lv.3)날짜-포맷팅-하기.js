/**
 * [(lv.3)날짜-포맷팅-하기.js]
 *
 * 1) formatDate 함수를 작성하세요.
 * 2) Date 객체를 입력받아 "YYYY년 MM월 DD일 HH시 mm분" 형식으로 문자열을 반환하세요.
 * 3) 월, 일, 시, 분이 한 자리면 앞에 0을 붙이세요.
 * 4) 예: 2021년 1월 1일 1시 1분 → "2021년 01월 01일 01시 01분"
 *
 * @param {Date} date
 * @returns {string}
 */

function formatDate(date) {
  function fillUp(value) {
    return String(value).padStart(2, '0')
  }
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const min = date.getMinutes()

  return `${year}년 ${fillUp(month)}월 ${fillUp(day)}일 ${fillUp(hour)}시 ${fillUp(min)}분`
}

// export를 수정하지 마세요.
export { formatDate };
