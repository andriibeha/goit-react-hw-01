import user from "../json/user.json";
import data from "../json/data.json";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";

export const App = () => {
  return (
    <div>
      <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> 
      
    <Statistics key={data.id} title="Upload stats" stats={data} />
    <Statistics key={data.id} stats={data} />
    </div>
  );

};


 