import { Input, Select } from "antd";
import { ParamType } from ".";
import { UserType } from "./list";

type SearchPanelProps = {
  param: ParamType;
  setParam: (params: SearchPanelProps["param"]) => void;
  users: UserType[];
};
const SearchPanel = (props: SearchPanelProps) => {
  const { param, setParam, users } = props;

  return (
    <form>
      <div>
        <Input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
        <Select
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        >
          <Select.Option value={""}>负责人</Select.Option>
          {users.map((user) => (
            <Select.Option key={user.id} value={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </div>
    </form>
  );
};

export default SearchPanel;
