import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

class Upload extends Component {

    uploadWidget = () => {
        window.cloudinary.openUploadWidget(
            { cloud_name: 'code-flix2387',
            upload_preset: 'react100',
            tags: ['codeflix'],
            sources: ['local', 'url', 'google_photos', 'facebook', 'image_search']
        },
        function(error, result) {
            console.log("This is the result of the last uplaod", result);
        });
    }

    render() {

        return (
            <div>
                <Nav />
                <h3 className="text-center">Upload Your video in a no time.</h3>
                <hr />

                <div className="col-sm-12">
                    <div className="jumbotron text-center">
                        <button onClick={this.uploadWidget} className="btn btn-lg btn-info"> Upload Video</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Upload;