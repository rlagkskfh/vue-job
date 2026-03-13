//import { createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../view/Login.vue';
import SignUp from '../view/SignUp.vue';
import JobPost from '../view/JobPost.vue';
import JobList from '../view/JobList.vue';
import JobDetail from '../view/JobDetail.vue';
import UserProfile from '../view/UserProfile.vue';
import JobPostUpdate from '../view/JobPostUpdate.vue';

const routes = [
  { 
    path: '/', 
    component: Login 
  },
  { 
    path: '/signup', 
    component: SignUp 
  },
  { 
    path: '/job-post', 
    component: JobPost 
  },
  { 
    path: '/job-list', 
    component: JobList 
  },
  { 
    path: '/job-detail/:id', 
    component: JobDetail 
  },
  { 
    path: '/user-profile', 
    component: UserProfile 
  },
  { 
    path: '/job-post-update/:id', 
    component: JobPostUpdate 
  },
]

const router = createRouter({
  // history: createWebHistory()
  history: createWebHashHistory(),
  routes
})

export default router

/* 컴포넌트란?
버튼 

입력창

카드

헤더

댓글 하나

이런 것들이:

모양도 있고

동작도 있고

여러 곳에서 반복됨

👉 매번 새로 만들면 비효율적이겠지.

그래서 **“한 덩어리로 묶어서 재사용하자”**가 컴포넌트야.

*/