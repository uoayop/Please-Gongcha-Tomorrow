import "./style/menus.css";

function Menus({ ChangeDrink }) {
  return (
    <div className="combine">
      <div className="menu">
        <div className="title">
          <b>메뉴</b>
        </div>
        <div className="content">
          <div
            onClick={() => ChangeDrink({ name: "name", value: "블랙밀크티" })}
          >
            블랙 밀크티
          </div>
          <div
            onClick={() => ChangeDrink({ name: "name", value: "우롱밀크티" })}
          >
            우롱 밀크티
          </div>
          <div
            onClick={() => ChangeDrink({ name: "name", value: "그린밀크티" })}
          >
            그린 밀크티
          </div>
          <div
            onClick={() =>
              ChangeDrink({ name: "name", value: "얼그레이 밀크티" })
            }
          >
            얼그레이 밀크티
          </div>
          <div
            onClick={() =>
              ChangeDrink({ name: "name", value: "딸기 쥬얼리 밀크티" })
            }
          >
            딸기 쥬얼리 밀크티
          </div>
          <div
            onClick={() =>
              ChangeDrink({ name: "name", value: "망고 쥬얼리 밀크티" })
            }
          >
            망고 쥬얼리 밀크티
          </div>
          <div
            onClick={() =>
              ChangeDrink({ name: "name", value: "민트초코 밀크티" })
            }
          >
            민트초코 밀크티
          </div>
        </div>
      </div>
      <div className="topping">
        <div className="title">
          <b>토핑</b>
        </div>
        <div className="content">
          <div onClick={() => ChangeDrink({ name: "topping", value: "" })}>X</div>
          <div onClick={() => ChangeDrink({ name: "topping", value: "펄" })}>
            펄
          </div>
          <div
            onClick={() => ChangeDrink({ name: "topping", value: "화이트펄" })}
          >
            화이트펄
          </div>
          <div onClick={() => ChangeDrink({ name: "topping", value: "코코넛" })}>
            코코넛
          </div>
          <div onClick={() => ChangeDrink({ name: "topping", value: "알로에" })}>
            알로에
          </div>
          <div
            onClick={() =>
              ChangeDrink({ name: "topping", value: "딸기 쥬얼리" })
            }
          >
            딸기 쥬얼리
          </div>
          <div
            onClick={() =>
              ChangeDrink({ name: "topping", value: "망고 쥬얼리" })
            }
          >
            망고 쥬얼리
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menus;
