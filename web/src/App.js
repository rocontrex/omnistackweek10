import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './app.css';
import './Sidebar.css';
import './Main.css';

function App() {

  const [github_username, setGithubusername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    })

    console.log(response.data);
  }

  return(
  <div id = "app">
    <aside>
      <strong>Cadastrar</strong>
      <form onSubmit={handleAddDev}>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do GitHub</label>
          <input 
          name="github_username" 
          id="username_github" 
          required
          value={github_username}
          onChange = {e => setGithubusername(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input 
          name="techs" 
          id="techs" 
          required
          value = {techs}
          onChange = {e => setTechs(e.target.value)}
          />
        </div>
        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input type="number" name="latitude" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)}/>
          </div>
          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input type="number" name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)}/>
          </div>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </aside>
    <main>
      <ul>
        <li className="dev-item">
          <header>
            <img src="https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Rodrigo Conte"/>
            <div className="user-info">
              <strong>Rodrigo Conte</strong>
              <span>Python, Swift, Web</span>
            </div>
          </header>
          <p>Full Stack software engineer</p>
          <a href="https://github.com/rocontrex">Acessar perfil no github</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Rodrigo Conte"/>
            <div className="user-info">
              <strong>Rodrigo Conte</strong>
              <span>Python, Swift, Web</span>
            </div>
          </header>
          <p>Full Stack software engineer</p>
          <a href="https://github.com/rocontrex">Acessar perfil no github</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Rodrigo Conte"/>
            <div className="user-info">
              <strong>Rodrigo Conte</strong>
              <span>Python, Swift, Web</span>
            </div>
          </header>
          <p>Full Stack software engineer</p>
          <a href="https://github.com/rocontrex">Acessar perfil no github</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Rodrigo Conte"/>
            <div className="user-info">
              <strong>Rodrigo Conte</strong>
              <span>Python, Swift, Web</span>
            </div>
          </header>
          <p>Full Stack software engineer</p>
          <a href="https://github.com/rocontrex">Acessar perfil no github</a>
        </li>
      </ul>
    </main>
  </div>
  );
}

export default App;
