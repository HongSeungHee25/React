# React
## <React 세팅>
* React 사용 폴더 → 마우스 오른쪽 클릭 → 터미널 열기
* 터미널에서 `npx create-react-app 프로젝트 Name` 입력 후 Enter
* 오류없이 성공되면 IDE 에서 해당 프로젝트 열기
    
    * vscode 에서 사용할 때 React 미리보기 할 때에는 상단 메뉴에 터미널 → 새 터미널 → 프로젝트 경로 확인 → npm start 

## <React 폴더>
* node_modules 폴더 : 라이브러리 코드 보관함
* public 폴더 : static 파일 모아놓는 곳
* src 폴더 : 코드짜는 곳

    * App.js : 메인 코드 짜는 곳

        * App.js -> index.js -> index.html 
* package.json : 프로젝트 정보

***App.js 에서 작성하는 html 코드는 html이 아니라 JSX -> JSX는 .js 파일에서 쓰는 html 대용품***

***html 코드는 return (); 안에 전부 짜야함.(★★★ return() 안에는 병렬로 태그 2개 이상 기입 금지)***

## <JSX 문법>
1. class 넣을 땐 className
    
    * 참고 : css파일 쓰려면 상단에서 import 'css파일 경로'
2. 변수 넣을 땐 {중괄호} --> 전문용어로는 데이터바인딩은 {중괄호}
3. style 넣을 땐 style={ {스타일명 : '값', 스타일명 : '값'} }

    * 예를 들어서 font-size 처럼 스타일명에 '-'기호가 들어갈 때에는 fontSize 이런식으로 '-' 기호 생략 후 카멜표기법으로 작성해야함(js 에서는 '-' 기호가 뺄셈으로 인식하기 때문)

## <React state사용>
### state 만드는 법
1. import {useState}
2. useState(보관할 자료)
3. let[변수명, 변수명]

    * ex) `let [a, b] = useState('React Study');`
        * [ ]안에 a는 state에 보관했던 자료
        * [ ]안에 b는 state 변경도와주는 함수
            * state 변경하는 법
                * 등호로 변경금지
                * state변경함수(새로운 state)
        * (참고) Destructuring 문법 : let [a, c] = [1, 2]; a는 1이고 c는 2이다.

### state 언제 써야할까?
* 변동시 자동으로 html에 반영되게 만들고 싶으면 state 사용하면 됨.(변수가 변경되도 html 자동 재렌더링)--> 쉽게 말해서 자주 변경될거 같은 html 부분은 state로 만들어놓기

***참고 : 터미널에 ERROR는 에러라 매우 중요. WARNING은 무시가능.(WARNING을 없애고 싶을때는 제일 상단에 `/* eslint-disable */` 입력 (Lint 끄는 기능) )***

### state 변경함수 특징
* 기존 state == 신규 state 의 경우 변경안해줌

### array/object 특징
* array/object 담은 변수엔 화살표만 저장됨
    * `ex) let copy = [...글제목]`
    * 기존 state 가 array/object면 독립적 copy본(shallow copy)을 만들어서 수정해야 함 

## <onClick 사용>
* onClick={}안에 함수이름을 넣어야함. 함수만드는 문법 바로 넣어도 상관없음. 
    * () => {} 이렇게도 사용 가능(함수 만드는 문법)

## <컴포넌트 사용>
### 컴포넌트 만드는 법
1. function 만들기(메인 함수 밖에서)
2. return() 안에 html 담기
3. <함수명></함수명> 쓰기

### 컴포넌트는 언제 써야할까?
1. 반복적인 html 축약할 때
2. 큰 페이지들
3. 자주변경되는 것들

### 컴포넌트 단점
* state 가져다 쓸 때 문제생김(A 함수에 있던 변수는 B 함수에서 맘대로 가져다 쓸 수 없음)

***참고 1 : `return()` 안에 html 병렬기입하려면 의미없는 `<div>` 대신 `<></>` 사용가능***

***참고 2 : <함수명></함수명>, <함수명/> 둘 다 사용가능***

## <React 배포>
* 터미널 → 기존의 켜져있던게 있다면 Ctrl + c (기존에 있던거 꺼짐) → `npm run build` (배포판을 만드는 과정. 빌드명령 시작)
→ build 라는 폴더가 생김 → `npx serve -s build` 