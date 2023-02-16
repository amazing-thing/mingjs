<script setup lang="ts">
import gsap from 'gsap'
import { useEventListener } from '@vueuse/core'
import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  id?: string
  duration?: number
  delay?: number
  autoScroll?: boolean
  scroll?: object
}>(), {
  id: 'once',
  duration: 1,
  delay: 2,
  autoScroll: false,
})

const scrollY = ref(0) // 滚动条高度
const scrollingElIndex = ref(0) // 滚动个数
const tableBodyHeight = ref(0) // table内容高度
const tableRef = ref<HTMLElement>() // 帮助获取滚动条高度
const initScroll = ref({ ...props.scroll })

watch(tableBodyHeight, (e) => {
  if (e > 0 && props.autoScroll)
    update()
})

watch(tableRef, () => {
  getTableScrollY()
})

onMounted(() => {
  // 判断window上有没有timeLine__obj，没有则赋值
  if (!window.timeLine__obj)
    window.timeLine__obj = {}

  window.timeLine__obj[props.id] = gsap.timeline()

  const height = tableRef.value!.querySelector('.ant-table-tbody')!.scrollHeight

  tableBodyHeight.value = height

  // 尺寸发生变化时重新获取高度
  useEventListener('resize', getTableScrollY)
})

onUnmounted(() => {
  window.timeLine__obj[props.id] = null
})

// 自适应table是否有滚动条
function getTableScrollY() {
  if (!props.autoScroll)
    return

  // .parent.getBoundingClientRect().height
  // 怎么转，主播不会转，只会这样弄了
  const el = tableRef.value! as HTMLElement
  // 父元素高度

  const tableParentHeight = el.parentElement!.getBoundingClientRect().height
  // 表头高度
  const tableHeaderHeight = tableRef.value!.querySelector('.ant-table-thead')!.scrollHeight
  scrollY.value = tableParentHeight - tableHeaderHeight
  initScroll.value = { ...initScroll.value, y: scrollY.value }
}

function update() {
  window.timeLine__obj[props.id].eventCallback('onComplete', () => {
    if (scrollingElIndex.value === 0) {
      gsap.to(`#${props.id} .ant-table-body`, {
        scrollTop: 0,
        duration: 0,
        onComplete: () => {
          autoScroll()
        },
      })
      return
    }
    autoScroll()
  })
  autoScroll()
}

function autoScroll() {
  if (!props.autoScroll)
    return

  const body = tableRef.value?.querySelector('.ant-table-body')
  const tbody = tableRef.value?.querySelector('.ant-table-tbody')

  if (!body || !tbody)
    return

  const nodeArr = [...tbody.children].splice(1) as HTMLElement[]

  // 等待列表渲染出来
  if (!(nodeArr[0].className.includes('ant-table-row')))
    return

  // 条目数不够自动轮播时触发
  if (tableBodyHeight.value < scrollY.value)
    return

  const currentScrollingEl = nodeArr[scrollingElIndex.value]
  scrollingElIndex.value = scrollingElIndex.value + 1

  if (!currentScrollingEl)
    return

  const rect = currentScrollingEl.getBoundingClientRect()
  const elHeight = rect.height
  const offsetTop = currentScrollingEl.offsetTop
  const scrollTarget = offsetTop + elHeight
  const scrollAreaHeight = tableBodyHeight
  const willScrollToEdge = scrollTarget >= scrollAreaHeight.value

  // 最后一个显示时，回到第一个

  if (body.clientHeight + offsetTop >= scrollAreaHeight.value) {
    window.timeLine__obj[props.id].to(body, { scrollTop: 0, duration: props.duration }, `+=${props.delay}`)
    scrollingElIndex.value = 0
    return
  }

  // 滚动到下一个
  if (!willScrollToEdge) {
    window.timeLine__obj[props.id].to(body, { scrollTop: scrollTarget, duration: props.duration }, `+=${props.delay}`)
    return
  }

  // 最后一个，没有下一个时，滚动到最底下
  window.timeLine__obj[props.id].to(body, { scrollTop: scrollAreaHeight, duration: props.duration }, `+=${props.delay}`)
}

function pause() {
  window.timeLine__obj[props.id].pause()
}
function resume() {
  window.timeLine__obj[props.id].resume()
}
</script>

<script lang="ts">
export default defineComponent({
  name: 'TableScroll',

})
</script>

<template>
  {{ initScroll }}
  <div :id="id" ref="tableRef" @mouseover="pause" @mouseout="resume">
    <a-table v-bind="$attrs" :scroll="initScroll" />
  </div>
</template>
