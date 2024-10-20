import { Alert } from "./Alert";

export const NotificationList = () => {
  const Notif = useSelector();

  return Notif.map((Notif) => {
    return <Alert key={Notif.id} notification={Notif}></Alert>;
  });
};
