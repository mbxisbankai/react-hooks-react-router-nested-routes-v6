import { useOutletContext, useParams } from "react-router-dom";

function UserProfile() {
  const users = useOutletContext();
  const params = useParams();

  const user = users.find(user => user.id === parseInt(params.id));

  if(!user.name){
    return <h1>Loading...</h1>;
  };

  return(  
      <aside>
        <h1>{user.name}</h1>
      </aside>
  );
};

export default UserProfile;