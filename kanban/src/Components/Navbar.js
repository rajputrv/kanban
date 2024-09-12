import { groupby, orderby } from "./Displaybar";

const Navbar = (tickets, users, grouping, ordering) => {
  const groups = [];
  if (groupby == 0)
    groups = ["Todo", "In progress", "Backlog", "Done", "Cancelled"];
  else if (groupby == 1) groups = users;
  else groups = ["No Priority", "Urgent", "High", "Medium", "Low"];
  return (
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default Navbar;
