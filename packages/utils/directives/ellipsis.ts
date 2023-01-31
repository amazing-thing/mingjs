/**
 * 限制文本最多显示几行，以...结束，仅适用于 webkit 内核浏览器
 * */
import type { Directive, DirectiveBinding } from 'vue'
import { addClass, removeClass } from '../common/index'

export default {
  mounted(el, binding: DirectiveBinding) {
    if (binding.value) {
      addClass(el, 'ivu-line-clamp')
      el.style['-webkit-line-clamp'] = binding.value
    }
  },
  updated(el, binding: DirectiveBinding) {
    if (binding.value)
      el.style['-webkit-line-clamp'] = binding.value
  },
  unmounted(el) {
    removeClass(el, 'ivu-line-clamp')
    el.style['-webkit-line-clamp'] = null
  },
} as Directive
