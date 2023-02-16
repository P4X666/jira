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
        <input
          type="text"
          value={param.name}
          onChange={(evt) => setParam({ ...param, name: evt.target.value })}
        />
        <select
          value={param.personId}
          onChange={(evt) => setParam({ ...param, personId: evt.target.value })}
        >
          <option value="">负责人</option>
          {users.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
};

export default SearchPanel;
