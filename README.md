# <프로젝트명>입니다!

이 프로젝트는 doit! 교육중 진행된 프로젝트로 여러명이 모여 브레임 스토밍 사이트를 만들어 보는 프로젝트 입니다.

## 기본 디렉토리 구조

```
📦doit-project
┣ 📂pages - html 파일을 담는 폴더
┃ ┣ 📜404.html - 404 Not Found 일때 보여줄 html
┃ ┗ 📜index.html - Home 페이지
┣ 📂public - css, javascript 등의 파일을 담을 폴더(express의 정적 파일 제공)
┃ ┣ 📂javascripts - 자바스크립트 파일을 담는 폴터
┃ ┣ 📂styles - css 파일을 담는 폴더
┃ ┃ ┣ 📂components - components 의 css를 담는 폴더
┃ ┃ ┣ 📂screens - screens 단위로 css를 담는 폴더
┃ ┃ ┃ ┗ 📜Home.css - Home 페이지의 css
┃ ┃ ┣ 📜reset.css - 기본 reset css
┃ ┃ ┗ 📜style.css - 모든 css 파일을 규합하는 css
┣ 📜app.js - express 파일
┣ 📜.env - 환경 변수를 설정하기 위한 파일
┣ 📜.gitignore - github에 올라가지 않을 파일을 명시
┣ 📜nodemon.json - nodemon 설정을 명시
┣ 📜package-lock.json - npm 다운 파일을 상세 명시
┣ 📜package.json - npm 다운 파일과 실행 script, 상세 내용등을 명시
┗ 📜README.md - github README 파일
```

## 실행 방법

pull을 받은다음

```
npm install
```

을 터미널에 입력한다 - npm 파일을 다운로드
이후

```
npm run start:dev
```

을 터미널에 입력한다 그리고 [http://localhost:3000/](http://localhost:3000/)에 접속한다
이후부터는 라이브 서버같이 저장한후 새로고침하면 바로 적용된다
(이보다 편한방법을 알고 계시다면 알려주시기 바랍니다)

종료할때는 ctrl + c를 터미널에 입력해주시기 바랍니다

## 개발 방법

1. 프론트엔드: feature-front 브랜치에 들어가서 pages와 public폴더를 활용하여 개발한다. 작업이 끝난후 커밋과 푸쉬를 하고, 총 책임자(국재윤, 정현서)에게 자신이 한 작업을 설명 후 develop 브랜치에 pull request후 merge를 한다. merge를 하던중 conflict이 나면 merge를 멈추고 작업했던 모든 파일을 자신의 로컬에 저장후 총 책임자(국재윤, 정현서)를 호출한다.

2. 백엔드: feature-back 브랜치에 들어가서 app.js 파일에서 개발한다. 작업이 끝난후 커밋과 푸쉬를 하고, 총 책임자(국재윤, 정현서)에게 자신이 한 작업을 설명 후 develop 브랜치에 pull request후 merge를 한다. merge를 하던중 conflict이 나면 merge를 멈추고 작업했던 모든 파일을 자신의 로컬에 저장후 총 책임자(국재윤, 정현서)를 호출한다.

3. 데브옵스: feature-devops 브랜치에 들어가서 BackEnd폴더를 활용하여 개발한다. 작업이 끝난후 커밋과 푸쉬를 하고, 총 책임자(국재윤, 정현서)에게 자신이 한 작업을 설명 후 develop 브랜치에 pull request후 merge를 한다. merge를 하던중 conflict이 나면 merge를 멈추고 작업했던 모든 파일을 자신의 로컬에 저장후 총 책임자(국재윤, 정현서)를 호출한다.

## env

doit 폴더에 .env라는 파일을 만들고 안에 내용을 넣는다

'''
MONGO_URL = mongodb+srv://Admin:PaRRseqABOcfNMv8@cluster0.4boiy3r.mongodb.net/doitDB?retryWrites=true&w=majority
Atlas_id = "driveonly235@gmail.com"
Atlas_pw = "dbswornR1234"
DB_name = "doitDB"
collection_name = "usertbl"
'''

## 진행 상황

v.0.0.1 - 초기상태 입니다.

## 참여자

-   **국재윤** - _Initial work_ - [msg2324](https://github.com/igiza1213)
-   **정현서** - _Back-End and DevOps work_ - [정삼복](https://github.com/NANONANDFLASH)

또한 여기서 [협업자들](https://github.com/SRH-doit) 을 보실수 있습니다!

(작업후 직접 추가하시면 됩니다)

## 각주

귀찮아서 템플릿 가져다 쓰고 대충 만들었으니 수정하실분은 부디 수정해주시기 바랍니다.
필자는 이런거 아무것도 몰라요 -**국재윤**

윗사람이 만들어놓은거에 숫가락 엄청 올리고 갑니다.
맛집이네요!! -**정현서**

<!-- These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. -->

<!-- ### Prerequisites

What things you need to install the software and how to install them

```
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
``` -->

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
