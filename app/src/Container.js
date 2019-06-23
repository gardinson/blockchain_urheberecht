
import { drizzleConnect } from "drizzle-react";
import MyComponent from "./MyComponent";

const mapStateToProps = state => {
  return {
    Urheberrecht: state.contracts.Urheberrecht,
  }
}


const Container = drizzleConnect(MyComponent, mapStateToProps);

export default Container;