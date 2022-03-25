# [Project1] 케어닥 과제

## 요구사항 링크
[노션 링크](https://caredoc.notion.site/caredoc/87aed4d99b1246a1a42fd5b065659cde)



## 🚀 배포 링크



## 💿 실행 방법

```cmd
$ git clone https://github.com/khw970421/wanted-codestates-project-6

$ npm install

$ npm run start
```

## 🎇사용 기술스택

- Javascript
- React
- axios
- styled-components
- React DatePicker
- React Router

## ✅ 구현 요구사항

* 처음 생각했을때 redux를 사용하는 것은 간단한 값들을 navigate하면서 매개변수로 전달하기만 하면 된다고 판단하여 redux는 불필요하다고 생각하여 사용하지 않았다.  

### 1. 과제에서 요구한 요구사항
#### 시작화면 (Main.jsx)
- [X] 신청하기버튼을 누르면 신청정보을 입력하는 화면으로 전환됩니다.

#### 간병인 신청정보 입력 (Select.jsx)
- [x] 돌봄 유형을 2가지의 상태정보가 있고 하나만 선택할 수 있다.
- [x] 하나를 선택했다면 다음 화면으로 넘어갈 수 있습니다.

#### 스케쥴 입력 (Schedule.jsx)
- [x] 시작날짜, 종료날짜, 돌봄 시작 시간, 하루 돌봄 시간을 각각 입력받습니다.
- [ ] 시작날짜, 종료날짜는 날짜 택스트 YYYY-MM-DD형식으로 전달합니다.
- [x] 돌봄시작 시간, 하루 돌봄시간은 StaticData를 이용하여 SelectBox로 구현
- [x] 하루 돌봄시간은 1단계에서 24시간 상주 를 선택한 경우 Disabled 처리를 하여 선택하지 못하게 하고 표기는 24시간 이 되도록 합니다.
- [ ] 시작일이 오늘일 경우 돌봄 시작 시간은 현재 시간 + StaticData.policy.minBeforeFirstScheduleVisitHour의 값을 더한 시간부터 선택이 가능해야합니다.
- [x] 시작날짜, 종료날짜, 돌봄 시작 시간, 하루 돌봄 시간를 모두 입력하면 다음 버튼이 활성화

#### 주소 입력 (Address.jsx)
- [x] 주소를 검색하는 기능은 juso.go.kr에서 제공하고 있는 OPEN API를 이용하여 구현
- [x] juso Open API에서 검색되어 선택된 모든 정보를 다 API의 address정보를 채우시는 데 활용
- [x] 추가로 addressDetail 부분에 상세 주소를 입력받아 주세요.
- [x] 주소정보, 상세주소를 입력하면 다음 버튼이 활성화 됩니다. 

#### 전화 번호 입력 및 입력한 정보 확인 (Result.jsx)
- [x] 신청정보의 마지막 단계인 전화번호 입력입니다.
- [x] 전화번호를 입력하면 다음 버튼이 활성화 됩니다

#### 신청완료 (Submit.jsx)
- [x] 끝내기를 누르면 처음 화면이 나오면 됩니다.

### 2. 스스로 추가한 요구사항
- [x] 전화번호의 경우 api로 전송할때 PhoneNumber를 string으로 받다보니 서로 전송할 때 번호가 아닌 알파벳을 써도 전송이 가능하여 해당 예외처리를 정규표현식을 이용해 구현
- [x] 케어닥에서 요구한 figma에서의 주소 관련에서는 주소 검색시 5개만 보여주는 상태로 되어있어 해당 5개가 아닌 다른 검색 결과도 필요할 것이라 판단되어 요청에 대하여 페이지네이션을 구현 

## 👩‍💻 구현

### 시작화면, 간병인 신청정보 입력

https://user-images.githubusercontent.com/59253551/160046184-cbc7e024-eccd-4c2e-a5ba-174ceaf60fc7.mp4

### 신청정보에 따라 하루 돌봄 선택 option 체크 여부 확인

https://user-images.githubusercontent.com/59253551/160046189-b5a9d6fb-d340-43de-8caa-8e7e3783dcb2.mp4

### 원하는 주소 검색 및 새로운 주소 검색과 페이지네이션 구현 (첫페이지 마지막페이지 체크)

https://user-images.githubusercontent.com/59253551/160046192-be734974-7567-4d79-9215-4ebca259e829.mp4




### 관련 주소 결과와 전번 입력 후 제출 

https://user-images.githubusercontent.com/59253551/160046714-7814379e-6d61-4f80-9769-7722f68ade81.mp4





## 👷 구현하지 못한 부분들
* 케어닥에서 요구한 figma에서는 시작일이나 종료일을 누를 시에 달력으로 넘어가는데 달력을 한개의 크기로 만든다면 여백의 부분에 달력을 바로 넣는다면 시작일이나 종료일을 클릭하여 다시 달력에 들어가는 Deps를 막을 것이라 판단하여 아래와 같이 구현하였다. 
<img width="370" alt="image" src="https://user-images.githubusercontent.com/59253551/160042219-f338a2e1-d908-4d39-b3db-86e4780f23e4.png">

<img width="245" alt="image" src="https://user-images.githubusercontent.com/59253551/160042477-80b8f9dd-c1a6-41f0-b2e4-85c7424faa6a.png">

## 궁금점과 아쉬운점 만족스러운점

### 궁금점
* liNm과 liName이 연결되고 , siNm과 sidoName, jibunAddress와 jibunAddr이 연결된다는 것은 이해가 되는데 그외에 연결을 어디에 어떻게 지어야할지 이해가 안되는 key값들은 알아서 연결하라는건지 잘 모르겠었다. 예를들어 body의 myundongName이 나의운동네임? 이라는거같은데 이게 주소에서 받아온 어떤것과 연결짓는 것인지 이해안되는 것이다. 

#### 신청하는데 넣는 body 내용
<img width="461" alt="image" src="https://user-images.githubusercontent.com/59253551/160046976-4803ce0c-bbed-48e3-874d-3746a6252f35.png">
#### 도로명주소로부터 얻어온 데이터
<img width="406" alt="image" src="https://user-images.githubusercontent.com/59253551/160046977-de444bd2-e699-4f95-a296-6242e08b1d82.png">

### 아쉬운점
1. 돌봄시간선택과 하루돌봄선택의 style이 모달에서 아래에서 위로 올라오는 피그마에서 요구한 사항처럼 하고 싶었는데 못한 것이 아쉬웠다. 
2. 같은 틀에 대해 global style를 제대로 적용 못한 것이 아쉽다.

### 만족스러운 점
1. 필요한 기능구현 자체는 기간내에 혼자서 거의 완성한 것
2. 주소 검색에 대해 페이지네이션 구현
3. 여러번 사용하기위한 Text 컴포넌트나 Button 컴포넌트를 통해 재사용을 최대한 하면서 defaultProps를 사용하여 기본색에 대해서는 따로 props를 전달하지 않아서 코드를 줄였다고 생각한다.

## 폴더 구조
│  App.js
│  index.js
│  setupProxy.js
│
├─components
│      Button.jsx
│      CareType.jsx
│      Header.jsx
│      RoadJibunAddress.jsx
│      Text.jsx
│      TextSelectCareType.jsx
│
├─pages
│      Address.jsx
│      Main.jsx
│      Result.jsx
│      Schedule.jsx
│      Select.jsx
│      Submit.jsx
│
├─styles
│      GlobalStyles.js
│      theme.js
│
└─utils
        axios.js

