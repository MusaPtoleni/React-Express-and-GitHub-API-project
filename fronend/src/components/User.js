import { React} from "react";
import { useLocation } from "react-router-dom";
import '../index.css';

function User() {
    // getting the data from Search component 
    // I did some research on this on this site 
    // https://www.tabnine.com/code/javascript/functions/react-router/useLocation
    const location = useLocation();
    const profile = location.state;

    return ( 
        <div>
            <section className="user">
                <h3>User Details</h3>
                {/* Checking if a profile exists to display the profiles info if exits */}
                {!profile ? 
                    <p>Please enter a Github username to get started</p>
                    :
                    <div>
                        <img src={profile.user.avatar_url} alt="" width={240} height={240}/>
                        <ul>
                            <li>Name: {profile.user.name}</li>
                            <li>Bio: {profile.user.bio}</li>
                            <li>Github url: <a href={profile.user.html_url}  className="gitURL">{profile.user.html_url}</a></li>
                            <li>Location: {profile.user.location}</li>
                            <li>Following: {profile.user.following}</li>
                            <li>Followers: {profile.user.followers}</li>
                            <li>Repos:
                                {profile.repo === null? 
                                "N/A"
                                :
                                profile.repo.map((item) => {
                                    return(
                                        <ul key={item.id} className="repoList">
                                            <li>{item.name}</li>
                                        </ul>
                                    )
                                })}
                            </li>
                        </ul> 
                    </div>          
                }
            </section>
            <br/>
            <section className="repo">
                {/* Displaying the repo information */}
                <h3>Repo Details</h3>
                <div className="flex">
                    {profile.repo === null? 
                    "N/A"
                    :
                    // mapping through the repo object to get required data
                    profile.repo.map((item) => {
                        return(
                            <ul key={item.id} className="repoInfo">
                                <li>Repo Name: {item.name}</li>
                                <li>Description: {item.description}</li>
                                <li>GitHub url: <a href={item.html_url} className="linkColor">{item.html_url}</a></li>
                                <li>Creation Date: {item.created_at}</li>
                                <li>Last commit date: {item.updated_at}</li>
                            </ul>
                        )
                    })}
                </div>
            </section>
        </div>
     );
}

export default User;