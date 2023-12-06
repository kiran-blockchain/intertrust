import { useContext } from "react";
import { useNavigate } from "react-router";
import { CounterContext } from "../../provider/CounterContext";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/AuthReducer";

export const Header = (props) => {
    const dispatch = useDispatch();
    const ctx = useContext(CounterContext);
    const cart = useSelector(x => x.cart);
    const auth = useSelector(x => x.auth);
    const navigate = useNavigate();
    const buildNavItems = () => {
        let result;
        if (auth.token == '') {
            result = props.config.navItems.filter(x => x.id < 4).map((item, index) => {
                return (
                    <li class="nav-item" key={item.name + index}
                        onClick={e => {
                            navigate(item.url);
                        }}>
                        <a class="nav-link" >{item.name}</a>
                    </li>
                )
            });
        }
        else {
            result = props.config.navItems.filter(x => x.id >= 4).map((item, index) => {
                return (
                    <li class="nav-item" key={item.name + index}
                        onClick={e => {
                            if (item.name == 'Logout') {
                                dispatch(logout());
                                navigate("/login");
                            } else {
                                navigate(item.url);
                            }
                        }}>
                        <a class="nav-link" >{item.name}</a>
                    </li>
                )
            });
        }
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
                        {/* <li className="nav-item">
                            <a class="nav-link" href="">{ctx.count}</a>
                        </li> */}
                        <li className="nav-item">
                            <a class="nav-link" href="">{cart.items.length}</a>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    )
}