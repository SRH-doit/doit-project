# <프로젝트명>입니다!

이 프로젝트는 doit! 교육중 진행된 프로젝트로 여러명이 모여 브레임 스토밍 사이트를 만들어 보는 프로젝트 입니다.

## 기본 디렉토리 구조

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
┣ 📜.gitignore - github에 올라가지 않을 파일을 명시
┣ 📜app.js - express 파일
┣ 📜package-lock.json - npm 다운 파일을 상세 명시
┣ 📜package.json - npm 다운 파일과 실행 script, 상세 내용등을 명시
┗ 📜README.md - github README 파일

📦public
┣ 📂javascripts
┗ 📂styles
┃ ┣ 📂components
┃ ┣ 📂screens
┃ ┃ ┗ 📜Home.css
┃ ┣ 📜reset.css
┃ ┗ 📜style.css

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

를 입력한후 [http://localhost:3000/](http://localhost:3000/)에 접속한다

## 진행 상황

v.0.0.1 - 초기상태 입니다.

## 참여자

-   **국재윤** - _Initial work_ - [msg2324](https://github.com/igiza1213)

또한 여기서 [협업자들](https://github.com/SRH-doit) 을 보실수 있습니다!

## 각주

귀찮아서 템플릿 가져다 쓰고 대충 만들었으니 수정하실분은 부디 수정해주시기 바랍니다.
필자는 이런거 아무것도 몰라요 -**국재윤**

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
