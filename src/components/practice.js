


function App() {
    const [pizzas, setPizzas] = useState ([])
  
    function fetch
  }
  
  
  //add pizzas
  //user fill form and make new pizza = persist
  //  create a form component
  //  should return form 
  //  
  
  //any form ever!!! as long as has refurn form and state defined previously
  function handleChange(event) {
    setFormState((prevFormState) => {
      let key = event.target.name;
      return {
        ...prevFormState, 
        [key]: event.target.value,
      }
    })
  }
  //POST
  
  const config = {
    method: "POST",
    headers {
        "Content-type": "application/json".
        Accepts: "applications/json",
    },
    body: JSON stringify(formState),
  }
  
  fetch:("htt.../pizzas", config)
  .then(res) => res.json())
  .then(pizza) => console.log(pizza))
  }
  
  //how to get something appended after POST without refreshing the page? 
  
  
  
  
  
  functin Pizza({ pizza })
  
  //GET REQUEST
  
  let config = {
    method: "DELETE"
  }
  fetch('http://http.../pizzas/${pizza.id}')