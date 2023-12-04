export const Dropdown=({config,onChange})=>{
    const buildOptions =()=>{
        let result = config.data.map((item,index)=>{
            return(<option  value={item.value}>{item.text}</option>)
        });
        return result;
    }
    return(
        <div class="row mb-3">
        <label for={config.id}
         class="col-sm-2 col-form-label">{config.label}</label>
        <div class="col-sm-4">
         <select id={config.id}
         className="form-control"
                name={config.name}
                onChange={onChange}
         >
            <option value="">{config.placeholder}</option>
            {buildOptions()}
         </select>
        </div>
      </div>
    )
}