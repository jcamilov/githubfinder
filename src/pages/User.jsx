import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
import Spinner from "../components/layout/Spinner";
import { FaCodepen, FaStore, FaUserFriends } from "react-icons/fa";
import { useParams } from "react-router-dom";

function User() {
  const { getUser, user, loading } = useContext(GithubContext);

  const params = useParams();

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  useEffect(() => {
    getUser(params.login);
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <React.Fragment>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back to search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card-image-full">
              <img src={avatar_url} alt="" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default User;
