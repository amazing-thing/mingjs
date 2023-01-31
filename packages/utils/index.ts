import type { App, Directive } from 'vue'
import ellipsis from './directives/ellipsis'

export * from './common'
export * from './download'

interface Directives {
  [key: string]: Directive
}

const directives: Directives = {
  ellipsis,
}

export const install = (app: App) => {
  Object.keys(directives).forEach((key) => {
    app.directive(key, directives[key])
  })
}
