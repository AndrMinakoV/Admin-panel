import { React, Component } from "react";
import Header from "../Header";

export default class Orders extends Component {
  render() {    document.title = 'BeautyBot | Управление заказами'
    return (
        <h1>
        <Header title="Управление заказами" />
      </h1>
    );
  }
}