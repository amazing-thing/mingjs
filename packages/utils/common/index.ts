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

  const numArr = (`${num}`).split('.')

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
