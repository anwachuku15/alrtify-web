import { KeyboardIcon, AddPeopleIcon } from "./Icons";
import { LockedIcon } from "../Icons";

export const MissionCards = [
  {
    header: "A lack of awareness can put people at a disadvantage.",
    body: "Alirtify provides users with a news feed of news articles that are each tagged with the names of people in the user's phone book or other social media contacts (from Facebook, Twitter, Instagram, LinkedIn etc.) that live in the general area (city, state, province, country or territory) and location of where the news event occurred.",
    icon: <LockedIcon />,
  },
  {
    header: "Awareness brings peace of mind.",
    body: "Alirtify provides users with a view on the news videos and news articles that the people in their networks have engaged with. Where engage means to “like”, “dislike”, “love”, “comment on”, “share” etc.",
    icon: <KeyboardIcon />,
  },
  {
    header: "We can change the world together.",
    body: "Alirtify provides its users with a view of what is happening within the entire Alirtify community. It provides users with a view on the news videos and news articles that are trending across the globe.",
    icon: <AddPeopleIcon />,
  },
];
