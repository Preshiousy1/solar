export default function(){
    return (
        <div>
           <div className = "row">
               <div className = "col-5">
                <div className="form-group">
                        <label for="state">Select Your State of Residence</label>
                        <select className="form-control" id="state">
                        <option>Kano</option>
                        <option>Kaduna</option>
                        <option>Jigawa</option>
                        <option>Lagos</option>
                        <option>Abuja</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="town">Select Your Town</label>
                        <select className="form-control" id="town">
                        <option>Nassarrawa</option>
                        <option>Fagge</option>
                        <option>Bichi</option>
                        <option>Danbatta</option>
                        <option>Yankaba</option>
                        </select>
                    </div>
               </div>
               <div className = "col-7">
                   <img src="images/map.png" height = "250px" width ="fill" alt ='map'/>
                </div>
           </div>
        </div>
    )
}