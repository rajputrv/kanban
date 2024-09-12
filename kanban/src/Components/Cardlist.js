import Card from "./Card";

const Cardlist = ({ tickets, users }) => {
  return (
    <div>
      {tickets.map((val, i) => {
        return (
          <Card
            id={tickets[i].id}
            title={tickets[i].title}
            tags={tickets[i].tags}
          />
        );
      })}
    </div>
  );
};

export default Cardlist;
