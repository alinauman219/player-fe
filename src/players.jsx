function Players(props) {
    let {players, loading, onPlayerSelect} = props; 
    
  return (
    <div className="table-wrapper"  style={{marginTop:"10px"}}>
                 {loading?<h1>fetching </h1>:
                    (players && players.length)?
                        <div>
                            <table className="table table-hovered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Number</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map(player=>{
                            return <tr key={player._id} onClick={()=>onPlayerSelect(player)}>
                            <td >{player.username}</td>
                            <td >{player.firstName}</td>
                            <td >{player.lastName}</td>
                            <td >{player.position}</td>
                            <td >{player.number}</td>
                            <td >
                                <button className="btn btn-warning" onClick={() => console.log(player._id)}>Update</button>
                                <button className="btn btn-primary" onClick={() => console.log(player._id)}>Delete</button>
                            </td>
                        </tr>
                        })}
                    </tbody>
                </table>
                        </div>    
                    : 
                <p className="text-center">No players found.</p>
                 }
            </div>
  );
}

export default Players;
