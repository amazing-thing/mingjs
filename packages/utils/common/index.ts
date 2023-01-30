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
