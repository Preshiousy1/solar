export default function(){
    const loads = ['bulb','old fridge', 'new fridge', 'fan', 'old ac' , 'new ac', 'old tv', 'new tv']
    return (
        <div>
          <table className = "table table-stripped">
              <thead>
                  <td>   
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        </div>
                    </td>
                  <td> Appliance</td>
                  <td> Quantity</td>
                  <td> Rating (W)</td>
              </thead>
              <tbody>
                 
                  <tr>
                      <td>*</td>
                      <td> 
                          <label for= "appli" className="mr-3"> Appliance</label>   
                          <select id="appli">
                            {loads.map((load) => {
                                return (
                                    <option key={load} value={load} label={load}/>
                                )
                            })}
                           </select>
                      </td>
                      <td> 
                          <label for = "quantity" className="mr-3"> Quantity</label>
                          <input type="number" id="quantity" value="0" />
                        </td>
                      <td>
                     
                        <input type = "submit"  className = "btn btn-sm btn-success ml-3" />
                      </td>
                  </tr>
              </tbody>

          </table>
        </div>
    )
}