<script setup lang="ts">
import gsap from 'gsap'
import { useElementSize } from '@vueuse/core'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  columns: any[]
  dataSource: any[]
  id: string
  duration: number
  delay: number
}>(), {
  columns: () => [],
  dataSource: () => [],
  id: 'once',
  duration: 1,
  delay: 2,
})

const scrollY = ref(0)
const scrollingElIndex = ref(0)
const topBoxHeight = ref(0)
const tableArea = ref(null)

watch(topBoxHeight, (e) => {
  if (e > 0)
    update()
})

onMounted(() => {
  window.timeLine__obj[props.id] = gsap.timeline()

  getTableScrollY()

  const el = ref(document.querySelector(`#${props.id} .ant-table-tbody`)) as any as HTMLElement

  const { height } = useElementSize(el)
  topBoxHeight.value = height.value

  // window.onresize = this.getTableScrollY
})

onUnmounted(() => {
  window.timeLine__obj[props.id] = null
})

// 自适应table是否有滚动条
function getTableScrollY() {
  // .parent.getBoundingClientRect().height
  // 怎么转，主播不会转，只会这样弄了
  const el = tableArea.value! as HTMLElement
  const tableAreaHeight = el.parentElement!.getBoundingClientRect().height
  const tableHeadHeight = document.querySelector(`#${props.id} .ant-table-header`)!.scrollHeight

  scrollY.value = tableAreaHeight - tableHeadHeight
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
  const body = document.querySelector(`#${props.id} .ant-table-body`)!
  const tbody = document.querySelector(`#${props.id} .ant-table-tbody`)!

  const nodeArr = [...tbody.children].splice(1) as HTMLElement[]

  // 等待列表渲染出来
  if (!(nodeArr[0].className.includes('ant-table-row')))
    return

  // 条目数不够自动轮播时触发
  if (topBoxHeight.value < scrollY.value)
    return

  const currentScrollingEl = nodeArr[scrollingElIndex.value]
  scrollingElIndex.value = scrollingElIndex.value + 1

  if (!currentScrollingEl)
    return

  const rect = currentScrollingEl.getBoundingClientRect()
  const elHeight = rect.height
  const offsetTop = currentScrollingEl.offsetTop
  const scrollTarget = offsetTop + elHeight
  const scrollAreaHeight = topBoxHeight
  const willScrollToEdge = scrollTarget >= scrollAreaHeight.value

  // 最后一个显示时，回到第一个
  if (body.clientHeight + offsetTop >= topBoxHeight.value) {
    window.timeLine__obj[props.id].to(body, { scrollTop: 0, duration: props.duration }, `+=${props.delay}`)
    scrollingElIndex.value = 0
    return
  }

  if (!willScrollToEdge) {
    window.timeLine__obj[props.id].to(body, { scrollTop: scrollTarget, duration: props.duration }, `+=${props.delay}`)
    return
  }
  window.timeLine__obj[props.id].to(body, { scrollTop: scrollAreaHeight, duration: props.duration }, `+=${props.delay}`)
}

function pause() {
  window.timeLine__obj[props.id].pause()
}
function resume() {
  window.timeLine__obj[props.id].resume()
}
</script>

<script>
export default {
  name: 'TableScroll',
}
</script>

<template>
  <div :id="id" ref="tableArea" @mouseover="pause" @mouseout="resume">
    <a-table ref="tables" :columns="columns" :data-source="dataSource" :scroll="{ y: scrollY }" :pagination="false" />
  </div>
</template>
