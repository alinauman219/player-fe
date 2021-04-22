function Players() {
  return (
    <div className="table-wrapper"  style={{marginTop:"10px"}}>
                <table className="table table-hovered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Image</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Number</th>
                            <th scope="col">Username</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <p className="text-center">No players found. Go <a href="/add" >here</a> to add players.</p>
            </div>
  );
}

export default Players;
