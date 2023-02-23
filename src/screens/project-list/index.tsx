import { useEffect, useState } from "react";
import SearchPanel from "./search-panel";
import List from "./list";
import { useHttp } from "utils/http";
import styled from "@emotion/styled";
import { cleanObject } from "utils";
import useDebounce from "hooks/useDebounce";
import useMount from "hooks/useMount";

const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);

  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debouncedParam = useDebounce(param, 200);
  const [list, setList] = useState([]);
  const client = useHttp();

  useEffect(() => {
    client("projects", { data: cleanObject(debouncedParam) }).then(setList);
  }, [client, debouncedParam]);

  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;

export default ProjectListScreen;
