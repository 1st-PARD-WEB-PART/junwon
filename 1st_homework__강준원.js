import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// 입력 라벨을 나타내는 함수 - <Label>로  props 활용하여 컴포넌트 묶어주기
function Label(props) {
  return (
    <label style={{ margin: '30px' }}>  
    {/* // 여백 추가하기 */}
      {props.labelText} 
      {/* 라벨의 텍스트 렌더링 */}
      {props.children}
    </label>
  );
}

// 입력 라벨과 입력 필드를 포함하는 함수 - <Input>으로 props 활용하여 컴포넌트 묶어주기
function InputLabel(props) {
  return (
    <Label labelText={props.labelText}>
      <input
        type={props.type}
        // 입력 값의 타입을 의미
        value={props.value}
        // 입력 값의 현재 값
        onChange={props.onChange}
        // 입력 값이 변화할 때 호출되는 함수
      />
    </Label>
  );
}

// 웹 어플리케이션의 메인 함수
function App() {
  // name, email, message 세 가지 상태를 생성하고 useState로 초기값을 빈 문자열로 설정
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // 폼(form)을 제출(submit)했을 때 호출되는 함수 - 폼 제출 이벤트가 발생했을 때
  function handleSubmit(event) {
    event.preventDefault(); // 폼 제출 이벤트를 취소하고(새로고침을 하지 않고) console.log()를 호출하도록 합니다.
    console.log('Submitted:', name, email, message);
    // 콘솔에 이름,이메일,메세지가 문자열에 표시됩니다.
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // 웹에 다이얼로그로 뜨는 문자들(:Submitted: 이름, 이메일, 메세지)
  }

  // React에서 반환(return)되는 JSX 코드
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        {/* InputLabel 컴포넌트를 사용하여 입력 필드와 라벨을 그룹화 */}
        <InputLabel labelText="Name:" type="text" value={name} onChange={(event) => setName(event.target.value)} />
        {/* text 타입의 이름을 적는 곳 - 위의 inputlabel props에서 사용자가 텍스트를 입력할 때마다 setName 함수가 호출되어 name 변수의 값이 업데이트됩니다. */}
        <InputLabel labelText="Email:" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        {/* text 타입의 이메일을 적는 곳 - 위의 inputlabel props에서 사용자가 이메일 형식에 맞춰 입력할 때마다 setEmail 함수가 호출되어 email 변수의 값이 업데이트됩니다. */}
        <InputLabel labelText="Message:"  value={message} onChange={(event) => setMessage(event.target.value)}/>
        {/* text 타입의 이메일을 적는 곳 - 위의 inputlabel props에서 사용자가 텍스트 형식에 맞춰 입력할 때마다 setMessage 함수가 호출되어 Message 변수의 값이 업데이트됩니다. */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;