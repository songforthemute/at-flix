# 0. Coin Track

이 프로젝트는 netflix에서 영감을 받아, RESTful API를 이용한 Movie & TV series infomation Web Application을 목표로, 반응형 디자인으로 구현했습니다.

프로젝트 링크 : [https://songforthemute.github.io/at-flix]("https://songforthemute.github.io/at-flix")

미디엄 블로그 링크 : [https://medium.com/@songforthemute]("https://medium.com/@songforthemute")

---

## 목차

1. 기술 스택
2. 프로젝트 기능
3. 프로젝트 스크립트

---

## 1. 기술 스택

-   Language : `TypeScript`

-   Frontend : `ReactJS`, `Styled-component`, `Framer-motion`, `React-query`, `React-hook-form`, `React-player`

-   Distribution : `gh-pages`

---

## 2. 프로젝트 기능

-   메인 페이지와 시리즈 페이지 내 Framer-motion을 통한 다양한 애니메이션과 슬라이더 구현

-   일정 시간 내 방문했던 페이지 재방문 시, 반복적 api 호출이 아닌 react-query로 캐싱한 데이터를 이용해 빠른 응답 제공

-   작품 별 상세 페이지와 모달 내 react-player를 이용한 작품 트레일러 구현

-   react-hook-form을 이용한 검색 폼과 에러 메세지 구현과 Framer-motion을 통한 폼 열기/닫기 구현

-   Styled-Component와 Framer-motion을 통한 다양한 트랜지션 애니메이션 구현

-   미디어 쿼리를 이용한 모바일, 태블릿, 데스크톱의 반응형 디자인

---

## 3. 프로젝트 스크립트

### `npm start`

프로젝트를 개발 모드로 실행할 수 있습니다. [http://localhost:3000]("http://localhost:3000") 환경에서 실행되며, 기본 포트 넘버는 3000입니다.

### `npm build`

애플리케이션이 `build` 폴더에 빌드됩니다.

### `npm predeploy`

애플리케이션의 `gh-pages`를 이용한 배포를 하기 위한 사전 빌드 작업입니다. `npm run build`와 같습니다.

### `npm deploy`

`-d 디렉토리명` 폴더의 애플리케이션을 gh-pages를 통해 배포합니다. Github repository에서도 확인할 수 있습니다.

---

# 봐주셔서 감사합니다!
