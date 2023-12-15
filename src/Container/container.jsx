import CardContectComponent from "../components/Card/CardComponent";
import grow from "../assets/images/illustration-grow-together.svg";
import flowing from "../assets/images/illustration-flowing-conversation.svg";
import users from "../assets/images/illustration-your-users.svg";
const Container = () => {
  const card = [
    {
      id: 1,
      heading: "Grow Together",
      desc: "Generate meaningful discussions with your audience and build a strong, loyal community.Think of the insightful conversations you miss out on with a feedback form.",
      img: grow,
      right: true,
    },
    {
      id: 1,
      heading: "Flowing Conversations",
      desc: "You wouldn't paginate a conversation in real life, so why do it online? Our threadshave just-in-time loading for a more natural flow.",
      img: flowing,
      right: false,
    },
    {
      id: 1,
      heading: "Your Users",
      desc: " It takes no time at all to integrate Huddle with your app's authentication solution.This means, once signed in to your app, your users can start chatting immediately.",
      img: users,
      right: true,
    },
  ];
  return (
    <div>
      {card?.map((carddetails) => (
        <div key={card?.id}>
          <CardContectComponent
            headline={carddetails?.heading}
            info={carddetails?.desc}
            growimage={carddetails?.img}
            RightPic={carddetails?.right}
          />
        </div>
      ))}
    </div>
  );
};

export default Container;
