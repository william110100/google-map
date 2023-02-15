import { AutoComplete, Input, Layout, Typography } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setKeyword } from "./store/reducers";

const { Content, Header } = Layout;
const { Title } = Typography;

const headerStyle = {
  alignItems: "center",
  backgroundColor: "transparent",
  display: "flex",
};

const App = () => {
  const dispatch = useDispatch();
  const { filteredData } = useSelector((state) => state.autocomplete);
  const [inputValue, setInputValue] = useState("");

  const autoCompleteOptions = filteredData.map((value) => ({ label: value.description, value: value.description }));

  const onAutoCompleteChange = (data) => {
    setInputValue(data);
    dispatch(setKeyword(data));
  };

  return (
    <Layout>
      <Title
        level={3}
        style={{ textAlign: "center" }}>
        Google Places Autocomplete
      </Title>
      <Header style={headerStyle}>
        <Input.Group compact>
          <AutoComplete
            allowClear
            onChange={onAutoCompleteChange}
            options={autoCompleteOptions}
            placeholder="Search"
            style={{ width: "100%" }}
            value={inputValue}
          />
        </Input.Group>
      </Header>
      <Content style={{ alignItems: "center" }}></Content>
    </Layout>
  );
};

export default App;
