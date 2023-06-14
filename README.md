# <프로젝트명>입니다!

이 프로젝트는 doit! 교육중 진행된 프로젝트로 여러명이 모여 브레임 스토밍 사이트를 만들어 보는 프로젝트 입니다.

## 기본 디렉토리 구조

```
📦doit-project
 ┣ 📂public - html, css, javascript 등의 파일을 담을 폴더(express의 정적 파일 제공)
 ┃ ┣ 📂pages - html 파일을 담는 폴더
 ┃ ┃ ┣ 📂auth - login 관련 html
 ┃ ┃ ┃ ┣ 📜login.html
 ┃ ┃ ┃ ┗ 📜signup.html
 ┃ ┃ ┣ 📂game - game 관련 html
 ┃ ┃ ┃ ┣ 📜dice.html
 ┃ ┃ ┃ ┗ 📜seossda.html
 ┃ ┃ ┣ 📂post  글 관련 html
 ┃ ┃ ┃ ┣ 📜list.html
 ┃ ┃ ┃ ┗ 📜write.html
 ┃ ┃ ┣ 📜404.html - 404 Not Found 일때 보여줄 html
 ┃ ┃ ┗ 📜index.html - Home 페이지
 ┃ ┣ 📂javascripts - 자바스크립트 파일을 담는 폴터
 ┃ ┣ 📂styles - css 파일을 담는 폴더
 ┃ ┃ ┣ 📂components - components 의 css를 담는 폴더
 ┃ ┃ ┣ 📂screens - screens 단위로 css를 담는 폴더
 ┃ ┃ ┃ ┗ 📜Home.css - Home 페이지의 css
 ┃ ┃ ┣ 📜reset.css - 기본 reset css
 ┃ ┃ ┗ 📜style.css - 모든 css 파일을 규합하는 css
 ┣ 📂routes - routing 분할
 ┃ ┣ 📜auth.js - auth 폴더의 라우팅에 대해 규정
 ┃ ┣ 📜game.js - game 폴더의 라우팅에 대해 규정
 ┃ ┗ 📜post.js - post 폴더의 라우팅에 대해 규정
 ┣ 📜app.js - express 파일
 ┣ 📜.gitignore - github에 올라가지 않을 파일을 명시
 ┣ 📜nodemon.json - nodemon 설정을 명시
 ┣ 📜package-lock.json - npm 다운 파일을 상세 명시
 ┣ 📜package.json - npm 다운 파일과 실행 script, 상세 내용등을 명시
 ┗ 📜README.md - github README 파일
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

을 터미널에 입력한다 그리고 [http://localhost:3000/](http://localhost:3000/)에 접속한다
이후부터는 라이브 서버같이 저장한후 새로고침하면 바로 적용된다
(이보다 편한방법을 알고 계시다면 알려주시기 바랍니다)

종료할때는 ctrl + c를 터미널에 입력해주시기 바랍니다

## 개발 방법

**모르겠다면 국재윤을 불러주세요**

public/pages 폴더에 html들이 들어있다. 각 폴더 안에 세부분류가 더있다.
public/styles/screens 폴더에 css를 작성한다
public/javascripts 폴더에 js가 있다.

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
