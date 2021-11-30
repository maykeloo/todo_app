/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  AddButton,
  ApplicationComponent,
  BackgroundContent,
  BackgroundImage,
  Checkbox,
  CheckIcon,
  Content,
  ContentBox,
  DeleteButton,
  DeleteItembar,
  Icon,
  Input,
  Inputbar,
  List,
  ListItem,
  Logo,
  Logobar,
  Positivebar,
  SwitchThemebar,
  Topbar,
  Text,
  Uncheckedbox,
  Infobar,
  Infobox,
} from "./applicationElements";

import bgDarkDesktop from "../images/bg-desktop-dark.jpg";
import bgLightDesktop from "../images/bg-desktop-light.jpg";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";

const Application = () => {
  const [dark, setDark] = useState(true);
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [todosLength, setTodosLength] = useState("");

  useEffect(() => {
    setTodosLength(todos.length);
  });

  const addNew = (e) => {
    if (value.length !== 0) {
      setTodos([...todos, { name: `${value}`, done: false }]);
      setValue("");
    }
  };

  const deleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const setDone = (index, todo) => {
    const newTodos = [...todos];

    if (todo) {
      newTodos[index].done = false;
    } else {
      newTodos[index].done = true;
    }
    setTodos(newTodos);
  };

  const todosList = todos.map((todo, index) => (
    <ListItem dark={dark}>
      <Positivebar key={todo.name}>
        {todo.done ? (
          <Checkbox onClick={() => setDone(index, todo.done)}>
            <CheckIcon />
          </Checkbox>
        ) : (
          <Uncheckedbox
            onClick={() => setDone(index, todo.done)}
          ></Uncheckedbox>
        )}
        <Text done={todo.done} dark={dark}>
          {todo.name}
        </Text>
      </Positivebar>
      <DeleteItembar>
        <DeleteButton dark={dark} onClick={() => deleteItem(index)}>
          X
        </DeleteButton>
      </DeleteItembar>
    </ListItem>
  ));

  return (
    <>
      <BackgroundContent dark={dark}>
        <BackgroundImage src={dark ? bgDarkDesktop : bgLightDesktop} />
      </BackgroundContent>

      <ApplicationComponent>
        <Content dark={dark}>
          <Topbar>
            <Logobar>
              <Logo>TODO</Logo>
            </Logobar>
            <SwitchThemebar>
              <Icon src={dark ? sun : moon} onClick={() => setDark(!dark)} />
            </SwitchThemebar>
          </Topbar>
          <Inputbar dark={dark}>
            <Input
              dark={dark}
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <AddButton dark={dark} onClick={addNew}>
              +
            </AddButton>
          </Inputbar>
          <ContentBox dark={dark}>
            <List>{todosList}</List>
            <Infobar>
              <Infobox dark={dark}>{todosLength} items on board</Infobox>
            </Infobar>
          </ContentBox>
        </Content>
      </ApplicationComponent>
    </>
  );
};

export default Application;
