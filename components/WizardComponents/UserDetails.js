import './WizardComponents.css';
export default function(){
    return (
        <div >
            <form className = "box">
                <div className="form-row form-group">
                    <div className="col">
                    <label for="fname">First Name</label>
                    <input type="text" id ="fname" className="form-control" placeholder="First name"/>
                    </div>
                    <div class="col">
                    <label for="lname">Last name</label>
                    <input type="text" id = "lname" className="form-control" placeholder="Last name"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                    <label for="phonenum">Phone Number</label>
                    <input type="number" className="form-control" id="phonenum" placeholder="0xxxxxxxxxx"/>
                </div>
            </form>
        </div>
    )
}