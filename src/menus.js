import "./style/menus.css";

function Menus({ ChangeDrink }) {
  return (
    <div className="menus">
      <table>
        <th>메뉴</th>
        <tr onClick={() => ChangeDrink({ name: "name", value: "블랙밀크티" })}>
          블랙 밀크티
        </tr>
        <tr onClick={() => ChangeDrink({ name: "name", value: "우롱밀크티" })}>
          우롱 밀크티
        </tr>
        <tr onClick={() => ChangeDrink({ name: "name", value: "그린밀크티" })}>
          그린 밀크티
        </tr>
        <tr
          onClick={() =>
            ChangeDrink({ name: "name", value: "얼그레이 밀크티" })
          }
        >
          얼그레이 밀크티
        </tr>
      </table>

      <table>
        <th>토핑</th>
        <tr onClick={() => ChangeDrink({ name: "topping", value: "펄" })}>
          펄
        </tr>
        <tr onClick={() => ChangeDrink({ name: "topping", value: "화이트펄" })}>
          화이트펄
        </tr>
        <tr onClick={() => ChangeDrink({ name: "topping", value: "코코넛" })}>
          코코넛
        </tr>
        <tr onClick={() => ChangeDrink({ name: "topping", value: "알로에" })}>
          알로에
        </tr>
        <tr onClick={() => ChangeDrink({ name: "topping", value: "" })}>X</tr>
      </table>
    </div>
  );
}

export default Menus;
