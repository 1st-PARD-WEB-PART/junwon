import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Div = styled.div`
  height: 800px;
  overflow: hidden;
`;

const Margin = styled.div`
  display: flex;    
  //가로정렬
  background-color: #F0F2F5;
  padding-left: 100px;
  height: 1080px;
  overflow: hidden;
  justify-content: center;
  //가운데 정렬 (전체 컨텐츠)
`;

const FlexDiv = styled.div`
  display: flex;
  margin-top: 20px;
  padding-left: 13px;
  padding-top: 0;
  justify-content: space-around;

  .Strong {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }

  .regular{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
  }
`;

const TextDiv = styled.div`
  margin-top: 280px;
  margin-right: 170px;
  margin-left: 40px;
`;

const Container = styled.div`
  align-items: stretch;
  margin-top: 150px;
  height: 418px;
  text-align: center;
  margin-right: 204px;
  margin-left: 108px;
`;



const Card = styled.div`
  width: 482px;
  height: 418px;
  padding-top: 29px;
  padding-left: 49px;
  padding-right: 48px;
  padding-bottom: 40px;
  background-color: #fff;
  text-align : center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 10px grey;
`;

const Title = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 97px;
  text-align: left;
    color: #1877F2;
    margin: 0;
  padding: 0;
  text-shadow: 0px 3px 2px;

  .bodyText{
    color: #000000;
    font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  white-space: pre-line;
  padding-top: 0;
  text-shadow: 0px 0px 0px;
  }
`;

const TextButton = styled.button`
  background: transparent;
  color: #1877F2;
  border: none;
  font-size: 16px;
  margin-top: 25px;
  margin-bottom: 24px;
  font-weight: 700;
  letter-spacing: 0.05em;
  font-family: 'Roboto';
  font-style: normal;
  &:hover {
    color: #6CACFF;
  }
`;


const Input = styled.input`
  width: 385px;
  height: 50px;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #dadde1;
  border-radius: 10px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #1877f2;
    box-shadow: 0px 0px 4px rgba(24, 119, 242, 0.4);
  }
`;

const Button = styled.button`
  width: 385px;
  height: 50px;
  padding: 12px;
  margin-top: 18px;
  background-color: #1877f2;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: #166fe5;
  }
`;
const CreatButton = styled.button`
  width: 385px;
  height: 50px;
  padding: 12px;
  background-color: #42B72A;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  margin-top: 22px;
  cursor: pointer;
  &:hover {
    background-color: #2F941A;
  }
`;




function Login() {
    return (
        <Div>
            <Margin>
                <TextDiv>
                    <Title>
                        Facebook<br></br>
                        <span className='bodyText'> Connect with friends and the <br></br>world around you on Facebook.</span>
                    </Title>
                </TextDiv>
                <Container>
                    <Card>
                        <Input type="text" placeholder="Email or phone number"></Input>
                        <Input type="password" placeholder="password"></Input>
                        <Link to={`/Home`}><Button>Login</Button></Link>
                        <TextButton>Forgot Password?</TextButton>
                        <hr></hr>
                        <CreatButton>Create new account</CreatButton>
                    </Card>
                    <FlexDiv>
                        <p1>
                            <strong className='Strong'>Create a Page</strong> <p1 className='regular'>for a celebrity, brand or business.</p1>
                        </p1>
                    </FlexDiv>
                </Container>
            </Margin>
        </Div>
    );
}

export default Login;
