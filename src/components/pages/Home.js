import { React, Component } from "react";
import Header from "../Header";

export default class Home extends Component {
  render() {
    return (
      <div className="sidenav">
        <h1>
          <Header title="Панель управления" />
        </h1>
        <h2 class="h2">Выберите функцию.</h2>
        <ul class="Pompadur">
          <li>
            <a href="/userpanel">Панель управления пользователями</a>
          </li>
          <li>
            <a href="/logs">Логи</a>
          </li>
          <li>
            <a href="/orders">Список заказов</a>
          </li>
          <li>
            <a href="/alerts">Управление рассылкой</a>
          </li>
          <li>
            <a href="/catalog">Управление каталогом</a>
          </li>
        </ul>
      </div>
    );
  }
}
