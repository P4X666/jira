import useDebounce from "hooks/useDebounce";
import useMount from "hooks/useMount";
import { useEffect, useState } from "react";
import { cleanObject } from "utils";
import { useHttp } from "utils/http";
import List from "./list";
import SearchPanel from "./search-panel";

export type ParamType = {
  name: string;
  personId: string;
};

const ProjectList = () => {
  const [param, setParam] = useState<ParamType>({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const client = useHttp();
  useMount(() => {
    client("users").then((response) => {
      setUsers(response);
    });
  });
  const debounceParams = useDebounce(param, 1000);
  useEffect(() => {
    client("projects", { data: cleanObject(debounceParams) }).then(
      (response) => {
        setList(response);
      }
    );
  }, [client, debounceParams]);
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};

export default ProjectList;
