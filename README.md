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

## Node.js, Restful API

## JSP
