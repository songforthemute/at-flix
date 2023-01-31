# 0. At-Flix

## **_개요_**

이 프로젝트는 Public API를 이용한 **영화 & TV 시리즈 웹 애플리케이션**으로, Netflix의 랜딩 페이지에서 영감을 받아 진행하게 되었으며, React.js를 기반으로 개발한 웹 애플리케이션입니다.

-   Project Deployment : [At-flix](https://songforthemute.github.io/at-flix)

-   미디엄 블로그 링크 : [https://medium.com/@songforthemute](https://medium.com/@songforthemute)

---

## **_목차_**

1. 기술 스택
2. 구현 기능
3. 프로젝트 상세
4. 프로젝트 개발 환경
5. 프로젝트 스크립트

---

## _1. 기술 스택_

-   Language : `TypeScript`

-   Core Framework/Library : `React.js`

-   Architecture : based on `Atomic Design System`

-   State Management : `React-query`

-   Styling : `Styled-components`, `Framer-motion`

-   Deployment : `Githup Pages`

-   Others : `React-router-dom`, `React-hook-form`, `React-player`

---

## _2. 구현 기능_

-   헤더 내비게이션 관련
    -   로고 버튼 클릭 시 랜딩 페이지로 이동
    -   현재 페이지 위치에 따른 자연스러운 인디케이터 이동
    -   현재 스크롤 위치에 따른 자연스러운 배경 페이드 아웃
    -   검색 버튼의 인터랙션으로 접근하는 검색 폼
-   랜딩 페이지 관련
    -   영화와 TV 시리즈 페이지를 각각 제공
    -   슬라이더와 버튼을 이용한 페이지네이션
    -   작품 클릭 시 상세 데이터 모달 팝업
-   모달 관련
    -   작품의 트레일러 영상이 존재하는 경우 미니 플레이어 제공
    -   작품 장르 태그
    -   작품 백분위 평점
    -   간략한 작품 소개
-   검색 페이지 관련
    -   검색 결과를 4열 그리드로 나열하여 표시
-   세부 페이지 관련
    -   작품 포스터
    -   작품의 트레일러 영상이 존재하는 경우 미니 플레이어 제공
    -   작품 출시 시기
    -   작품 장르 태그
    -   작품 평점
    -   작품 줄거리

---

## 3. 프로젝트 상세

-   이 프로젝트의 프론트엔드 파트는 `React.js` 라이브러리를 이용해 개발하였습니다. API는 [The Movie Database](https://www.themoviedb.org)에서 제공받았습니다.

-   프론트엔드 파트에 **아토믹 디자인 시스템(Atomic Design System)**에 기반한 아키텍처 적용을 시도했습니다.

    _로직과는 거리를 둔 순수한 UI 컴포넌트의 `Atoms`와, 컴포넌트와 로직을 조합하는 라우팅의 `Pages`로 두 단계로 나누어 개발했으며, 재사용성 확보, 컴포넌트와 로직의 분리, 디렉터리 구조가 명확해지는 효과를 얻었습니다._

-   일정 시간 내 방문했던 페이지 재방문 시, 반복적인 API 호출로 인한 필요없는 코스트 낭비 대신, `React-query`로 캐싱한 데이터를 이용해 빠른 응답을 제공합니다.

-   스타일링은 `CSS-in-JS` 방식의 `Styled-Components`로 개발하였습니다. 폼 컴포넌트는 `React-hook-form`을, 인터랙션은 `Framer-motion`을 추가로 이용해 개발하였습니다.

---

## 4. 프로젝트 개발 환경

-   Editor : `Visual Studio Code`
-   OS : `Mac OS Monterey 12.6 (w/ Apple M1)`
-   Runtime : `Node.js v16.14.0`
-   Package Manager : `npm`
-   Browser : `Chrome` | `Safari` | `Vivaldi`

---

## 5. 프로젝트 스크립트

```
npm start
```

-   프로젝트를 개발 모드로 실행할 수 있습니다. [http://localhost:3000]("http://localhost:3000") 환경에서 실행되며, 기본 포트 넘버는 3000입니다.

```
npm build
```

-   애플리케이션이 `build` 폴더에 빌드됩니다.

```
npm predeploy
```

-   애플리케이션의 `gh-pages`를 이용한 배포를 하기 위한 사전 빌드 작업입니다. `npm run build`와 같습니다.

```
npm deploy
```

-   `-d 디렉토리명` 폴더의 애플리케이션을 gh-pages를 통해 배포합니다. Github repository에서도 확인할 수 있습니다.

---

# 봐주셔서 감사합니다!
