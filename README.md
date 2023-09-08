# 한국임상정보 검색창 클론코딩

<img src="https://github.com/salmontaker/issue-itsyu/assets/93248349/bec8929f-fd4a-459d-b156-0d96eb970d8d" width="192" height="192"><br>

[한국임상정보](https://clinicaltrialskorea.com/)의 검색창을 클론코딩한 서비스입니다.

배포주소 : https://clinical-trials.vercel.app/

## 개발 환경

### Developement

<img src="https://img.shields.io/badge/Node.js v18 (LTS)-grey?style=for-the-badge&logo=nodedotjs"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>

### Convention

<img src="https://img.shields.io/badge/husky-brown?style=for-the-badge&logo=npm"> <img src="https://img.shields.io/badge/lint staged-white?style=for-the-badge&logo=npm"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">

### Network

<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>

### Styling

<img src="https://img.shields.io/badge/styled component-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>

## 프로젝트 데모

https://github.com/salmontaker/clinical-trials/assets/93248349/74d3ed76-d442-44a7-b6a1-fc3381446670

## 프로젝트 구조

```
src
 ┣ apis
 ┃ ┣ Instance.ts
 ┃ ┗ trial.ts
 ┣ assets
 ┃ ┗ searchIcon.png
 ┣ components
 ┃ ┗ Search
 ┃ ┃ ┣ Search.styled.ts
 ┃ ┃ ┣ Search.tsx
 ┃ ┃ ┣ SearchForm.styled.ts
 ┃ ┃ ┣ SearchForm.tsx
 ┃ ┃ ┣ SearchSuggestion.styled.ts
 ┃ ┃ ┗ SearchSuggestion.tsx
 ┣ contexts
 ┃ ┗ SearchContext.tsx
 ┣ hooks
 ┃ ┣ useDebounce.ts
 ┃ ┣ useKeyboardNavigation.ts
 ┃ ┗ useSuggestion.ts
 ┣ pages
 ┃ ┗ SearchPage.tsx
 ┣ store
 ┃ ┗ CacheRepository.ts
 ┣ styles
 ┃ ┣ base
 ┃ ┃ ┣ DefaultTheme.ts
 ┃ ┃ ┗ GlobalStyle.ts
 ┃ ┗ constants
 ┃ ┃ ┣ colors.ts
 ┃ ┃ ┣ flex.ts
 ┃ ┃ ┗ fontSize.ts
 ┣ App.tsx
 ┣ index.tsx
 ┣ react-app-env.d.ts
 ┣ reportWebVitals.ts
 ┗ setupTests.ts
```

## 로컬 실행방법

1. 프로젝트를 clone합니다.

```shell
git clone https://github.com/salmontaker/clinical-trials.git
```

2. 프로젝트 실행에 필요한 라이브러리를 설치합니다.

```
npm install
```

3. 설치가 끝났다면 프로젝트를 실행합니다.

```
npm run dev
```