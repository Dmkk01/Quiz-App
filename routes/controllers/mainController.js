  const showMain = ({ render }) => {
      render("main.eta");
  };

  const health = ({ response }) => {
    response.body = "ok";
  };

  const version = ({ response }) => {
    response.body = "1.0";
  };
  
  export { showMain, health, version };