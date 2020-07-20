import React from 'react';
import './Profile.css';
import ProfileAvatar from '../../../assets/images/user-avatar.jpg';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';


class Profile extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div classNameName="container">
                <div className="content-header">
                    <h3 className="font-size-18">User profile</h3>
                </div>
                {/* <!-- Main content --> */}
                <section className="content">

                    <div className="row">
                        <div className="col-md-3">

                            {/* <!-- Profile Image --> */}
                            <div className="box box-primary">
                                <div className="box-body box-profile">
                                    <img
                                        className="profile-user-img img-responsive img-circle"
                                        src={ProfileAvatar}
                                        alt="User profile picture"
                                    />

                                    <h3 className="profile-username text-center">Theresa Smith</h3>

                                    <p className="text-muted text-center">Software Engineer</p>

                                    <ul className="list-group list-group-unbordered">
                                        <li className="list-group-item">
                                            <span className="item-text">Followers</span>
                                            <span className="item-text-value">1,322</span>
                                        </li>
                                        <li className="list-group-item">
                                            <span className="item-text">Following</span>
                                            <span className="item-text-value">543</span>
                                        </li>
                                        <li className="list-group-item">
                                            <span className="item-text">Friends</span>
                                            <span className="item-text-value">13,287</span>
                                        </li>
                                    </ul>

                                    <Link to="" className="btn btn-primary btn-block">
                                        <b>Follow</b>
                                    </Link>
                                </div>
                                {/* <!-- /.box-body --> */}
                            </div>
                            {/* <!-- /.box --> */}

                            {/* <!-- About Me Box --> */}
                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">About Me</h3>
                                </div>
                                {/* <!-- /.box-header --> */}
                                <div className="box-body">
                                    <strong>
                                        <i className="fa fa-book mr-2"></i>
                                        Education
                                    </strong>
                                    <p className="text-muted">
                                        B.S. in Computer Science from the University of Tennessee at Knoxville
                                    </p>

                                    <hr />

                                    <strong>
                                        <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>
                                        Location
                                     </strong>
                                    <p className="text-muted">Malibu, California</p>

                                    <hr />

                                    <strong>
                                        <i className="fa fa-pencil mr-2" aria-hidden="true"></i>
                                        Skills
                                    </strong>
                                    <div>
                                        <Badge className="mr-1" pill variant="secondary"> UI Design  </Badge>
                                        <Badge className="mr-1" pill variant="secondary"> Coding  </Badge>
                                        <Badge className="mr-1" pill variant="secondary"> Javascript  </Badge>
                                        <Badge className="mr-1" pill variant="secondary"> PHP  </Badge>
                                        <Badge className="mr-1" pill variant="secondary"> Node.js  </Badge>
                                        {/* <span className="label label-danger">UI Design</span>
                                        <span className="label label-success">Coding</span>
                                        <span className="label label-info">Javascript</span>
                                        <span className="label label-warning">PHP</span>
                                        <span className="label label-primary">Node.js</span> */}
                                    </div>

                                    <hr />

                                    <strong>
                                        <i className="fa fa-file-text-o mr-2"></i>
                                        Notes
                                    </strong>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
                                </div>
                                {/* <!-- /.box-body --> */}
                            </div>
                            {/* <!-- /.box --> */}
                        </div>


                        {/* <!-- /.col --> */}
                        <div className="col-md-9">
                            <div className="nav-tabs-custom">
                                <ul className="nav nav-tabs">
                                    <li className=""><a href="http://theme.skyheng.com/roncoo-adminLTE/pages/examples/profile.html#activity" data-toggle="tab" aria-expanded="false">Activity</a></li>
                                    <li className=""><a href="http://theme.skyheng.com/roncoo-adminLTE/pages/examples/profile.html#timeline" data-toggle="tab" aria-expanded="false">Timeline</a></li>
                                    <li className="active"><a href="http://theme.skyheng.com/roncoo-adminLTE/pages/examples/profile.html#settings" data-toggle="tab" aria-expanded="true">Settings</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane" id="activity">
                                        {/* <!-- Post --> */}
                                        <div className="post">
                                            <div className="user-block">
                                                <img className="img-circle img-bordered-sm" src="./user-profile-UI_files/user1-128x128.jpg" alt="user image" />
                                                <span className="username">
                                                    <a href="http://theme.skyheng.com/roncoo-adminLTE/pages/examples/profile.html#">Jonathan Burke Jr.</a>
                                                    <a href="http://theme.skyheng.com/roncoo-adminLTE/pages/examples/profile.html#" className="pull-right btn-box-tool"><i className="fa fa-times"></i></a>
                                                </span>
                                                <span className="description">Shared publicly - 7:30 PM today</span>
                                            </div>
                                            {/* <!-- /.user-block --> */}
                                            <p>
                                                Lorem ipsum represents a long-held tradition for designers,
                                                typographers and the like. Some people hate it and argue for
                                                its demise, but others ignore the hate as they create awesome
                                                tools to help create filler text for everyone from bacon lovers
                                                to Charlie Sheen fans.
                  </p>
                                            <ul className="list-inline">
                                                <li><a href="http://theme.skyheng.com/roncoo-adminLTE/pages/examples/profile.html#" className="link-black text-sm"><i className="fa fa-share margin-r-5"></i> Share</a></li>
                                                <li><a href="http://theme.skyheng.com/roncoo-adminLTE/pages/examples/profile.html#" className="link-black text-sm"><i className="fa fa-thumbs-o-up margin-r-5"></i> Like</a>
                                                </li>
                                                <li className="pull-right">
                                                    <a href="http://theme.skyheng.com/roncoo-adminLTE/pages/examples/profile.html#" className="link-black text-sm"><i className="fa fa-comments-o margin-r-5"></i> Comments
                        (5)</a></li>
                                            </ul>

                                            <input className="form-control input-sm" type="text" placeholder="Type a comment" />
                                        </div>
                                        {/* <!-- /.post --> */}

                                        {/* <!-- Post --> */}
                                        <div className="post clearfix">
                                            <div className="user-block">
                                                <img className="img-circle img-bordered-sm" src="./user-profile-UI_files/user7-128x128.jpg" alt="User Image" />
                                                <span className="username">
                                                    <a href="http://theme.skyheng.com/roncoo-adminLTE/pages/examples/profile.html#">Sarah Ross</a>
                                                    <a href="http://theme.skyheng.com/roncoo-adminLTE/pages/examples/profile.html#" className="pull-right btn-box-tool"><i className="fa fa-times"></i></a>
                                                </span>
                                                <span className="description">Sent you a message - 3 days ago</span>
                                            </div>
                                            {/* <!-- /.user-block --> */}
                                            <p>
                                                Lorem ipsum represents a long-held tradition for designers,
                                                typographers and the like. Some people hate it and argue for
                                                its demise, but others ignore the hate as they create awesome
                                                tools to help create filler text for everyone from bacon lovers
                                                to Charlie Sheen fans.
                  </p>

                                            <form className="form-horizontal">
                                                <div className="form-group margin-bottom-none">
                                                    <div className="col-sm-9">
                                                        <input className="form-control input-sm" placeholder="Response" />
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <button type="submit" className="btn btn-danger pull-right btn-block btn-sm">Send</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* <!-- /.post --> */}

                                        {/* <!-- Post --> */}
                                        <div className="post">
                                            <div className="user-block">
                                                <img className="img-circle img-bordered-sm" src="./user-profile-UI_files/user6-128x128.jpg" alt="User Image" />
                                                <span className="username">
                                                    <a href="http://theme.skyheng.com/roncoo-adminLTE/pages/examples/profile.html#">Adam Jones</a>
                                                    <a href="http://theme.skyheng.com/roncoo-adminLTE/pages/examples/profile.html#" className="pull-right btn-box-tool"><i className="fa fa-times"></i></a>
                                                </span>
                                                <span className="description">Posted 5 photos - 5 days ago</span>
                                            </div>
                                            {/* <!-- /.user-block --> */}
                                            <div className="row margin-bottom">
                                                <div className="col-sm-6">
                                                    <img className="img-responsive" src="./user-profile-UI_files/photo1.png" alt="Photo" />
                                                </div>
                                                {/* <!-- /.col --> */}
                                                <div className="col-sm-6">
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <img className="img-responsive" src="./user-profile-UI_files/photo2.png" alt="Photo" />
                                                            <br />
                                                            <img className="img-responsive" src="./user-profile-UI_files/photo3.jpg" alt="Photo" />
                                                        </div>
                                                        {/* <!-- /.col --> */}
                                                        <div className="col-sm-6">
                                                            <img className="img-responsive" src="./user-profile-UI_files/photo4.jpg" alt="Photo" />
                                                            <br />
                                                            <img className="img-responsive" src="./user-profile-UI_files/photo1.png" alt="Photo" />
                                                        </div>
                                                        {/* <!-- /.col --> */}
                                                    </div>
                                                    {/* <!-- /.row --> */}
                                                </div>
                                                {/* <!-- /.col --> */}
                                            </div>
                                            {/* <!-- /.row --> */}

                                            <ul className="list-inline">
                                                <li><a href="http://theme.skyheng.com/roncoo-adminLTE/pages/examples/profile.html#" className="link-black text-sm"><i className="fa fa-share margin-r-5"></i> Share</a></li>
                                                <li><a href="http://theme.skyheng.com/roncoo-adminLTE/pages/examples/profile.html#" className="link-black text-sm"><i className="fa fa-thumbs-o-up margin-r-5"></i> Like</a>
                                                </li>
                                                <li className="pull-right">
                                                    <a href="http://theme.skyheng.com/roncoo-adminLTE/pages/examples/profile.html#" className="link-black text-sm"><i className="fa fa-comments-o margin-r-5"></i> Comments
                        (5)</a></li>
                                            </ul>

                                            <input className="form-control input-sm" type="text" placeholder="Type a comment" />
                                        </div>
                                        {/* <!-- /.post --> */}
                                    </div>
                                    {/* <!-- /.tab-pane --> */}
                                    <div className="tab-pane" id="timeline">
                                        {/* <!-- The timeline --> */}
                                        <ul className="timeline timeline-inverse">
                                            {/* <!-- timeline time label --> */}
                                            <li className="time-label">
                                                <span className="bg-red">
                                                    10 Feb. 2014
                        </span>
                                            </li>
                                            {/* <!-- /.timeline-label --> */}
                                            {/* <!-- timeline item --> */}
                                            <li>
                                                <i className="fa fa-envelope bg-blue"></i>

                                                <div className="timeline-item">
                                                    <span className="time"><i className="fa fa-clock-o"></i> 12:05</span>

                                                    <h3 className="timeline-header"><a href="http://theme.skyheng.com/roncoo-adminLTE/pages/examples/profile.html#">Support Team</a> sent you an email</h3>

                                                    <div className="timeline-body">
                                                        Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                                        weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                                        jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                                        quora plaxo ideeli hulu weebly balihoo...
                      </div>
                                                    <div className="timeline-footer">
                                                        <a className="btn btn-primary btn-xs">Read more</a>
                                                        <a className="btn btn-danger btn-xs">Delete</a>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* <!-- END timeline item --> */}
                                            {/* <!-- timeline item --> */}
                                            <li>
                                                <i className="fa fa-user bg-aqua"></i>

                                                <div className="timeline-item">
                                                    <span className="time"><i className="fa fa-clock-o"></i> 5 mins ago</span>

                                                    <h3 className="timeline-header no-border"><a href="http://theme.skyheng.com/roncoo-adminLTE/pages/examples/profile.html#">Sarah Young</a> accepted your friend request
                      </h3>
                                                </div>
                                            </li>
                                            {/* <!-- END timeline item --> */}
                                            {/* <!-- timeline item --> */}
                                            <li>
                                                <i className="fa fa-comments bg-yellow"></i>

                                                <div className="timeline-item">
                                                    <span className="time"><i className="fa fa-clock-o"></i> 27 mins ago</span>

                                                    <h3 className="timeline-header"><a href="http://theme.skyheng.com/roncoo-adminLTE/pages/examples/profile.html#">Jay White</a> commented on your post</h3>

                                                    <div className="timeline-body">
                                                        Take me to your leader!
                                                        Switzerland is small and neutral!
                                                        We are more like Germany, ambitious and misunderstood!
                      </div>
                                                    <div className="timeline-footer">
                                                        <a className="btn btn-warning btn-flat btn-xs">View comment</a>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* <!-- END timeline item --> */}
                                            {/* <!-- timeline time label --> */}
                                            <li className="time-label">
                                                <span className="bg-green">
                                                    3 Jan. 2014
                        </span>
                                            </li>
                                            {/* <!-- /.timeline-label --> */}
                                            {/* <!-- timeline item --> */}
                                            <li>
                                                <i className="fa fa-camera bg-purple"></i>

                                                <div className="timeline-item">
                                                    <span className="time"><i className="fa fa-clock-o"></i> 2 days ago</span>

                                                    <h3 className="timeline-header"><a href="http://theme.skyheng.com/roncoo-adminLTE/pages/examples/profile.html#">Mina Lee</a> uploaded new photos</h3>

                                                    <div className="timeline-body">
                                                        <img src="./user-profile-UI_files/150x100" alt="..." className="margin" />
                                                        <img src="./user-profile-UI_files/150x100" alt="..." className="margin" />
                                                        <img src="./user-profile-UI_files/150x100" alt="..." className="margin" />
                                                        <img src="./user-profile-UI_files/150x100" alt="..." className="margin" />
                                                    </div>
                                                </div>
                                            </li>
                                            {/* <!-- END timeline item --> */}
                                            <li>
                                                <i className="fa fa-clock-o bg-gray"></i>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- /.tab-pane --> */}

                                    <div className="tab-pane active" id="settings">
                                        <form className="form-horizontal">
                                            <div className="form-group">
                                                <label for="inputName" className="col-sm-2 control-label">Name</label>

                                                <div className="col-sm-10">
                                                    <input type="email" className="form-control" id="inputName" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="inputEmail" className="col-sm-2 control-label">Email</label>

                                                <div className="col-sm-10">
                                                    <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="inputName" className="col-sm-2 control-label">Name</label>

                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" id="inputName" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="inputExperience" className="col-sm-2 control-label">Experience</label>

                                                <div className="col-sm-10">
                                                    <textarea className="form-control" id="inputExperience" placeholder="Experience"></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="inputSkills" className="col-sm-2 control-label">Skills</label>

                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" id="inputSkills" placeholder="Skills" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-offset-2 col-sm-10">
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" /> I agree to the <a href="http://theme.skyheng.com/roncoo-adminLTE/pages/examples/profile.html#">terms and conditions</a>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-offset-2 col-sm-10">
                                                    <button type="submit" className="btn btn-danger">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* <!-- /.tab-pane --> */}
                                </div>
                                {/* <!-- /.tab-content --> */}
                            </div>
                            {/* <!-- /.nav-tabs-custom --> */}
                        </div>
                        {/* <!-- /.col --> */}
                    </div>
                    {/* <!-- /.row --> */}

                </section>
                {/* <!-- /.content --> */}
            </div>
        )
    }

}

export default Profile;