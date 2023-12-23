import Nav from '../../components/navbar/nav'
import Contact from '../../components/contact/contact'
import img1 from '../../assets/ourProducts/Fundraising.png'
import Footer from '../../components/footer/footer'
function JobApps() {
    return (
        <>
        
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col-4">
                <img className='img-fluid' src={img1} alt="appImg" />
                </div>
                <div className="col-8 d-flex align-content-center justify-content-center flex-column">
                    <h1>
Get Hired Into Your Dream Job From Demanded Applications</h1>
                    <p>Now a day’s searching for a job become much easier with the help of online job applications. Here all the type of jobs is posted from the company people to hire suitable candidate. All the graduations and no graduation even uneducated can also be search job according to their wanted designation. With this application user can search their dream jobs. These applications are free of cost for getting jobs. In market there are many job market application development companies.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <p>Technicians are working hard for designing job application development. We are also one among them companies who are providing best quality apps with reasonable job application development cost. Now fresher or experienced can get placed in their loved jobs easily with this app. Have a look on this feature like easy registration, managing jobs, buyers appeal, updated notifications, numerous payment options, search jobs, filter search, post requests, invite family & friends, social media sharing, uploading resume, managing user profile, ratings & reviews, etc.</p>
            <p>This application is available for website, android, and iOS users which can be easily downloaded from Google play store and App store. According to the user or provider privacy policy log in can be attempted only through registered mobile number or email id. The forgotten password from the user can be recovered from registered mobile number or email id. Before buying this application entrepreneurs can have demo of this application.</p>
            <p>User can claim or report spam if he faced any such issue regarding his hiring or connecting through recruiters process. Email alert regarding your preferred jobs and contact number of the job seeker. This helps the recruiters to contact easily to the person regarding jobs. Joining of this application is totally free of cost. One can subscribe to their newsletter to get regular updates of the jobs. These applications are totally secured with all legal documents to avoid spams. Here all the providers are verified with life time license. Business modules grab this best concept to grow wider in the business market. This app will surely helps you to give best competition to the competitors.</p>
        </div>
        <Contact/>
        <Footer/></>
    )
}

export default JobApps
