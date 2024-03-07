<!-- <script setup>
console.log(123);
</script>

<template>
  <nav>導覽列</nav>
  <main>內文</main>
  <a href="https://www.google.com">Google</a>
</template>

<style scoped>
main {
  background-color: green;
}
</style> -->

<!-- 嵌入文字 -->
<!-- <script setup>
let message = "Hello, Vue!";
</script>
<template>
  <div>{{ message }}</div>
</template>
<style scoped></style> -->

<!-- 嵌入 HTML標籤 -->
<!-- <script setup>
let message = "<u>Hello, Vue的HTML語法</u>";
</script>
<template>
  <div v-html="message"></div>
</template>
<style scoped></style> -->

<!-- 嵌入標籤屬性帶入變數 -->
<!-- <script setup>
  let message = "Hello-Vue";
  let name = "content";
  let type = "module";
</script>
<template>
  <div v-bind:id="type">第一個方法</div>
  <div :class="name">操作標籤的屬性</div> -->
<!-- 也可以在變數帶入JS語法(轉大寫) -->
<!-- <div>{{ message.toUpperCase() }}</div>
</template>
<style scoped>
  .content {
    color: red;
  }
</style> -->

<!-- 屬性添加JS語言判斷 -->
<script setup>
  let check = true;
  let light = "白天";
  let dark = "黑夜";
</script>
<template>
  <div :class="check ? 'dark' : 'light'">{{ check ? dark : light }}</div>
</template>
<style scoped>
  .dark {
    background-color: black;
    color: white;
  }
  .light {
    background-color: yellow;
    color: black;
  }
</style>
