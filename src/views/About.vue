<template>
  <div class="about">
    <div class="parent clearfix">
      <div class="item item1">Float Left1</div>
      <div class="item item2">Float Left2</div>
      <div class="item item3">Float Left3</div>
      <div class="item item4">Float Left4</div>
    </div>
    <h2 style="margin-top: 2rem;">Css Position Demo</h2>
    <div class="p-parent">
      <div class="p-item">默认static 1</div>
      <div class="p-item p-item-z-index-100">默认static 2</div>
      <div class="p-item p-item-relative">Relative 3</div>
      <div class="p-item p-item-z-index-100">默认static 4</div>
      <div class="p-item p-item-absolute">Absolute 5</div>
      <div class="p-item">默认static 6</div>
      <div class="p-item p-item-fixed">Fixed 7</div>
      <div class="p-item">默认static 8</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.parent {
  border: 1px solid black;
  &::after {
    display: block;
    content: " ";
    clear: both;
  }
  .item {
    float: left;
    border: 1px solid red;
    height: 2rem;
  }
  .item3,.item4 {
    float: right;
  }
}

.p-parent {
  border: 1px solid #991100;
  &::after {
    display: block;
    content: '';
    clear: both;
  }
  .p-item {
    background: #587801;
    color: #fffddd;
    height: 10rem;
    width: 10rem;
    margin: 0.2rem;
    text-align: center;
    float: left;
  }

  .p-item-z-index-100 {
    z-index: 100;
  }

/*.
z-index 失效的情况
1、父标签 position属性为relative；

2、问题标签无position属性（不包括static）；

3、问题标签含有浮动(float)属性。

4、问题标签的祖先标签的z-index值比较小
 */
  .p-item-relative {
    position: relative;
    left: 0.6rem;
    top: 0.6rem;
    background: #29ce89;
    z-index: 1;
  }
  .p-item-absolute {
    position: absolute;
    top: 10rem;
    left: 13rem;
    background: #a2ce29;
  }
  .p-item-fixed {
    position: fixed;
    bottom: 1rem;
    left: 2rem;
    background: #8c29ce;
  }
}

</style>
