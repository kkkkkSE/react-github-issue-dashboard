# react-github-issue-dashboard

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/redux toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> 

<br/>

![Sep-01-2023 22-01-02](https://github.com/kkkkkSE/react-github-issue-dashboard/assets/95907436/f0658bae-bf38-44e0-8399-791bbdf4043b)

<br/>

React Repository의 이슈 목록을 조회하고, 상세 목록을 확인하는 웹 사이트 입니다.

- 배포 링크 : https://pre-onboarding-2-kkkkkse.netlify.app

<br/>

## 개발 Keyword

- Redux-Toolkit을 이용한 비즈니스 로직 분리
- Fetcher 컴포넌트를 통한 데이터 Feching과 Loading, Network Error 처리
- Error Boundary를 통한 Unexpected Error 처리
- IntersectionObserver API를 이용한 Infinity Scroll 구현
- GitHub REST API 사용

<br/>

## 요구사항

- Facebook의 React Repository 이슈 목록 및 상세 화면 기능 구현
  - open 상태의 이슈 중 코멘트가 많은 순으로 정렬
  - 이슈 목록에서 일정한 주기로 원티드 광고 출력
- 이슈 목록 Infinite Scroll 구현
- 데이터 요청 중 Loading 화면 출력
- 에러 발생 시 Error 화면 출력

<br/>

## 설계 상세

### 이슈 목록 및 상세 화면 기능 구현

- GitHub REST API를 사용하여 이슈 목록 및 이슈 상세 데이터 Fetching
- API 호출 시 쿼리 데이터를 전송하여 이슈 목록 Filtering & Sorting

### Infinite Scroll 구현

- IntersectionObserver API 사용
- Observer로 등록된 Ref 요소가 화면에 보일 때 Observe Callback 함수 실행
- Observe Callback 함수 내에서 조건 체크 후 다음 페이지 데이터 Fetching
  - 조건 : Loading, Error 상태가 아니고 마지막 페이지가 아닌 경우
    - 최근 불러온 페이지의 데이터 개수가 Per_Page보다 작을 경우 마지막 페이지로 간주
- Custom Hook `useIssueListInfiniteScroll`을 생성하여 Infinite Scroll 로직 분리

### Fetcher 컴포넌트를 이용한 Loading, Error 처리

- 기능별 네트워크 요청을 담당하는 Fetcher 컴포넌트 구현
- Redux Toolkit의 Slice를 이용하여 Page, Loading, Error 상태를 관리하고 Fetcher에서 이를 받아 상황에 맞는 화면 출력
- Fetcher 컴포넌트에서 Network Error를 처리하며, Network Error가 발생한 위치에서 Error Message 출력(이전 이슈 목록 유지)
- 이슈 상세 -> 목록 페이지 이동 시 이전에 불러온 이슈 목록과 Scroll 위치를 유지하며, Network Error 발생 후 상세 -> 목록 페이지 이동 시 이슈 목록 데이터 및 Scroll 위치 초기화

### Error Boundary 적용

- 모든 페이지 내 최상위 컴포넌트로 두어 Unexpected Error를 Catch하여 Error 화면 출력

<br/>

## 실행 방법

`git clone` 후 아래 커맨드 입력

```
npm ci

npm start
```