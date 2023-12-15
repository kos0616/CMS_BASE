import generateToken from './generateToken'

/** 檢查token的生命週期 如果過期就生一組新的 */
export default () => {
  /** token碼 */
  let auth = localStorage.getItem('x-authorisation')

  if (!auth) {
    auth = generateToken(60)
    localStorage.setItem('x-authorisation', auth)
  }

  /** token誕生日 */
  const token = localStorage.getItem('token')
  if (token) {
    const newTime = Date.now() + 30 * 60 * 1000
    localStorage.setItem('token', `${newTime}`)
  }

  return auth
}
