import React, { Component } from "react";
import { Link } from "react-router";
import Nav from "./Nav";
import { isLoggedIn } from "../utils/AuthService";
import { CloudinaryContext, Transfomation, Video } from "cloudinary-react";
import axios from "axios";
import { Share } from 'react-twitter-widgets';

class Display extends Component {
  state = { videos: [] };

  getVideos() {
    axios
      .get("http://res.cloudinary.com/code-flix2387/video/list/codeflix.json")
      .then(res => {
        console.log(res.data.resources);
        this.setState({ videos: res.data.resources });
      });
  }

  componentDidMount() {
    this.getVideos();
  }

  render() {
    const { videos } = this.state;

    return (
      <div>
        <Nav />
        <h3 className="text-center"> Latest Videos on Codeflix </h3>
        <hr />

        <div className="col-sm-12">
          <CloudinaryContext cloudName="code-flix2387">
            {videos.map((data, index) => (
              <div className="col-sm-4" key={index}>
                <div className="embed-responsive embed-responsive-4by3">
                  <Video
                    publicId={data.public_id}
                    width="300"
                    height="300"
                    controls
                  />
                </div>
                <div> Created at {data.created_at} </div>
                <Share url={`http://res.cloudinary.com/unicodeveloper/video/upload/${data.public_id}.mp4`} />

              </div>
            ))}
          </CloudinaryContext>
        </div>
      </div>
    );
  }
}

export default Display;
