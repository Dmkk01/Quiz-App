  const showMain = ({ render }) => {
      render("main.eta");
  };

  const health = ({ response }) => {
    response.body = "ok";
  };

  const version = ({ response }) => {
    response.body = "1.1";
  };
  
  export { showMain, health, version };