/**
 * isClient 查看当前是否浏览器环境
 */
export const isClient = typeof window !== 'undefined'

/**
 * 去除文字前后空格
 * @param string
 * @returns
 */
export const trim = function (string: string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

/**
 * 元素是否含有此类
 * @param el  元素节点
 * @param cls 类名，空格分割
 * @returns
 */
export function hasClass(el: Element | undefined, cls: string) {
  if (!el || !cls)
    return false
  if (cls.includes(' '))
    throw new Error('className should not contain space.')
  if (el.classList)
    return el.classList.contains(cls)
  else
    return (` ${el.className} `).includes(` ${cls} `)
}

/**
 * 元素添加class类
 * @param el  元素节点
 * @param cls 类名，空格分割
 * @returns
 */
export function addClass(el: Element | undefined, cls: string) {
  if (!el)
    return

  let curClass = el.className
  const classes = (cls || '').split(' ')

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]

    if (!clsName)
      continue

    if (el.classList) {
      el.classList.add(clsName)
    }
    else {
      if (!hasClass(el, clsName))
        curClass += ` ${clsName}`
    }
  }

  if (!el.classList)
    el.className = curClass
}

/**
 * 元素移除class类
 * @param el  元素节点
 * @param cls 类名，空格分割
 * @returns
 */
export function removeClass(el: Element | undefined, cls: string) {
  if (!el || !cls)
    return

  const classes = cls.split(' ')
  let curClass = ` ${el.className} `

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName)
      continue

    if (el.classList) {
      el.classList.remove(clsName)
    }
    else {
      if (hasClass(el, clsName))
        curClass = curClass.replace(` ${clsName} `, ' ')
    }
  }

  if (!el.classList)
    el.className = trim(curClass)
}

/**
  * 检查文件后缀名是否符合
  * @param { String } fileName 文件名
  * @param { Array } suffixArray 允许的后缀
  * @returns
  */
export function checkFileSuffix(fileName = '', suffixArray: string[] = []) {
  if (!fileName || suffixArray.length === 0)
    return false

  const name = fileName.split('.').pop()?.toLowerCase()

  if (!name)
    return false

  if (!suffixArray.includes(name))
    return false

  return true
}

/**
 * 给数字加逗号
 * @param num
 * @returns
 */
export function addComma(num: string | number) {
  if (!num)
    return '0'

  let result = ''

  const numArr = num.toString().split('.')

  let int = numArr[0]

  const decmial = numArr[1] ? `.${numArr[1]}` : ''

  while (int.length > 3) {
    result = `,${int.slice(-3)}${result}`
    int = int.slice(0, int.length - 3)
  }

  if (int)
    result = int + result

  return result + decmial
}

/**
 * 检查IE浏览器版本，是否edge浏览器，是否IE浏览器
 */
export function IEVersion() {
  const userAgent = navigator.userAgent // 取得浏览器的userAgent字符串
  const isIE = userAgent.includes('compatible') && userAgent.includes('MSIE') // 判断是否IE<11浏览器
  const isEdge = userAgent.includes('Edg') && !isIE // 判断是否IE的Edge浏览器
  const isIE11 = userAgent.includes('Trident') && userAgent.includes('rv:11.0')
  if (isIE) {
    const reIE = /MSIE (\d+\.\d+);/
    const exec = reIE.exec(userAgent)!
    const fIEVersion = parseFloat(exec[1])
    if (fIEVersion === 7)
      return 7
    else if (fIEVersion === 8)
      return 8
    else if (fIEVersion === 9)
      return 9
    else if (fIEVersion === 10)
      return 10
    else
      return 6 // IE版本<=7
  }
  else if (isEdge) {
    return 'edge' // edge
  }
  else if (isIE11) {
    return 11 // IE11
  }
  else {
    return -1 // 不是ie浏览器
  }
}

/**
 * 文本复制到粘贴板
 */
export async function copyRight(text: string) {
  // 兼容处理
  try {
    await navigator.clipboard.writeText(text)
    return true
  }
  catch (e) {
    const input = document.createElement('input')
    input.value = text
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)

    return true
  }
}
