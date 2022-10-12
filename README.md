<div align="center">
  <br />
  <img src="https://user-images.githubusercontent.com/60915285/195415262-2872bdb3-7974-4163-9df4-40c3ee2184b0.png" width="20%" />
  <br />
</div>

<div align="center">
 <h3><b>Hugging</b></h3>
언택트 마음챙김 웹서비스<br><br>
  삼성 청년 SW 아카데미 특화 프로젝트<br>
  2022.09.29 ~ 2022.10.07
  <br><br>

  [Notion](https://denim-beechnut-408.notion.site/Hugging-6a51d8c22b494978ae2626b962e9266d)  |  [UCC]()
</div>
<br/>


## 서비스 배경 💡

건강보험심사평가원 통계에 따르면 5년간 우울증 환자 수는 지속적인 증가 추세에 있습니다.<br>
특히, 최근 코로나19의 확산으로 일상에 큰 변화가 생기면서 우울감과 무기력증이 늘었습니다.<br>
이러한 이유들로, 지친 마음을 위로해주어 일상에 활기를 불어넣는 마음챙김 서비스를 생각하였습니다.<br>

<br><br>

## 개발환경 및 기술 스택 🔨

### FE
`HTML`<br>
`CSS` <br>
`Javascript`<br>
`Node.js 16.16.0`<br>
`React 18.2.0`

  ```
  ├─myApp
  │  ├─public
  │  │  └─assets
  │  │      └─icon
  │  └─src
  │      ├─components
  │      ├─pages
  │      └─theme
  ├─public
  └─src
      ├─components
      │  ├─counsel
      │  ├─counselor
      │  ├─main
      │  ├─media
      │  ├─mission
      │  └─ui
      ├─config
      ├─fonts
      ├─helpers
      ├─img
      ├─Layout
      ├─lib
      ├─pages
      │  ├─counsel
      │  ├─counselor
      │  ├─main
      │  ├─media
      │  ├─mission
      │  └─user
      ├─store
      ├─styles
      └─styles2
  
  ```

  

### BE
`Java 8`<br>
`Python`<br>
`Spring Boot 2.7.2`<br>
`Django`<br>
`Gradle` <br>
`JPA`<br>
`MySQL`<br>
`Swagger2 3.0.0`<br>


### Metaverse
`Unity`<br>
`C#`<br>
`WebGL`<br>
`Photon PUN2`<br>
`Agora Real-Time Voice`<br>


### CI/CD
`AWS`<br>
`Ubuntu`<br>
`Docker`<br>
`Jenkins`<br>
`Nginx`<br>


### 버전/이슈 관리
`Jira`<br>
`GitLab`<br>
`Sourcetree`<br>

### TOOL
`Postman`<br>
`Figma`<br>

### 협업
`Cisco Webex Meetings`<br>
`Mattermost`<br>
`Notion`<br>

### IDE
`Visual Studio Code`<br>
`Visual Studio`<br>
`IntelliJ`<br>
<br>
  

## 서비스 구조도 🔍

![서비스구조도.png](https://user-images.githubusercontent.com/60915285/195417654-f548e9c9-82cb-4240-80f2-ab9fadacff37.png)



## 주요 기능 📚

### 로그인 및 회원가입<br>
  ![signup](/uploads/26c531393819b59ef9152714f8386e37/signup.gif)
- 감정 카테고리를 바탕으로 음악 추천 서비스가 제공되므로 회원가입 시 사용자의 감정을 받습니다.

- 전문가 상담 기능이 제공되기 때문에 카카오 소셜 로그인을 통해 인증된 사용자가 서비스를 이용할 수 있도록 했습니다.
<br>
  

### ASMR / 음악 빅데이터 추천 서비스<br>
​	![music](/uploads/a2274ebdd7ae71fa96c5adc3f30165b1/music.gif)

<br>



### 메타버스 상담 서비스<br>
<img width="600" alt="스크린샷 2022-10-13 오전 3 27 24" src="https://user-images.githubusercontent.com/60915285/195420529-131b7a0a-c5ed-4e66-aeac-b976760e5b15.png">
  ![unity](/uploads/733a93c0f81715062f1ea482cc58cacc/unity.gif)<br>

- 메타버스 상담 서비스는 대면 상담을 어려워하고 꺼려하는 사람들이 상담에 대한 거부감을 낮추기 위해 기획하였습니다. 

- 1:1 상담 및 커뮤니티 상담으로 나누어져있습니다. 1:1 상담은 예약을 통해 상담사와 둘이서 진행을 하고, 커뮤니티 상담은 원하는 주제 방을 선택하여 들어갈 수 있습니다.

- 상담방에서는 방 정보(방 인원, 인원 목록)를 볼 수 있으며 음성채팅 기능, 감정표현 기능이 있습니다.

- 상담방은 상담 주제에 맞춰 BGM/ASMR과 장소가 정해집니다.

- 메타버스 상담 서비스는 Unity로 구현하였고, 멀티서버는 Photon, 음성채팅은 Agora 기술을 사용하였습니다.
<br><br>
  

### 상담 예약 서비스
  ![reserveCounsel](/uploads/d15dec04c001e6d92767453e0c58088d/reserveCounsel.gif)
  * 상단에서 나의 예약 정보를 확인할 수 있습니다. 
* 예약 취소가 가능하며, 입장 버튼을 통해 해당 상담사가 상주한 메타버스 방으로 이동하여 상담을 진행합니다.
* 상담 예약 시엔 상담을 받고 싶은 주제를 선택하여 원하는 상담사를 선택하고 날짜, 시간을 선택하여 예약을 완료합니다.
<br>
<br>

### 상담사 빅데이터 추천 서비스
![counselList](/uploads/60608b5a0b56b4d256a6c3e6162ebb40/counselList.gif)
* 각각의 사용자의 성향에 맞는 상담사 추천 서비스를 제공합니다. 원하시는 상담사를 손쉽게 찾을 수 있습니다.
* 상담사의 전문 분야에 따른 전체 상담사 목록도 확인할 수 있습니다.
<br>
<br>

### 상담사 리뷰
![counselreview](/uploads/756ec68e62d6c0ede875fbd1fe2cdbed/counselreview.gif)
* 상담사와의 상담 종료 후 해당 상담사에 대한 별점과 리뷰를 남길 수 있습니다.
* 해당 내용은 추후 상담사 맞춤 추천 서비스의 데이터로 사용됩니다.
<br>
<br>

### 1분 데일리 미션<br>
  ![mission](/uploads/6bd9ed3433967026b532f6a12cfd4de6/mission.gif)<br>
  
- 마음을 다스리는 데일리 1분 미션을 수행합니다.

- 스탬프 색을 통해 하루에 수행한 미션 갯수 확인이 가능하고, 날짜별 스탬프를 모을 수 있습니다.

  <br>

  

### 상담사 로그인 / 마이페이지<br>
  ![counselor](/uploads/5821cf6927dbb8cda05180816c230e08/counselor.gif)
- 상담사는 마이페이지에서 예약 일정을 확인하고 메타버스 입장이 가능합니다.
<br>


## 프로젝트 산출물✏

- [요구사항 명세서](https://docs.google.com/spreadsheets/d/1wqxq_37LHVrLwG95qNnF8Qxr5pk0scwcUsZ9KtmnuQY/edit#gid=0)

- [와이어 프레임](https://www.figma.com/file/UMwRVfUeCFs2bUAPA4dwPO/Hugging?node-id=0%3A1)

- [ERD](https://www.google.com/url?q=https://www.erdcloud.com/d/Lu4txFFatKsjZjNSy&amp;sa=D&amp;source=editors&amp;ust=1665409049197761&amp;usg=AOvVaw0-BP6mWdj5M5lmPCAex3d9)

- 포팅 메뉴얼

  <br>

## 팀원 소개 👪

- Backend : 유일권, 송예림, 최주희
- Frontend: 김호진, 이주희, 조성규
