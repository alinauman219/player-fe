import React from 'react';
function Player() {
  return (
    <React.Fragment>
        <div className="container"  style={{marginTop:"10px"}}>
            <form className="add-player-form" action="" method="post" >
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control" name="first_name" id="first-name" placeholder="First Name"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control" name="last_name" id="last-name" placeholder="Last Name" required></input>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control" name="username" id="username" placeholder="Username" required></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="number" className="form-control" name="number" id="number" placeholder="Number" required></input>
                    </div>
                    <div className="form-group col-md-6">
                        <select id="position" name="position" className="form-control" required>
                            <option disabled>Choose position</option>
                            <option>Goalkeeper</option>
                            <option>Defender</option>
                            <option>Midfielder</option>
                            <option>Forward</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary float-right">Add Player</button>
            </form>
        </div>
    </React.Fragment>
  );
}

export default Player;
