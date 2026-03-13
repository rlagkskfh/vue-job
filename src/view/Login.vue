<!-- ===================== -->
<!-- 화면에 보여지는 영역 -->
<!-- ===================== -->
<template>
  <div class="loading_info" v-if="isLoading">
  <p>로그인 처리중...</p>
  </div>
  <!-- 페이지 제목 -->
  <!-- 로그인 폼 전체를 감싸는 컨테이너 -->
  <div class="form-container">
    <!--
      form 태그
      @submit.prevent
      - submit: 폼이 제출될 때
      - prevent: 새로고침 방지
      - handleLogin 함수 실행
    -->
    <form @submit.prevent="handleLogin">

      <!-- 이메일 입력 영역 -->
      <div class="form-group">

        <!-- label: input과 연결됨 (for = input id) -->
        <label for="email">Email</label>

        <!--
          input 설명
          type="text"        : 일반 텍스트 입력
          id="email"         : label과 연결
          placeholder        : 힌트 텍스트
          required           : 비어있으면 제출 불가
          v-model="email"    : 입력값을 email 변수와 연결
        -->
        <input 
          type="text" 
          id="email" 
          placeholder="이메일 입력"
          required
          v-model="email"
        />
      </div>

      <!-- 비밀번호 입력 영역 -->
      <div class="form-group">
        <label for="password">Password</label>

        <!--
          type="password" : 입력 내용이 ●●●로 표시됨
          v-model="password" : password 변수와 양방향 연결
        -->
        <input 
          type="password" 
          id="password" 
          placeholder="비밀번호 입력"
          required
          v-model="password"
        />
      </div>

      <!-- 로그인 버튼 -->
      <!-- type="submit" → form의 submit 이벤트 발생 -->
      <button type="submit">로그인</button>

      <!--
        router-link
        - Vue Router에서 사용하는 링크
        - 페이지 새로고침 없이 이동
      -->
      <router-link to="/signup">회원가입</router-link>

    </form>
  </div>                  
</template>

<!-- ===================== -->
<!-- 로직(자바스크립트) -->
<!-- ===================== -->
<script setup>

  /*
    ref
    - Vue 3의 반응형 변수
    - 값이 바뀌면 화면도 자동으로 업데이트됨
  */
  import { useRouter } from 'vue-router';
  import supabase from '../supabase';
  import { ref } from 'vue';


  // 이메일 입력값 저장 변수
  const email = ref('');

  // 비밀번호 입력값 저장 변수
  const password = ref('');

  const router = useRouter();
  const isLoading = ref(false);
  /*
    로그인 버튼 클릭(폼 제출) 시 실행되는 함수
    현재는 입력값을 콘솔에 출력만 함
  */
  const handleLogin = async () => {
     console.log(email.value, password.value);
     isLoading.value = true;
     
  const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
  })

  if(error) {
    alert(error.message)
  } else {
    alert('로그인 성공')
    console.log(data)
    isLoading.value = false;
    router.push('/job-list');
  }
 
  }



</script>

<!-- ===================== -->
<!-- 스타일 (CSS) -->
<!-- scoped: 이 컴포넌트에만 적용 -->
<!-- ===================== -->
<style scoped>
  @import "../style/form.scss";
</style>
