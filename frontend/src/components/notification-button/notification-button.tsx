import "./notification-button.css"
import icon from '../../images/notification-icon.svg';

// props
interface NotificationButtonProps {
  onClick: () => void;
}

export const NotificationButton = (props: NotificationButtonProps) => {
  const { onClick } = props;
  
  return (
    <div onClick={onClick} className="notification-button">
      <img src={icon} alt="notification icon" />
    </div>
  );
};
