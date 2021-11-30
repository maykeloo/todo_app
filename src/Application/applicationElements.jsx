import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";

export const ApplicationComponent = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.dark ? "hsl(235, 21%, 11%)" : "white")};
  transition: 0.3s;
`;

export const BackgroundImage = styled.img`
  height: 40%;
  width: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  height: 85%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    width: 85%;
  }
`;

export const Topbar = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
`;

export const Logobar = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
`;

export const Logo = styled.span`
  color: white;
  font-size: 5vw;
  letter-spacing: 10px;
`;

export const SwitchThemebar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
export const Icon = styled.img`
  padding: 10px;
`;

export const Inputbar = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.dark ? "hsl(235, 24%, 19%)" : "#e2e2e2"};
  overflow: hidden;
  border-radius: 10px;
  transition: 0.3s;
`;

export const Input = styled.input.attrs(() => ({
  type: "text",
}))`
  width: 80%;
  height: 100%;
  padding: 0 30px;
  font-size: 28px;
  outline: none;
  color: ${(props) => (props.dark ? "white" : "hsl(235, 24%, 19%)")};
  border-radius: 10px;
  border: 0;
  background-color: ${(props) =>
    props.dark ? "hsl(235, 24%, 19%)" : "#e2e2e2"};
  transition: 0.3s;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 10px;
  background-color: ${(props) =>
    props.dark ? "hsl(235, 24%, 19%)" : "#e2e2e2"};
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const AddButton = styled.button`
  background-color: transparent;
  color: ${(props) => (props.dark ? "grey" : "#454563")};
  width: 20%;
  height: 100%;
  border-radius: 10px;
  font-size: 30px;
  font-weight: bold;
  border: 0;
  transition: 0.3s;
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItem = styled.li`
  width: 80%;
  height: 10%;
  list-style: none;
  margin-top: 15px;
  padding: 5px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${(props) =>
    props.dark ? "1px solid #1f2031" : "1px solid #d8d8d8"};
`;
export const Positivebar = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-between;
`;

export const Checkbox = styled.button`
  width: 30px;
  height: 30px;
  background-image: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  border: 0;
  border-radius: 50%;
  margin-right: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  color: ${(props) => (props.dark ? "#e2e2e2" : "hsl(235, 24%, 19%)")};
  font-size: 30px;
  position: relative;
  transition: 0.3s;
  opacity: ${(props) => (props.done ? "0.3" : "1")};

  &:after {
    transition: 0.3s;
    position: absolute;
    content: "";
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: ${(props) => (props.done ? "100%" : "0")};
    background-color: ${(props) =>
      props.dark ? "#e2e2e2" : "hsl(235, 24%, 19%)"};
  }
`;

export const DeleteItembar = styled.div``;
export const DeleteButton = styled.button`
    color: ${(props) =>
      props.dark ? "#e2e2e2" : "hsl(235, 24%, 19%)"};
    font-size: 30px;
    background-color: transparent;
    border: 0;
`;

export const CheckIcon = styled(AiOutlineCheck)`
  color: white;
`;

export const Uncheckedbox = styled.button`
  width: 30px;
  height: 30px;
  background-color: white;
  border: 2px solid hsl(280, 87%, 65%);
  border-radius: 50%;
  margin-right: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Infobar = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Infobox = styled.div`
font-weight: bold;
color: ${(props) => props.dark ? "#a0a0a053" : "#25273c55"}
`