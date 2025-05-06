import React, { useState, useEffect } from 'react';
import './main.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [expandedSkills, setExpandedSkills] = useState({
    1: false,
    2: false,
    3: false
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkTheme(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const toggleSkill = (skillId) => {
    setExpandedSkills(prev => ({
      ...prev,
      [skillId]: !prev[skillId]
    }));
  };

  return (
    <div className={darkTheme ? 'dark-theme' : ''}>
      <header>
        <h1>Мерсо</h1>
        <h1 className="profession">Наставник Родословной Клинка</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkTheme ? 'Светлая тема' : 'Тёмная тема'}
        </button>
      </header>

      <main>
        <div className="character-card">
          <div 
            className={`character-image wrapper ${zoomed ? 'zoomed' : ''}`}
            onClick={() => setZoomed(!zoomed)}
            style={{ backgroundImage: "url('/IMG/КЛБМерсоРодословная_Клинка1Арт.webp')" }}
          ></div>
          
          <div className="character-info">
            <h2>О грешнике</h2>
            <p className="description">
              Наставник Родословной Клинка Мерсо идентичность <span className="rarity-tooltip"><img src="/IMG/Редкость.webp" alt="Редкость"/><span className="tooltip-text">Редкость: 3 звезды</span></span> третьей редкости, версия Мерсо из вселенной Родословная Клинка. 
              Так-же как и Ким в Бамбуковой Шляпе, он одет в черные штаны и пиджак, поверх которых темно-серый плащ. 
              Его лицо так-же закрывает Бамбуковая Шляпа, но в отличии от Шляпы Кима, она не полностью скрывает лицо Мерсо. 
              Вместо латных перчаток эта идентичность использует джикидо.
            </p>

            <h2>Характеристики</h2>
            <table className="stats-table">
              <thead>
                <tr>
                  <th className="pi-horizontal-group-item pi-data-label pi-secondary-font pi-border-color pi-item-spacing">
                    <span><img src="/IMG/Скорость.webp" alt="Скорость"/></span>
                  </th>
                  <th className="pi-horizontal-group-item pi-data-label pi-secondary-font pi-border-color pi-item-spacing">
                    <span><img src="/IMG/Защита.webp" alt="Защита"/></span>
                  </th>
                  <th className="pi-horizontal-group-item pi-data-label pi-secondary-font pi-border-color pi-item-spacing">
                    <span><img src="/IMG/Здоровье.webp" alt="Здоровье"/></span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pi-horizontal-group-item pi-data-value pi-font pi-border-color pi-item-spacing">
                    <br/><span className="stat-value">3-5/3-6/4-6/4-6</span>
                  </td>
                  <td className="pi-horizontal-group-item pi-data-value pi-font pi-border-color pi-item-spacing">
                    <br/><span className="stat-value">53</span>
                  </td>
                  <td className="pi-horizontal-group-item pi-data-value pi-font pi-border-color pi-item-spacing">
                    <br/><span className="stat-value">219</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <h2>Сопротивление</h2>
            <table className="stats-table">
              <thead>
                <tr>
                  <th className="pi-horizontal-group-item pi-data-label pi-secondary-font pi-border-color pi-item-spacing">Рубящий</th>
                  <th className="pi-horizontal-group-item pi-data-label pi-secondary-font pi-border-color pi-item-spacing">Пробивной</th>
                  <th className="pi-horizontal-group-item pi-data-label pi-secondary-font pi-border-color pi-item-spacing">Дробящий</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pi-horizontal-group-item pi-data-value pi-font pi-border-color pi-item-spacing">
                    <br/><span className="resistance-value"><p style={{ color: 'gray' }}>Неэффективно[x0.5]</p></span>
                  </td>
                  <td className="pi-horizontal-group-item pi-data-value pi-font pi-border-color pi-item-spacing">
                    <br/><span className="resistance-value"><p style={{ color: 'blanchedalmond' }}>Нормальный[x1]</p></span>
                  </td>
                  <td className="pi-horizontal-group-item pi-data-value pi-font pi-border-color pi-item-spacing">
                    <br/><span className="resistance-value"><p style={{ color: 'red' }}>Фатальный[x2]</p></span>
                  </td>
                </tr>
              </tbody>
            </table>
            
            <div className="skills-section">
              <h2>Навыки</h2>
              <div className="skills-container">
                {/* Навык 1 */}
                <div className="skill-card">
                  <h3>Обнажить меч</h3>
                  <h4>
                    <span className="rarity-tooltip">
                      <img src="/IMG/Coin.webp" alt="Coin"/>
                      <img src="/IMG/Coin.webp" alt="Coin"/>
                    </span>
                  </h4>
                  <span className="rarity-tooltip">
                    <img src="/IMG/Draw_of_the_Sword_Meursault_Icon.webp" alt="Обнажить меч"/>
                  </span>
                  <p>3 <span className="rarity-tooltip"><img src="/IMG/Slash.webp" alt="Slash"/></span> +4</p>
                  <p>Атака 1 цели, наносит рубящий урон</p>
                  <div className={`skill-details ${expandedSkills[1] ? '' : 'hidden'}`}>
                    <p><span className="rarity-tooltip"><img src="/IMG/Тип атаки.webp" alt="Тип атаки"/></span> (45+3) <p style={{ color: 'yellow' }}>Масса Атк ⯀</p></p>
                    <p>Amt. x3</p>
                    <p>При 5+ <span className="rarity-tooltip"><img src="/IMG/Poise.webp" alt="Poise"/></span> <p style={{ color: 'yellow' }}>Самообладание,</p> Сила монеты +1</p>
                    <p>[Начало боя] Применить 1 <span><img src="/IMG/Sword_of_the_Homeland_-_Rending.webp" alt="Меч Родины"/></span> Меч Родины - Раздирающий к (наивысшему A-резонансу.) другим союзникам из Рода Клинков в порядке возрастания скорости (от самой низкой до самой высокой, максимум 2 раза)</p>
                    <p>— если в схватке участвуют 6 или более союзников из Рода Клинков, примените 2 вместо 1</p>
                    <p style={{ color: 'aqua' }}>[При использовании]</p>
                    <p>Коэффициент усиления +2 <span className="rarity-tooltip"><img src="/IMG/Poise.webp" alt="Poise"/></span><p style={{ color: 'yellow' }}>Самообладание</p></p>
                    <p><span className="rarity-tooltip"><img src="/IMG/CoinEffect1.webp" alt="Coin Effect"/></span><p style={{ color: 'orange' }}>[При победе в столкновение]</p> Коэффициент усиления 1 <span className="rarity-tooltip"><img src="/IMG/Poise.webp" alt="Poise"/></span> <p style={{ color: 'yellow' }}>Самообладание</p></p>
                    <p><span className="rarity-tooltip"><img src="/IMG/CoinEffect2.webp" alt="Coin Effect"/></span><p style={{ color: 'orange' }}>[При победе в столкновение]</p> Коэффициент усиления 1 <span className="rarity-tooltip"><img src="/IMG/Poise.webp" alt="Poise"/></span> <p style={{ color: 'yellow' }}>Самообладание</p></p>
                  </div>
                  <button className="skill-toggle" onClick={() => toggleSkill(1)}>
                    {expandedSkills[1] ? 'Скрыть' : 'Подробнее'}
                  </button>
                </div>

                {/* Навык 2 */}
                <div className="skill-card">
                  <h3>Иглоукалывание</h3>
                  <h4>
                    <span className="rarity-tooltip">
                      <img src="/IMG/Coin.webp" alt="Coin"/>
                      <img src="/IMG/Coin.webp" alt="Coin"/>
                      <img src="/IMG/Coin.webp" alt="Coin"/>
                    </span>
                  </h4>
                  <span className="rarity-tooltip">
                    <img src="/IMG/Acupuncture_Meursault_Icon.webp" alt="Иглоукалывание"/>
                  </span>
                  <p>3 <span className="rarity-tooltip"><img src="/IMG/Slash.webp" alt="Slash"/></span> +5</p>
                  <p>Атака 1 цели, наносит рубящий урон</p>
                  <div className={`skill-details ${expandedSkills[2] ? '' : 'hidden'}`}>
                    <p><span className="rarity-tooltip"><img src="/IMG/Тип атаки.webp" alt="Тип атаки"/></span> <p style={{ color: 'yellow' }}>48(45+3) Масса Атк ⯀</p></p>
                    <p>Amt. x3</p>
                    <p>При 7+ <span><img src="/IMG/Poise.webp" alt="Poise"/></span><p style={{ color: 'yellow' }}>Самообладание</p>, Сила монеты +1</p>
                    <p>[Начало боя] Применить 1 <span><img src="/IMG/Баф второго навыка.webp" alt="Баф"/></span>Меч Родины - Проникающий к (наивысшему A-резонансу.) другим союзникам из Рода Клинков в порядке возрастания скорости (от самой низкой до самой высокой, максимум 2 раза)</p>
                    <p>— если в схватке участвуют 6 или более союзников из Рода Клинков, примените 2 вместо 1</p>
                    <p style={{ color: 'aqua' }}>[При использовании]</p> 
                    <p>Усиление +3 <span><img src="/IMG/Poise.webp" alt="Poise"/></span></p>
                    <p>[Победа в столкновении] Даёт 1 <span><img src="/IMG/Slash_Power_Up.webp" alt="Power Up"/></span>увеличение силы в следующем ходу</p>
                    <p><span><img src="/IMG/CoinEffect1.webp" alt="Coin Effect"/></span> <p style={{ color: 'orange' }}>[При победе в столкновение]</p> Коэффициент усиления 3 <span><img src="/IMG/Poise.webp" alt="Poise"/></span><p style={{ color: 'yellow' }}>Самообладание</p></p>
                    <p><span><img src="/IMG/CoinEffect3.webp" alt="Coin Effect"/></span> +60% Урона при Критическом Попадании</p>
                  </div>
                  <button className="skill-toggle" onClick={() => toggleSkill(2)}>
                    {expandedSkills[2] ? 'Скрыть' : 'Подробнее'}
                  </button>
                </div>
                
                {/* Навык 3 */}
                <div className="skill-card">
                  <h3>Отдай Свою Плоть</h3>
                  <h4>
                    <span className="rarity-tooltip">
                      <img src="/IMG/Coin.webp" alt="Coin"/>
                    </span>
                  </h4>
                  <span className="rarity-tooltip">
                    <img src="/IMG/Yield_My_Flesh_Meursault_Icon.webp" alt="Отдай Свою Плоть"/>
                  </span>
                  <p>20 <span className="rarity-tooltip"><img src="/IMG/Slash.webp" alt="Slash"/></span> -8</p>
                  <p>Атака 1 цели, наносит рубящий урон</p>
                  <div className={`skill-details ${expandedSkills[3] ? '' : 'hidden'}`}>
                    <p><span className="rarity-tooltip"><img src="/IMG/Тип атаки.webp" alt="Тип атаки"/></span> <p style={{ color: 'yellow' }}>45(45+0) Масса Атк ⯀</p></p>
                    <p>Amt. x1</p>
                    <p>Даёт +3 <span><img src="/IMG/Aggro.webp" alt="Aggro"/></span><p style={{ color: 'orange' }}>насмешки</p>на этот слот умения в следующем ходу</p>
                    <p style={{ color: 'aqua' }}>[При использовании]</p> 
                    <p>Пока это умение не кончится, этот юнит не может быть ошеломлен получением урона</p>
                    <p>Даёт 5 <span><img src="/IMG/Poise.webp" alt="Poise"/></span>самообладания</p>
                    <p style={{ color: 'red' }}>[Проигрыш в столкновении]</p> 
                    <p>После получения удара, использует умение "Чтобы забрать их кости"</p>
                    <p style={{ color: 'greenyellow' }}>[При критическом ударе]</p> 
                    <p>Наносит на +3% больше урона при критическом ударе за каждое самообладание на себе (Максимум 75%)</p>
                    <p>+30% урона при критическом ударе</p>
                    <p>Наносит на +0.5% больше урона per 1% потерянного здоровья на себе (Максимум 25%)</p>
                  </div>
                  <button className="skill-toggle" onClick={() => toggleSkill(3)}>
                    {expandedSkills[3] ? 'Скрыть' : 'Подробнее'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p className="quote">
          "Моя стратегия сработала, и исход этой битвы был в нашу пользу. Пусть так оно и продолжается, пока мы не найдем себе новый дом.."
        </p>
      </footer>
    </div>
  );
}

export default App;