import { useEffect, useRef } from "react";

export type UserType = {
  id: string;
  name: string;
};

type ProjectType = UserType & {
  personId: string;
};

const List = (props: { list: ProjectType[]; users: UserType[] }) => {
  const { list, users } = props;
  const usersMap = useRef<Record<string, UserType>>({});
  useEffect(() => {
    usersMap.current = users.reduce((pre, user) => {
      pre[user.id] = user;
      return pre;
    }, {} as Record<string, UserType>);
  }, [users]);
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => {
          return (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{usersMap.current[project.personId]?.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
