
import "./App.css";
import MiniCart from "./Components/MenuPage/MiniCart";
import { Routes } from "./Routes/Routes";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state);
  return (
    <div className="App">
      <Routes />
      <div>
        <div
          class="modal fade"
          id="CartModal"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div
            class="modal-dialog"
            style={{ margin: "5% 3% 0% 70%" }}
            role="document"
          >
            <div class="modal-content">
              <div class="modal-body">
                <MiniCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
