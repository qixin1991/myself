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
    <div class="experience">职业经历</div>
    <div class="timeline">
      <a-timeline>
        <a-timeline-item :color="info.color" v-for="(info, idx) in infos" :key="idx">
          <a-icon v-if="info.type" slot="dot" :type="info.type" style="font-size: 16px;" />
          <div class="card">
            <card :title="info.time">
                <div class="title-company">{{ info.title }} @ {{ info.company }}</div>
                <div class="job_contents">
                  <ul>
                    <li v-for="(job, i) in info.jobs" :key="i">{{ job }}</li>
                  </ul>
                </div>
            </card>
          </div>
        </a-timeline-item>
      </a-timeline>
    </div>
  </div>
</template>

<script>
import { Timeline, Icon, Card } from 'ant-design-vue'
import 'ant-design-vue/lib/timeline/style/css'
import 'ant-design-vue/lib/card/style/css'

export default {
  name: 'home',
  components: {
    ATimeline: Timeline,
    ATimelineItem: Timeline.Item,
    AIcon: Icon,
    Card
  },
  data () {
    return {
      infos: [{
        time: '2016/03 ~ Now',
        title: '架构师',
        company: '家装E站',
        jobs: [
          '平安银行见证宝 POS APP & Backend 开发，日均交易额180W±',
          '面向全国近500家分站订单系统开发，日均交易额200W±',
          '系统架构设计与Spring Cloud微服务落地',
          'Nodejs技术栈在内部的推广',
          '前端和后端项目管理设计',
          '百台Linux服务器运维'
        ]
      },
      {
        time: '2015/11 ~ 2016/03',
        title: 'CTO',
        company: '天天一百网络科技',
        jobs: [
          '点餐100餐饮系统的重构',
          '服务器性能优化',
          '技术培训'
        ],
        color: 'green'
      },
      {
        time: '2015/01 ~ 2015/11',
        title: '系统架构师',
        company: '天下互联苏州分公司',
        jobs: [
          '啰嗦App Backend开发',
          '运维'
        ],
        type: 'clock-circle-o'
      },
      {
        time: '2014/09 ~ 2015/01',
        title: 'Java高级工程师',
        company: '苏州用心创造',
        jobs: [
          '微信公众号开发'
        ],
        color: 'green'
      },
      {
        time: '2014/07 ~ 2014/09',
        title: 'Java高级工程师',
        company: '苏州瑞鹏',
        jobs: [
          '外婆家微信公众号开发'
        ]
      },
      {
        time: '2013/11 ~ 2014/07',
        title: '项目经理',
        company: '苏州梦图数码',
        jobs: [
          'GIS方向开发',
          '项目管理'
        ],
        type: 'clock-circle-o'
      },
      {
        time: '2011/08 ~ 2013/11',
        title: 'Java开发工程师',
        company: '南京斯帝普科技有限公司',
        jobs: [
          '国家电网外包项目开发'
        ],
        color: 'green'
      }]
    }
  },
  methods: {
    title (info) {
      return `${info.title} @ ${info.company}`
    }
  }
}
</script>

<style lang="scss" scoped>
.job_contents {
  // width: 85%;
  & ul {
    padding-left: 1rem;
  }
}

.card {
  background:#ECECEC;
  padding:8px;
}

.head {
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
  width: 100%;
  margin-top: 12px;
  align-items: baseline;
  & .about-me {
    color: #1790ff;
    font-weight: bold;
    font-size: 2em;
  }
}

.title-company {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.timeline {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
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
