import { Table } from "antd";
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
    <Table
      pagination={false}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知"}
              </span>
            );
          },
        },
      ]}
      dataSource={list}
    />
  );
};

export default List;
