<template>
  <div class="home">
    <div class="head">
      <div>
        <span class="about-me">About me</span>
      </div>
      <div class="contact-me">
        <a href="mailto:me@qixin.io">contact</a>
      </div>
    </div>
    <div class="tech-main">
      <span class="title">技术栈</span>
      <ul class="ul-container">
        <li class="li-title">
          Front end
          <ul>
            <li>Vue.js</li>
            <li>React.js</li>
            <li>SASS</li>
          </ul>
        </li>
        <li class="li-title">
          Back end
          <ul>
            <li>Java</li>
            <li>Go</li>
            <li>Nodejs</li>
          </ul>
        </li>
        <li class="li-title">
          Mobile
          <ul>
            <li>Android</li>
          </ul>
        </li>
      </ul>
    </div>
    <span class="experience">职业经历</span>
    <div class="timeline">
      <a-timeline mode="alternate">
        <a-timeline-item>
          <span>2016/03 ~ Now</span>
          <div class="right_item">
            <span class="title-company right_title">架构师 @ 家装E站</span>
          </div>
          <div class="job_contents">
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
            <span class="title-company left_title">CTO @ 天天一百网络科技</span>
          </div>
          <div class="left-desc">
            <ul class="left-ul">
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
          <div class="right_item">
            <span class="title-company right_title"
              >系统架构师 @ 天下互联苏州分公司</span
            >
          </div>
          <div class="job_contents">
            <ul>
              <li>社交App Backend开发</li>
              <li>运维</li>
            </ul>
          </div>
        </a-timeline-item>
        <a-timeline-item color="green">
          <span>2014/09 ~ 2015/01</span>
          <div>
            <span class="title-company left_title"
              >Java高级工程师 @ 苏州用心创造</span
            >
          </div>
          <div class="left-desc">
            <ul class="left-ul">
              <li>微信公众号开发</li>
            </ul>
          </div>
        </a-timeline-item>
        <a-timeline-item>
          <span>2014/07 ~ 2014/09</span>
          <div class="right_item">
            <span class="title-company right_title"
              >Java高级工程师 @ 苏州瑞鹏</span
            >
          </div>
          <div class="job_contents">
            <ul>
              <li>外婆家 - 微信公众号</li>
            </ul>
          </div>
        </a-timeline-item>
        <a-timeline-item>
          <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
          <span>2013/11 ~ 2014/07</span>
          <div>
            <span class="title-company left_title"
              >项目经理 @ 苏州梦图数码</span
            >
          </div>
          <div class="left-desc">
            <ul class="left-ul">
              <li>GIS方向开发</li>
              <li>项目管理</li>
            </ul>
          </div>
        </a-timeline-item>
        <a-timeline-item color="green">
          <span>2011/08 ~ 2013/11</span>
          <div class="right_item">
            <span class="title-company right_title"
              >Java开发工程师 @ 南京斯帝普科技有限公司</span
            >
          </div>
          <div class="job_contents">
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
.job_contents {
  width: 85%;
  & ul {
    padding-left: 1rem;
  }
}

.left-desc {
  display: flex;
}

.left-ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  padding-left: 2.8rem;
  width: 100%;
  li {
    flex-wrap: wrap;
  }
}

.head {
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
  width: 100%;
  margin-top: 12px;
  & .about-me {
    color: #1790ff;
    font-weight: bold;
    font-size: 2em;
  }
  & .contact-me {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
}

.title-company {
  font-size: 14px;
  font-weight: bold;
}

.left_title {
  margin-left: 1.2rem;
}

.right_title {
  margin-right: 1.2rem;
}

.right_item {
  width: 85%;
}

.timeline {
  margin: 1% auto;
  overflow: hidden;
  padding-top: 2px;
}

.experience {
  font-size: 1em;
  font-weight: bold;
  color: #1790ff;
  display: flex;
  justify-content: center;
}

.tech-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .title {
    font-size: 1em;
    font-weight: bold;
    color: #1790ff;
    margin: 0 24px;
  }
  & .ul-container {
    margin: 12px 0;
    padding-inline-start: 0;
    & .li-title {
      display: block;
      float: left;
      margin: 0 6px;
      font-size: medium;
    }
  }
}
</style>
