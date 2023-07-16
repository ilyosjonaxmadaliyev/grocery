import TelegramLoginButton from "react-telegram-login";

interface User {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: string;
  hash: string;
}
const Login = () => {
  const handleTelegramResponse = (res: User) => {
    console.log(res);
  };
  return (
    <TelegramLoginButton
      dataOnauth={handleTelegramResponse}
      botName="groceryfn4bot"
    />
  );
};

export default Login;