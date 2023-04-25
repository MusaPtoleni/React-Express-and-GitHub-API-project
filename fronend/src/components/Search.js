import { React, Component } from "react";
import { Link } from "react-router-dom";
import '../index.css';

class Search extends Component {
    constructor(props) {
        super(props);

        // Creating states to hold the the user details from the api request
        this.state = {
            user: [],
            repo:[],
            username: '',
            loading: false
        }

        this.getUser =this.getUser.bind(this);
        this.handleSearch =this.handleSearch.bind(this);
        this.getRepo =this.getRepo.bind(this);
    }

    // Function to get a username from an input
    getUser(e){
        e.preventDefault();
        const user = e.target.value;
        console.log(user);
        this.setState({
            username: user, 
            loading: true 
        });
    }

    /* this function is called when the button is clicked and 
    it bring back the users information on github */ 
    handleSearch(){
        const name = this.state.username

        if(name === ""){
            console.log("enter a username");
        }else{
            fetch(`/profile/${name}`,
            {
                headers: {'Content-type': 'application/json; charset=UTF-8' }
            })
            .then(res => res.json())
            .then(user => this.setState({user, loading: false}))
            .catch(err => {
                console.log(err.message)
            }) 

            this.getRepo(name);
        }
    }

    // This function gets the repository of a user in Github
    getRepo(name){

        fetch(`/profile/${name}/repo`,
        {
            headers: {'Content-type': 'application/json; charset=UTF-8' }
        })
        .then(res => res.json())
        .then(repo => this.setState({repo}))
        .catch(err => {
            console.log(err.message)
        }) 
    }

    render() {
        const profile = this.state.user;
        const load = this.state.loading;

        return ( 
            <div className="search">
                <section className="part1">
                    <p className="enter">Enter the Github username you'd like to find</p>
                    <br/>
                    <form method="GET">
                        <label>Username: </label>
                        <input id="username" onChange={this.getUser}/>
                        <button type="button" onClick={this.handleSearch}>Find</button>
                    </form>
                    {/* Checking if loading is true to display the loading icon*/}
                    {load === true ?
                        <div>
                            <span className="loader"></span>
                        </div> 
                        : 
                        <div className="profile">
                            <img src={profile.avatar_url} alt="" width={240} height={300}/>
                            {/* Using the link tag to redirect to another page */}
                            <Link to='/user' state={this.state} >
                                <p><b>Name:</b> {profile.name}</p>
                            </Link>
                        </div>
                    }
                </section>
            </div>
         );
    }
}
 
export default Search;