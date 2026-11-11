import Students from "./components/Students";
function App (){
  const myCar = {
    brand:"Chevrolet",
    name:"malibu",
    color:"balck",
    price:5000000,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjY4L5HEHtFLhN9Rz0RVQCdrgm9VFHArYGCEIsOIM1oA&s=10",

  };
  return (
    <>
    <Students car={myCar}/>
    </>
  );
}
export default App;
