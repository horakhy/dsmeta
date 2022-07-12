import "./notification-button.css"
import icon from '../images/notification-icon.svg';

export const NotificationButton = () => {
  return (
    <div className="notification-button">
      <img src={icon} alt="notification icon" />
    </div>
  );
};
