import { useContext } from "react";
import { useNavigate } from "react-router";
import { CounterContext } from "../../provider/CounterContext";

export const Header = (props) => {
    const ctx = useContext(CounterContext)
    const navigate = useNavigate();
    const buildNavItems = ()=>{
      let result =   props.config.navItems.map((item,index)=>{
        return (
            <li class="nav-item" key={item.name+index} 
            onClick={e=>{
                navigate(item.url);
            }}>
                            <a class="nav-link" >{item.name}</a>
                        </li>
        )
      });
      return result;
    };
    return (
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">{props.config.title}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav me-auto">
                        {buildNavItems()}
                        <li className="nav-item">
                            <a class="nav-link" href="">{ctx.count}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}