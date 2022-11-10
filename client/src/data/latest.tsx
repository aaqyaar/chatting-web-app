export type LatestContactsType = {
  _id: string;
  name: string;
  avatarUrl: string;
  messages: string[];
  status: string;
  time: string;
};

export const latestContacts: LatestContactsType[] = [
  {
    _id: "5e887d1a7c2ebd7b1a2cfd5f",
    name: "Katarina Smith",
    avatarUrl: "/static/mock-images/avatars/avatar_default.jpg",
    status: "online",
    messages: ["Hey! How is it going?", "Are you there? This is important!"],
    time: "Just now",
  },
  {
    _id: "5e887d1a7c2ebd7b1a2cfd5e",
    name: "Alexa Richardson",
    avatarUrl: "/static/mock-images/avatars/avatar_default.jpg",
    status: "offline",
    messages: ["I'm out of office right now"],
    time: "2 hours ago",
  },
  {
    _id: "5e887d1a7c2ebd7b1a2cfd5d",
    name: "Anje Keizer",
    avatarUrl: "/static/mock-images/avatars/avatar_default.jpg",
    status: "offline",
    messages: ["I'm out of office right now"],
    time: "2 hours ago",
  },
  {
    _id: "5e887d1a7c2ebd7b1a2cfd5c",
    name: "Clarke Gillebert",
    avatarUrl: "/static/mock-images/avatars/avatar_default.jpg",
    status: "offline",
    messages: ["I'm out of office right now"],
    time: "2 hours ago",
  },
];
