import TelegramLoginButton, { TelegramUser } from '@v9v/ts-react-telegram-login';

const Login = () => {
  const handleTelegramResponse = (user: TelegramUser) => {
    console.log(user);
};
  return (
    <div className="telegramBtn">
       <TelegramLoginButton
      dataOnAuth={ handleTelegramResponse }
      botName="grecoryilyosbot"
    />
    </div>
   
  );
};

export default Login;