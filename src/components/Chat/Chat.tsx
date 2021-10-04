import Conversation from "../../assets/conversation.svg";

export const Chat = () => {
  return (
    <div
      data-aos="slide-right"
      className="grid gap-4 px-4 mx-auto my-48 tablet:w-7/12 place-items-center chat"
      id="contact"
    >
      <h1 className="font-black text-center text-text-36 tablet:text-text-48 text-blue-dark">
        Let’s Have a Conversation.
      </h1>
      <img src={Conversation} alt="chat" />
      <p className="text-center text-text-one">
        We are currently taking new individual and small business clients. If
        you’re interested in chatting with one of your partners, we would love
        to start a conversation.
      </p>
      <button className="c-btn">CONTACT US</button>
    </div>
  );
};
