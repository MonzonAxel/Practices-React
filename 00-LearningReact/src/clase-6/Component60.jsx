import { useEffect, useState } from "react";

export const Component60 = () => {
  const URL = "https://api.chucknorris.io/jokes/random";

  const [chuck, setChuck] = useState(null);

  const getFetch = async () => {
    try {
      const data = await fetch(URL);
      const response = await data.json();
      setChuck(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <section>
      <h2>Chuck Norris Jokes</h2>
      {chuck ? (
        <div>
          <div>
            <img src={chuck.icon_url} alt={chuck.icon_url} />
            <p>{chuck.value}</p>
          </div>
          <div>
            <button onClick={getFetch}>Nuevo Chiste</button>
          </div>
        </div>
      ) : (
        <p>Cargando ...</p>
      )}
    </section>
  );
};
