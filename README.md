# TO DO 🪄

> 로그인하고 할 일 목록을 관리할 수 있는 To Do List

## 🔎 미리 보기

### Login / SignUp

![auth](https://user-images.githubusercontent.com/91963656/212088422-872653a5-87cf-429a-bf21-1c94b1e7b317.gif)

### Todo List

![todo](https://user-images.githubusercontent.com/91963656/212083629-591e521e-ab57-4bd3-a0a2-aeddc7afeb9e.gif)

## 🔄 Flow Chart
<img width="2690" alt="To Do List Flow" src="https://user-images.githubusercontent.com/91963656/211232662-d6b721b1-20c0-4dc6-b463-97fe84c9f632.png">

## 🚀 기능 목록

### Login / SignUp

- 로그인 / 회원가입 기능
  - [x] 이메일, 비밀번호 input, 제출 button을 갖도록 구성
- 이메일과 비밀번호의 유효성을 확인
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화됨
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트
  - [x] 로그아웃 시 토큰 삭제

### Todo List

- Todo List API를 호출하여 Todo List CRUD 기능 구현
  - [x] 목록 / 상세 영역으로 나누어 구현
  - [x] Todo 목록을 볼 수 있음
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가됨
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있음
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있음
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인
  - [x] 새로고침을 했을 때 현재 상태가 유지됨
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회 가능
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현
  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영

## 🕹 실행

```bash
> git clone https://github.com/seoltang/wanted-pre-onboarding-challenge-fe-1.git

> cd wanted-pre-onboarding-challenge-fe-1

> npm install

> npm start
```

### [API](https://github.com/seoltang/wanted-pre-onboarding-challenge-fe-1-api) 실행

```bash
> git clone https://github.com/seoltang/wanted-pre-onboarding-challenge-fe-1-api.git

> cd wanted-pre-onboarding-challenge-fe-1-api

> yarn

> yarn start # http://localhost:8080
```
