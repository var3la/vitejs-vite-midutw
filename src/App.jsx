import './App.css'
export function App() {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' alt="avatar" src="https://unavatar.io/midudev" />
        <div className='tw-followCard-info'>
          <strong>miguel angel</strong>
          <span className='tw-followCard-infoUserName'>@midudev</span>
        </div>
      </header>
      <aside>
        <button className='tw-followCard-button'>Seguir</button>
      </aside>
    </article>
  );
}
