// 모듈을 추출합니다.
var http = require("http");
var express = require("express");

var items = [
  {
    name: "홍길동",
    dept: "컴퓨터공학과",
    sID: "s60161234",
  },
  {
    name: "김수정",
    dept: "정보통신공학과",
    sID: "s60191896",
  },
  {
    name: "김동그라미",
    dept: "산업경영공학과",
    sID: "s60131816",
  },
];

// 웹 서버를 생성
var app = express();
var router = express.Router();

app.use(express.static("public"));
app.use(router);

// 라우트 | 데이터 불러오기
app.all("/data.json", function (request, response) {
  response.send(items);
});
app.get("/products", function (request, response) {
  response.send(items);
});

// 인덱스별로 불러오기
app.get("/products/:id", function (request, response) {
  var id = Number(request.param("id"));

  if (isNaN(id)) {
    response.send({
      error: "숫자를 입력하세요!",
    });
  } else if (items[id]) {
    response.send(items[id]);
  } else {
    response.send({
      error: "존재하지 않는 데이터입니다!",
    });
  }
});

// 데이터 추가하기
app.post("/products", function (request, response) {
  var name = request.param("name"); // 이름
  var dept = request.param("dept"); // 학과
  var sID = request.param("sID"); // 학번
  console.log(name);
  var item = {
    name: name,
    dept: dept,
    sID: sID,
  };

  items.push(item);
  response.send({
    message: "데이터를 추가했습니다.",
    data: item,
  });
});

// 데이터 수정하기
app.put("/products/:id", function (request, response) {
  var id = Number(request.param("id"));
  var name = request.param("name");
  var dept = request.param("dept");
  var sID = request.param("sID");

  if (items[id]) {
    if (name) {
      items[id].name = name;
    }
    if (dept) {
      items[id].dept = dept;
    }
    if (sID) {
      items[id].sID = sID;
    }

    response.send({
      message: "데이터를 수정했습니다.",
      data: items[id],
    });
  } else {
    response.send({
      error: "존재하지 않는 데이터입니다!",
    });
  }
});

// 데이터 삭제하기
app.del("/products/:id", function (request, response) {
  var id = Number(request.param("id"));

  if (isNaN(id)) {
    response.send({
      error: "숫자를 입력하세요!",
    });
  } else if (items[id]) {
    items.splice(id, 1);
    response.send({
      message: "데이터를 삭제했습니다.",
    });
  } else {
    response.send({
      error: "존재하지 않는 데이터입니다!",
    });
  }
});

// 웹 서버를 실행
http.createServer(app).listen(52273, function () {
  console.log("Server Running at http://127.0.0.1:52273");
});
