const UserCard = ({user} ) => {//the recived prop will be like this {user:{...}}
  console.log('userCard: ', user);
    const {photourl, about,gender,firstName,lastName,age,skills} = user || {};
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img src={user?.photourl} alt="User Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName+" "+lastName}</h2>
        {age && gender && <p>{ gender+" "+age+" years old"}</p>}
       {about && <p>{about}</p>} 
        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary">Ignore </button>
          <button className="btn btn-secondary">Interested </button>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
