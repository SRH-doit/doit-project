# do it! 프로젝트입니다!

이 프로젝트는 doit! 교육중 진행된 프로젝트로 여러명이 모여 브레임 스토밍 사이트를 만들어 보는 프로젝트 입니다.

## 기본 디렉토리 구조

```
📦doit-project
 ┣ 📂routes
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┣ 📜login.html - 로그인 페이지 HTML 파일
 ┃ ┃ ┃ ┗ 📜signup.html - 회원가입 페이지 HTML 파일
 ┃ ┃ ┣ 📂public
 ┃ ┃ ┃ ┣ 📂javascripts
 ┃ ┃ ┃ ┃ ┗ 📜mian.js - 인증 모듈의 JavaScript 파일
 ┃ ┃ ┃ ┗ 📂styles
 ┃ ┃ ┃ ┃ ┣ 📜login.css - 로그인 페이지의 CSS 파일
 ┃ ┃ ┃ ┃ ┣ 📜reset.css - CSS 리셋 파일
 ┃ ┃ ┃ ┃ ┗ 📜signup.css - 회원가입 페이지의 CSS 파일
 ┃ ┃ ┗ 📜auth.js - 인증 모듈의 JavaScript 파일
 ┃ ┣ 📂game
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┣ 📜dice.html - 주사위 게임 페이지 HTML 파일
 ┃ ┃ ┃ ┣ 📜index_DDD.html
 ┃ ┃ ┃ ┣ 📜nonsense.html
 ┃ ┃ ┃ ┣ 📜seossda.html
 ┃ ┃ ┃ ┣ 📜tictactoe.html - 틱택토 게임 페이지 HTML 파일
 ┃ ┃ ┃ ┗ 📜wordchain.html
 ┃ ┃ ┗ 📂public
 ┃ ┃ ┃ ┣ 📂img
 ┃ ┃ ┃ ┃ ┣ 📜B.jpg
 ┃ ┃ ┃ ┃ ┣ 📜gv40000150186_1.jpg
 ┃ ┃ ┃ ┃ ┗ 📜매2.jpg
 ┃ ┃ ┃ ┣ 📂javascripts
 ┃ ┃ ┃ ┃ ┣ 📜dice.js - 주사위 게임의 JavaScript 파일
 ┃ ┃ ┃ ┃ ┣ 📜J.js
 ┃ ┃ ┃ ┃ ┣ 📜main.js - 게임 모듈의 JavaScript 파일
 ┃ ┃ ┃ ┃ ┗ 📜tictacteo.js - 틱택토 게임의 JavaScript 파일
 ┃ ┃ ┃ ┗ 📂styles
 ┃ ┃ ┃ ┃ ┣ 📜dice.css - 주사위 게임의 CSS 파일
 ┃ ┃ ┃ ┃ ┣ 📜Home.css
 ┃ ┃ ┃ ┃ ┣ 📜O.css
 ┃ ┃ ┃ ┃ ┣ 📜reset.css - CSS 리셋 파일
 ┃ ┃ ┃ ┃ ┗ 📜tictactoe.css - 틱택토 게임의 CSS 파일
 ┃ ┣ 📂post
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┣ 📜list.html - 글 목록 페이지 HTML 파일
 ┃ ┃ ┃ ┣ 📜snow2.html
 ┃ ┃ ┃ ┣ 📜web.html
 ┃ ┃ ┃ ┗ 📜write.html - 글 작성 페이지 HTML 파일
 ┃ ┃ ┗ 📂public
 ┃ ┃ ┃ ┣ 📂javascripts
 ┃ ┃ ┃ ┃ ┗ 📜main.js - 게시글 모듈의 JavaScript 파일
 ┃ ┃ ┃ ┗ 📂styles
 ┃ ┃ ┃ ┃ ┣ 📜kde.css
 ┃ ┃ ┃ ┃ ┣ 📜list.css - 글 목록 페이지의 CSS 파일
 ┃ ┃ ┃ ┃ ┣ 📜reset.css - CSS 리셋 파일
 ┃ ┃ ┃ ┃ ┗ 📜write.css - 글 작성 페이지의 CSS 파일
 ┃ ┗ 📂topic
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┣ 📜404.html - 404 Not Found 페이지 HTML 파일
 ┃ ┃ ┃ ┗ 📜home.html - 홈 페이지 HTML 파일
 ┃ ┃ ┗ 📂public
 ┃ ┃ ┃ ┣ 📂img
 ┃ ┃ ┃ ┃ ┣ 📜logo.png
 ┃ ┃ ┃ ┃ ┗ 📜logo2.png
 ┃ ┃ ┃ ┣ 📂javascripts
 ┃ ┃ ┃ ┃ ┣ 📜main.js - 주제 모듈의 JavaScript 파일
 ┃ ┃ ┃ ┃ ┗ 📜sparkle.js
 ┃ ┃ ┃ ┗ 📂styles
 ┃ ┃ ┃ ┃ ┣ 📜404.css - 404 Not Found 페이지의 CSS 파일
 ┃ ┃ ┃ ┃ ┣ 📜Home.css - 홈 페이지의 CSS 파일
 ┃ ┃ ┃ ┃ ┣ 📜reset.css - CSS 리셋 파일
 ┃ ┃ ┃ ┃ ┗ 📜sparkle.css
 ┣ 📜.gitignore - GitHub에 올라가지 않을 파일을 명시
 ┣ 📜app.js - Express 파일
 ┣ 📜database.js - 데이터베이스 파일
 ┣ 📜nodemon.json - nodemon 설정 파일
 ┣ 📜package-lock.json - npm 패키지 의존성 관리 파일
 ┣ 📜package.json - 프로젝트 정보 및 의존성 관리 파일
 ┗ 📜README.md - 프로젝트의 README 파일
```

## 실행 방법

node.js 설치 검색해서 현재버전 설치한다 설치창에서 무지성 확인 누르면 된다.

pull을 받은다음

```console
npm install
```

을 터미널에 입력한다 - npm 파일을 다운로드
이후

```console
npm run start:dev
```

을 터미널에 입력합니다. 그리고 [http://localhost:3000/](http://localhost:3000/)에 접속한다
이후부터는 라이브 서버같이 저장한후 새로고침하면 바로 적용이 됩니다.

종료할때는 ctrl + c를 터미널에 입력해주시기 바랍니다

## 개발 방법

**모르겠다면 슬랙의 문의사항에 올려주시기 바랍니다.**

표준 규격을 정의합니다.
{}안에는 각자 맞는것을 넣으시면 됩니다.

되도록 html, css, js 파일이름은 같게, 소문자로, 직관적이게, 띄어쓰기 없이 써주시기 바랍니다.

```html
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
            rel="stylesheet"
            href="/routes/{폴더 이름}/public/styles/{파일 이름}.css"
        />
        <title>Do IT WEB project | {파일이름}</title>
    </head>
    <body>
        ...//
        <script src="/routes/{폴더 이름}/public/javascripts/{파일 이름}.js"></script>
    </body>
</html>
```

```css
@import "reset.css";

...//
```

js와 css는 따로 규격이있지는 않습니다. css안에 `css @import "reset.css"; `만 잘써주세요

## atlas

```Dotenv
MONGO_URL = mongodb+srv://admin:PaRRseqABOcfNMv8@cluster0.4boiy3r.mongodb.net/doitDB?retryWrites=true&w=majority
Atlas_id = "driveonly235@gmail.com"
Atlas_pw = "dbswornR1234"
DB_name = "doitDB"
collection_name = "usertbl"
```

## 진행 상황

v.0.0.1 - 초기상태 입니다.
v.0.0.2 - README.md 제작과 기초 구조 설정을 끝냈습니다.
<br>
v.0.1.0 - express와 mongoDB를 연결하였습니다.
v.0.1.1 - routing을 분리 했습니다.
v.0.1.2 - routing을 안정성있게 구조를 변경했다.
v.0.1.3 - 모든 파일을 자동으로 라우팅해준다 주소는 /상위폴더명/파일이름 이다. 그리고 db파일을 분리했고 정적파일 주소도 바꿨다.

## 참여자

-   **국재윤** - _Initial work_ - [msg2324](https://github.com/igiza1213)
-   **정현서** - _Back-End and DevOps work_ - [정삼복](https://github.com/NANONANDFLASH)

또한 여기서 [협업자들](https://github.com/SRH-doit) 을 보실수 있습니다!

(작업후 직접 추가하시면 됩니다)

## recommended extensions

작성자의 개인취향이 들어가있다
theme : [Atom One Dark Theme](https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark)
icon : [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
formatter : [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
적용법: VSC 설정에 들어간후 우상단 실행 아이콘 오른쪽 아이콘을 눌러 settings.json를 들어간후 빈공간에

```json
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"prettier.tabWidth": 4,
"workbench.iconTheme": "material-icon-theme",
"workbench.colorTheme": "Atom One Dark",
"terminal.integrated.defaultProfile.windows": "Git Bash",
"explorer.compactFolders": false,
"editor.tokenColorCustomizations": {
        "comments": "#d39e9e"
    },
```

첫번째 줄은 저장시 자동정렬할지를 설정하는 문구다
두번째 줄은 기본 포멧터를 prettier로 설정하는 문구이다
세번째 줄은 prettier 정렬 단위(tap 단위)를 4만큼 정하는 구문이다
네번째 줄은 icon을 meterial icon으로 하는 문구이다
다섯째 줄은 theme를 atom 테마로 하는 문구이다
여섯째 줄은 기본 터미널을 git bash로 정하는 문구이다
일곱째 줄은 컴팩트 방식의 폴더정렬을 취소하는 문구이다
여덟째 줄은 주석 색을 바꾸는 문구이다

를 붙여 넣기한다 이중 필요없다 생각되는 문구는 지워도 무방하다

나머지는 여기있다

```json
{
    "recommendations": [
        "pkief.material-icon-theme",
        "akamud.vscode-theme-onedark",
        "dzhavat.css-initial-value",
        "pranaygp.vscode-css-peek",
        "usernamehw.errorlens",
        "ecmel.vscode-html-css",
        "anteprimorac.html-end-tag-labels",
        "solnurkarim.html-to-css-autocompletion",
        "zignd.html-css-class-completion",
        "ritwickdey.liveserver",
        "christian-kohler.path-intellisense",
        "esbenp.prettier-vscode",
        "tabnine.tabnine-vscode"
    ]
}
```

## 각주

귀찮아서 템플릿 가져다 쓰고 대충 만들었으니 수정하실분은 부디 수정해주시기 바랍니다.
필자는 이런거 아무것도 몰라요 -**국재윤**

윗사람이 만들어놓은거에 숫가락 엄청 올리고 갑니다.
맛집이네요!! -**정현서**

<!-- These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. -->

<!-- ### Prerequisites

What things you need to install the software and how to install them

````

Give examples

```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```

Give the example

```

And repeat

```

until finished

```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```

Give an example

```

### And coding style tests

Explain what these tests test and why

```

Give an example

```-->

<!-- ## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).  -->

```

```
