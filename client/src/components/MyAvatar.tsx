import createAvatar from "../utils/createAvatar";
import Avatar from "./Avatar";

interface Props {
  avatar?: any;
  src?: any;
  alt?: any;
  // sx?: any;
  displayName?: any;
  other?: object;
}

export default function MyAvatar({ avatar, displayName, ...other }: Props) {
  return (
    <Avatar
      src={avatar}
      alt={displayName}
      color={avatar ? "default" : createAvatar(displayName).color}
      {...other}
    >
      {createAvatar(displayName).name}
    </Avatar>
  );
}
