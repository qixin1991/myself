<template>
  <div class="home">
    <div class="title">
      <h1 class="about-me">关于我</h1>
    </div>
    <div class="timeline">
      <a-timeline mode="alternate">
        <a-timeline-item>
          <span>2016/03 ~ Now</span>
          <div>
            <span class="title-company">架构师 @ 家装E站</span>
          </div>
          <div>
            <ul>
              <li>负责面向全国近500家分站的分站管理系统开发</li>
              <li>Nodejs 技术栈在内部的推广</li>
              <li>百台 Linux 服务器的运维管理工作</li>
            </ul>
          </div>
        </a-timeline-item>
        <a-timeline-item color="green">
          <span>2015/11 ~ 2016/03</span>
          <div>
            <span class="title-company">CTO @ 天天一百网络科技</span>
          </div>
          <div>
            <ul>
              <li>点餐100餐饮系统的重构</li>
              <li>服务器性能优化</li>
              <li>技术培训</li>
              <li>Golang 在公司各个业务模块的推广</li>
            </ul>
          </div>
        </a-timeline-item>
        <a-timeline-item>
          <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
          <span>2015/01 ~ 2015/11</span>
          <div>
            <span class="title-company">系统架构师 @ 天下互联苏州分公司啰嗦科技</span>
          </div>
          <div>
            <ul>
              <li>社交App Backend开发</li>
              <li>运维</li>
            </ul>
          </div>
        </a-timeline-item>
        <a-timeline-item color="green">
          <span>2014/09 ~ 2015/01</span>
          <div>
            <span class="title-company">Java高级工程师 @ 苏州用心创造信息有限公司</span>
          </div>
          <div>
            <ul>
              <li>微信公众号开发</li>
            </ul>
          </div>
        </a-timeline-item>
        <a-timeline-item>
          <span>2014/07 ~ 2014/09</span>
          <div>
            <span class="title-company">Java高级工程师 @ 苏州瑞鹏信息科技有限公司</span>
          </div>
          <div>
            <ul>
              <li>外婆家 - 微信公众号</li>
            </ul>
          </div>
        </a-timeline-item>
        <a-timeline-item>
          <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
          <span>2013/11 ~ 2014/07</span>
          <div>
            <span class="title-company">项目经理 @ 苏州梦图数码信息有限公司</span>
          </div>
          <div>
            <ul>
              <li>GIS方向开发</li>
              <li>项目管理</li>
            </ul>
          </div>
        </a-timeline-item>
        <a-timeline-item color="green">
          <span>2011/08 ~ 2013/11</span>
          <div>
            <span class="title-company">Java开发工程师 @ 南京斯帝普科技有限公司</span>
          </div>
          <div>
            <ul>
              <li>苏源高科公司外包项目开发</li>
            </ul>
          </div>
        </a-timeline-item>
      </a-timeline>
    </div>
  </div>
</template>

<script>
import { Timeline, Icon } from 'ant-design-vue'
import 'ant-design-vue/lib/timeline/style/css'

export default {
  name: 'home',
  components: {
    ATimeline: Timeline,
    ATimelineItem: Timeline.Item,
    AIcon: Icon
  }
}
</script>

<style lang="scss" scoped>

  .title {
    display: inline-flex;
    justify-content: center;
    flex-grow: 1;
    width: 100%;
    margin-top: 12px;
    & .about-me {
      color: #1790FF;
    }
  }

  .title-company {
    font-size: 16px;
    font-weight: bold;
  }

  .timeline {
    margin: 2% auto;
  }
</style>
