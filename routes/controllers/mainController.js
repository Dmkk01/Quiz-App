const showMain = ({ render }) => {
    render("main.eta");
  };

  const health = ({ response }) => {
    response.body = "ok";
  };
  
  export { showMain, health };