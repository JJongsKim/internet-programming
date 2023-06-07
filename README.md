# 💻 MJU 인터넷프로그래밍 시험 대비 🤓

## HTML/CSS, JavaScript

**[익명함수의 형태]**  
익명함수를 사용할 땐, 익명함수가 선언되고 나서 그 이후에 불러와 사용을 해야한다.  
선언적 함수일 땐 상관 없음!

```javascript
let 함수명 = function () {};
```

**[선언적 함수의 형태]**

```javascript
function 함수명() {}
```

**[콜백함수]**  
익명함수로써, 어떤 이벤트가 발생하거나 특정 시점에 도달 시 시스템에서 호출되는 함수를 말한다.  
쉽게 말하면 매개변수로 전달하는 함수이기도 하다.

**[클로저]**  
지역 변수를 남겨두는 현상이며 리턴된 함수 자체를 말한다.  
그리고 살아남은 지역변수를 출력해준다.  
아래는 그 예시와 관련된 코드다.

```javascript
// 클로저를 제대로 적용하지 않았을 시
let i;
for (i = 0; i < 10; i++) {
  setTimeout(function () {
    alert(i);
  }, 100);
}
```

setTimeout이 호출되는 시점에서는 이미 반복문은 순회되었기에 10만 10번 출력하게 된다.

```javascript
// 클로저를 제대로 적용했을 시
let i;
for (i = 0; i < 10; i++) {
  (function (j) {
    setTimeout(function () {
      alert(j);
    }, 100);
  })(i);
}
```

반복문안에 새로운 함수를 넣었고, 그 함수 안에 alert하는 함수를 하나 더 넣었다.  
이렇게 되면, 반복문 순회가 될 때 function(j)가 순서대로 실행이 되며 숫자 순서대로 출력이 된다.

**[객체]**  
객체에서 자기 자신이 가진 속성을 출력하고 싶을 땐, this 키워드를 사용한다.

**[참조복사, 얕은복사]**

```javascript
// 참조 복사
let originalValue = 10;
let newValue = originalValue;

originalValue = 273;

alert(originalValue); // 273
alert(newValue); // 10
```

newValue에는 originalValue의 원래 값이었던 10이 저장된 상태고, originalValue은 273으로 변경되었다. 그렇기 때문에 newValue에는 따로 변경 사항이 없다.

```javascript
// 얕은 복사
let originalArray = [1, 2, 3, 4];
let newArray = originalArray;
originalArray[0] = 273;
alert(originalArray); // 273, 2, 3, 4
alert(newArray); // 273, 2, 3, 4
```

얕은 복사 자체가 "주소값"을 가리키는 것이다.  
그래서 복사받은 요소도 같은 "주소값"을 가리키기에 originalArray의 값을 따라간다.

**[캡슐화]**  
캡슐화는 잘못 사용될 수 있는 객체의 특정 부분을 사용자가 사용할 수 없게 막는 기술을 말한다.

- 게터 : get~() 형태의 메서드와 같이 값을 가져오는 메서드

- 세터 : set~() 형태의 메서드와 같이 값을 입력하는 메서드

**[생성자 함수와 상속 활용 예시]**

```javascript
// Rectangle 생성자
function Rectangle(w, h) {
  let width = w;
  let height = h;

  // 게터
  this.getWidth = function () {
    return width;
  };
  this.getHeight = function () {
    return height;
  };

  // 세터
  this.setWidth = function (w) {
    if (w < 0) {
      throw "길이는 음수일 수 없습니다.";
    } else {
      width = w;
    }
  };
  this.setHeight = function (h) {
    if (h < 0) {
      throw "길이는 음수일 수 없습니다.";
    } else {
      height = h;
    }
  };
}
// 프로토타입 메서드 생성해놓기
Rectangle.prototype.getArea = function () {
  return this.getWidth() * this.getHeight();
};

// Square 생성자
function Square(length) {
  this.base = Rectangle; // Square에 Rectangle 상속
  this.base(length, length);
}

Square.prototype = Rectangle.prototype;
Square.prototype.constructor = Square;
```

이 외에도 class로 생성자를 선언하는 방법도 있다.

```javascript
class Rectangle {
  // 생성자
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // width의 게터 | 세터
  get width() {
    return this._width;
  }
  set width(input) {
    this._width = input;
  }

  // height의 게터 | 세터
  get height() {
    return this._height;
  }
  set height(input) {
    this._height = input;
  }

  getArea() {
    return this._width * this._height;
  }
}

// Rectangle의 내용을 상속받는 Sqaure 클래스 생성하기
class Square extends Rectangle {
  constructor(length) {
    super(length, length);
    alert(this);
  }
  set width(input) {
    this._width = input;
    this._height = input;
  }
  set height(input) {
    this._width = input;
    this._height = input;
  }
}
```

**[window객체의 onload 이벤트 속성]**  
onload를 통해 동적으로 페이지를 생성하고 결과물을 출력할 수 있다. 관련 예시 코드는 lab7.html 파일을 참고하면 확인해볼 수 있다.

**[문서 객체 만들기]**  
문서 객체를 만들 때, 텍스트 노드와 요소 노드를 생성하여 텍스트를 요소에 붙여준다.  
아래는 그에 대한 간단한 예시다.

```javascript
window.onload = function () {
  let header = document.createElement("h1"); // h1 노드 생성
  let textNode = document.createTextNode("hello Dom"); // Text 노드 생성

  header.appendChild(textNode); // h1에 해당 텍스트를 넣기
  document.body.appendChild(header); // h1를 body에 출력
};
```

**[문서 객체를 가져오는 방법]**

- document.getElementById(아이디명)
- document.getElementByName(name속성값)
- document.getElementsByTagName(태그명)
- document.getElementsByClassName(클래스명)
- document.querySelectorAll(선택자)

**[이벤트 버블링]**  
이벤트 버블링은 자식 노드에서 부모 노드 순으로 이벤트가 실행되는 것을 의미한다.  
가끔은 이 버블링을 막아야 할 경우가 생기는데, 보통 event.stopPropagation()을 통해 막는다.

## Node.js, Express, Restful API

**express 서버 생성 기본형식**

```javascript
let http = require("http"); // 웹 서버를 생성하는 것과 관련된 모든 기능 담당
let express = require("express"); // node.js를 위한 빠르고 간편한 웹 프레임워크

let app = express();

http.createServer(app).listen(포트번호, function () {
  console.log("포트 몇 번 연결 완료~ 하고싶은말~");
});
```

**[미들웨어]**  
클라이언트에서 요청이 오고, 그 요청을 보내기 위해서 응답하려는 중간에 껴서 목적에 맞게 처리해주는, 즉 거쳐가는 함수들을 말한다.  
이 함수는 req(요청) 객체, res(응답) 객체 그리고 어플리케이션 요청-응답 다음 미들웨어 함수에 대한 엑세스 권한을 갖는다.

app.use() 메서드에 입력하는 콜백 함수는 request 이벤트 리스너다.

미들 웨어를 활용한 것들이 대한 몇 개의 예시는 아래와 같다.

- app.use(express.bodyParser())
- app.use(express.session())
- app.use(express.static('public')) : 정적 파일 제공
- app.use(app.router)

**[라우터]**  
사용자 요청에 따라 필요한 정보를 제공하는 기능을 수행하는 미들웨어를 말한다.  
app 객체의 속성이며, 메서드 종류는 아래와 같다.

- get()
- post()
- put()
- del()
- all()

**[Restful API]**  
http 요청을 보낼 때 URI에 어떤 메소드를 사용할지 개발자들 사이에서 지키는 약속과 같다.

## JSP
