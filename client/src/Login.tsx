import TelegramLoginButton, { TelegramUser } from '@v9v/ts-react-telegram-login';

const Login = () => {
  const handleTelegramResponse = (user: TelegramUser) => {
    console.log(user);
};
  return (
      <TelegramLoginButton
      dataOnAuth={ handleTelegramResponse }
      botName="grecoryilyosbot"
    />
  );
};

export default Login;