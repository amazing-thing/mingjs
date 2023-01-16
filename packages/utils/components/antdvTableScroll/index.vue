<script>
import gsap from 'gsap'
import { useElementSize } from '@vueuse/core'

export default {
  name: 'TableScroll',
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
    id: {
      type: String,
      default: 'once',
    },
    /**
  * 滑动单位距离需要的时间(s)
  */
    duration: {
      type: Number,
      default: 1,
    },
    /**
  * 两次滑动之间的停顿时长(s)
  */
    delay: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      scrollY: 0,
      scrollingElIndex: 0,
      topBoxHeight: 0, // 条目数高度
    }
  },
  watch: {
    topBoxHeight(e) {
      if (e > 0)
        this.update()
    },
  },
  mounted() {
    window[`timeLine__only__${this.id}`] = gsap.timeline()

    this.getTableScrollY()

    const { height: topBoxHeight } = useElementSize(document.querySelector(`#${this.id} .ant-table-tbody`))
    this.topBoxHeight = topBoxHeight

  // window.onresize = this.getTableScrollY
  },
  unmounted() {
  // 清除引用
    window[`timeLine__only__${this.id}`] = null
  },
  methods: {
  // 自适应table是否有滚动条
    getTableScrollY() {
      // .parent.getBoundingClientRect().height
      const tableAreaHeight = this.$refs.tableArea.parentElement.getBoundingClientRect().height
      const tableHeadHeight = document.querySelector(`#${this.id} .ant-table-header`).scrollHeight

      this.scrollY = tableAreaHeight - tableHeadHeight
    },
    autoScroll() {
      const body = document.querySelector(`#${this.id} .ant-table-body`)
      const tbody = document.querySelector(`#${this.id} .ant-table-tbody`)

      const nodeArr = [...tbody.children].splice(1)

      // 等待列表渲染出来
      if (!(nodeArr[0].className.includes('ant-table-row')))
        return

      // 条目数不够自动轮播时触发
      if (this.topBoxHeight < this.scrollY)
        return

      const currentScrollingEl = nodeArr[this.scrollingElIndex]
      this.scrollingElIndex = this.scrollingElIndex + 1

      if (!currentScrollingEl)
        return

      const rect = currentScrollingEl.getBoundingClientRect()
      const elHeight = rect.height
      const offsetTop = currentScrollingEl.offsetTop
      const scrollTarget = offsetTop + elHeight
      const scrollAreaHeight = this.topBoxHeight
      const willScrollToEdge = scrollTarget >= scrollAreaHeight

      // 最后一个显示时，回到第一个
      if (body.clientHeight + offsetTop >= this.topBoxHeight) {
        window[`timeLine__only__${this.id}`].to(body, { scrollTop: 0, duration: this.duration }, `+=${this.delay}`)
        this.scrollingElIndex = 0
        return
      }

      if (!willScrollToEdge) {
        window[`timeLine__only__${this.id}`].to(body, { scrollTop: scrollTarget, duration: this.duration }, `+=${this.delay}`)
        return
      }
      window[`timeLine__only__${this.id}`].to(body, { scrollTop: scrollAreaHeight, duration: this.duration }, `+=${this.delay}`)
    },
    update() {
      window[`timeLine__only__${this.id}`].eventCallback('onComplete', () => {
        if (this.scrollingElIndex === 0) {
          gsap.to(`#${this.id} .ant-table-body`, {
            scrollTop: 0,
            duration: 0,
            onComplete: () => {
              this.autoScroll()
            },
          })
          return
        }
        this.autoScroll()
      })
      this.autoScroll()
    },
    pause() {
      window[`timeLine__only__${this.id}`].pause()
    },
    resume() {
      window[`timeLine__only__${this.id}`].resume()
    },
    initStatus() {
      window[`timeLine__only__${this.id}`].clear()
      this.scrollingElIndex = 0
      this.update()
    },
  },
}
</script>

<template>
  <div :id="id" ref="tableArea" class="table-area" @mouseover="pause" @mouseout="resume">
    <a-table ref="tables" :columns="columns" :data-source="dataSource" :scroll="{ y: scrollY }" :pagination="false" />
  </div>
</template>
