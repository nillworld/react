// https://ko.reactjs.org/docs/handling-events.html

import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.isToggleOn ? "ON" : "OFF"}</button>;
  }
}

/* JSX 콜백 안에서 this의 의미에 대해 주의해야 합니다.
  JavaScript에서 클래스 메서드는 기본적으로 바인딩되어 있지 않습니다.
  this.handleClick을 바인딩하지 않고 onClick에 전달하였다면, 함수가 실제 호출될 때 this는 undefined가 됩니다.
  이는 React만의 특수한 동작이 아니며, JavaScript에서 함수가 작동하는 방식의 일부입니다.
  일반적으로 onClick={this.handleClick}과 같이 뒤에 ()를 사용하지 않고 메서드를 참조할 경우, 해당 메서드를 바인딩 해야 합니다.

  bind를 호출하는 것이 불편하다면, 이를 해결할 수 있는 두 가지 방법이 있습니다. 
  실험적인 퍼블릭 클래스 필드 문법(https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)을 사용하고 있다면, 
  클래스 필드를 사용하여 콜백을 올바르게 바인딩할 수 있습니다. */
