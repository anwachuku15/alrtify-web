import { NewsFeedIcon, MyCircleIcon, TrendingIcon } from "./Icons";

export const MapViewCards = [
  {
    header: "Get contextualized news on what matters to you in real time.",
    body: "Alirtify provides users with a news feed of news articles that are each tagged with the names of people in the user's phone book or other social media contacts (from Facebook, Twitter, Instagram, LinkedIn etc.) that live in the general area (city, state, province, country or territory) and location of where the news event occurred.",
    icon: <NewsFeedIcon />,
  },
  {
    header: "Stay aware of what is happening in your circle.",
    body: "Alirtify provides users with a view on the news videos and news articles that the people in their networks have engaged with. Where engage means to “like”, “dislike”, “love”, “comment on”, “share” etc.",
    body2:
      "These news videos and the news articles are each tagged with the names of people in the user's phone book or other social media contacts (from Facebook, Twitter, Instagram, LinkedIn etc.) that live in the general area (city, state, province, country or territory) and location of where the news event occurred.",
    icon: <MyCircleIcon />,
  },
  {
    header: "Keep up with trending events all over the world.",
    body: "Alirtify provides its users with a view of what is happening within the entire Alirtify community. It provides users with a view on the news videos and news articles that are trending across the globe.",
    icon: <TrendingIcon />,
  },
];
