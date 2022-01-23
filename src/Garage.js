function Car(props) {
    return <h2>I am a { props.brand.model }!</h2>;
}

function Football() {
    const shoot = () => {
      alert("Great Shot!");
    }
  
    return (
      <button onClick={shoot}>Take the shot!</button>
    );
}

function Garage() {
    const carInfo = { name: "Ford", model: "Mustang" };
    return (
      <>
          <h1>Who lives in my garage?</h1>
          <Car brand={ carInfo } />
          <Football />
      </>
    );
}

export default Garage;