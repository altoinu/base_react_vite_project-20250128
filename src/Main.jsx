import FetchDataComponent from "./components/FetchDataComponent";
import HelloBoxComponent from "./components/HelloBoxComponent";

export default function Main() {
  function handleButtonClick(buttonNum) {
    alert("button number clicked:" + buttonNum);
  }

  return (
    <>
      <h1>Hello from React!!!</h1>
      <HelloBoxComponent personName="Kaoru" />
      <br />
      <HelloBoxComponent
        personName="John"
        secondPersonName="Doe"
        onButtonClick={handleButtonClick}
      />
      <FetchDataComponent />
    </>
  );
}
