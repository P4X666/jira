import { useAuth } from "context/auth-context";
import { FormEvent } from "react";

const LoginScreen = () => {
  const { login, user } = useAuth();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };
  console.log(user, "useruseruser");

  return (
    <form onSubmit={handleSubmit}>
      {user && (
        <div>
          <div>登录成功！</div>
          <div>当前用户的token为{user.token}</div>
        </div>
      )}
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="text" id="password" />
      </div>
      <button type="submit">登录</button>
    </form>
  );
};

export default LoginScreen;
