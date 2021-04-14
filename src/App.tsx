import { FC } from "react";
import styled from "styled-components";

const MyTitle = styled.h1`
  font-size: 2em;
  text-align: center;
  color: cornflowerblue;
`;

const CenteredDiv = styled.div`
  text-align: center;
`;

const MyButton = styled.button`
  background: ${(props) =>
    props.className === "blue" ? "cornflowerblue" : "white"};
  color: ${(props) =>
    props.className === "blue" ? "white" : "cornflowerblue"};

  font-size: 1.5em;
  margin: 1em;
  padding: 1em 3em;
  border: 2px solid cornflowerblue;
  border-radius: 3px;
`;

const OverRidedButton = styled(MyButton)`
  background: white;
  color: lightseagreen;
  border-color: lightseagreen;
`;

const App: FC = () => {
  return (
    <>
      <MyTitle>Welcome to my page!!</MyTitle>
      <CenteredDiv>
        <MyButton>Skills</MyButton>
        <MyButton className="blue">Works</MyButton>
        <OverRidedButton>Links</OverRidedButton>
      </CenteredDiv>
    </>
  );
};

export default App;
