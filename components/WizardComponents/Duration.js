import './WizardComponents.css';
export default function(){
    return (
        <div>
            <h6 className = 'text-center m-5'>How Much Electricity do you get in a day?</h6>
            <div className = "power">
               
                <div>
                    <div class="form-group mb-5">
                        <label for="voltage">How Many Hours of Nepa do you get a day?</label> 
                        <input className = "form-control"  type="number" value="0"/>
                    </div>
                    <div class="form-group">
                        <label for="voltage">How Many Hours of Generator Power do you get a day?</label>
                        <input className = "form-control" type="number" value="0"/>
                    </div>
                </div>
               
            </div>
        </div>
    )
}