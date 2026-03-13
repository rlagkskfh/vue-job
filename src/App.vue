<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
  <router-view />
</template>

<style scoped lang="scss">
</style>
 

<!-- 
<template>는 “이 컴포넌트가 화면에 어떻게 보일지”를 선언하는 공간이야.

HTML처럼 보이지만, 그대로 브라우저에 표시되는 건 아니야.

<template>는 언제 해석되나?

브라우저가 직접 해석 ❌

Vue가 먼저 읽고

Virtual DOM 렌더 함수로 변환

그 결과만 실제 DOM에 반영 -->