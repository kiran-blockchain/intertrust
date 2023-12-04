export const Textbox=({config,onChange})=>{
    return(
        <div class="row mb-3">
        <label for={config.id}
         class="col-sm-2 col-form-label">{config.label}</label>
        <div class="col-sm-4">
          <input
           type={config.type}
           class="form-control"
            id={config.id}
            name={config.name}
            placeholder={config.placeholder}
            onChange={onChange}/>
        </div>
      </div>
    )
}