import useDebounce from "hooks/useDebounce";
import useMount from "hooks/useMount";
import * as qs from "qs";
import { useEffect, useState } from "react";
import { cleanObject } from "utils";
import List from "./list";
import SearchPanel from "./search-panel";

const apiUrl = process.env.REACT_APP_API_URL;

const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });
  const debounceParams = useDebounce(param, 1000);
  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debounceParams))}`
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debounceParams]);
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};

export default ProjectList;
