// GET 방식으로 특정 인덱스 내용만 동적으로 보이도록 하기
// POST 방식으로 이름, 학과, 학번 정보를 추가하기
// PUT 방식으로 특정 사람의 정보 수정할 수 있도록 하기
// DELETE 방식으로 특정 사람을 삭제 할 수 있도록 수정하기

const http = require("http");
const express = require("express");

const items = [
  {
    name: "김수정",
    dept: "정보통신공학과",
    sID: "s60191896",
  },
  {
    name: "피카츄",
    dept: "산업경영공학과",
    sID: "s60161616",
  },
  {
    name: "꼬부기",
    dept: "기계공학과",
    sID: "s60171717",
  },
];

const app = express();
const router = express.Router();

app.use(express.static("public"));
app.use(router);

app.all("/data.json", function (requset, response) {
  response.send(items);
});

// 모든 조회 | id 별 조회 (GET)
app.get("/products", function (request, response) {
  response.send(items);
});
app.get("/products/:id", function (request, response) {
  const id = Number(request.params("id"));

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

// 데이터 추가 (POST), 이건 파라미터로 추가하는 방법
app.post("/products", function (request, response) {
  const name = request.params("name");
  const dept = request.params("dept");
  const sID = request.params("sID");

  const item = {
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
  const id = Number(request.params("id"));
  const name = request.params("name");
  const dept = request.params("dept");
  const sID = request.params("sID");

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

app.delete("/products/:id", function (request, response) {
  const id = Number(request.params("id"));

  if (isNaN(id)) {
    response.send({
      error: "숫자를 입력하세요!",
    });
  } else if (items[id]) {
    items.splice(id, 1);
    response.send({
      message: "데이터를 삭제했습니다",
    });
  } else {
    response.send({
      error: "존재하지 않는 데이터입니다!",
    });
  }
});
