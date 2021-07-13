import './UserList.css';
import React from "react";



class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    
    handleClick = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(result => {
                this.setState({users: result})
            })
            .catch(e => {
                console.log(e);
                this.setState({...this.state});
            });
    };
     
    
      render() {
        const { users } = this.state;
       
          return (
                <div>
                    <button onClick={ this.handleClick } className="btn">
                        <span>Get All Users</span>
                    </button>
                     <ul>
                       {users.map(item => (
                         <li key={item.id}>
                           <h3>{item.name}</h3>
                           <hr></hr>
                            <p>
                            <span className="description">username:</span> 
                            <br></br>
                              <span className="data">{item.username}</span>
                            </p>
                            <p>
                            <span className="description">email:</span> 
                            <br></br>
                              <span className="data">{item.email}</span>
                            </p>
                            <p>
                            <span className="description">street:</span> 
                            <br></br>
                            <span className="data address">{item.address.street},  {item.address.suite}, {item.address.zipcode}, {item.address.city}</span>
                            </p>
                            <p>
                            <span className="description">coordinates:</span> 
                            <br></br>
                            <span className="data">{item.address.geo.lat} & {item.address.geo.lng}
                            </span>
                            </p>
                            <p>
                            <span className="description">Tel:</span> 
                            <br></br>
                            <span className="data">{item.phone}</span>
                            </p>
                            <p>
                            <span className="description">website:</span> 
                            <br></br>
                            <span className="data">{item.website}</span>
                            </p>
                            <p>
                            <span className="description">company: </span>
                            <br></br>
                            <span className="data">{item.company.name} </span>
                            </p>
                            <p>
                            <span className="description">slogan: </span>
                            <br></br>
                            <span className="data">"{item.company.catchPhrase}"</span>
                            </p>
                            <p>
                            <span className="description">caption: </span>
                            <br></br>
                            <span className="data">{item.company.bs}"</span>
                            </p>
                         </li>
                       ))}
                  </ul>
            </div>
          );

      }
    }


export default UserList;
