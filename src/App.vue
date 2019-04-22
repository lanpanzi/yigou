<template>
  <div id="app">
    <router-view name="head"></router-view>
    <router-view name="main"></router-view>
    <router-view name="foot"></router-view>
    
    <!-- <BackTop :right="10"></BackTop> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
/* 清除默认样式 */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
a{text-decoration: none;color:#000;}
body {
  line-height: 1;  
  background-color: #f5f5f5;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
/* 万能清浮动 */
.clear::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  overflow: hidden;
  visibility: hidden;
}
</style>
