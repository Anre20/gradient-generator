import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [color1, setColor1] = useState('#ff0000');
  const [color2, setColor2] = useState('#00ff00');
  const [color3, setColor3] = useState('');
  const [angle, setAngle] = useState(50);
  const [gradientCSS, setGradientCSS] = useState('');

  useEffect(() => {
    let gradient = `linear-gradient(${angle}deg, ${color1}, ${color2}`;
    if (color3) {
      gradient += `, ${color3}`;
    }
    gradient += ')';

    const cssCode = `
      background: ${gradient};
      -moz-background: ${gradient};
      -webkit: ${gradient};
    `;

    setGradientCSS(cssCode.trim());
  }, [color1, color2, color3, angle]);

  return (
    <div className="App">
      <h1>Gradient Generator</h1>

      <div className="inputs">
        <div>
          <label>Color 1:</label>
          <input type="color" value={color1} onChange={e => setColor1(e.target.value)} />
        </div>
        <div>
          <label>Color 2:</label>
          <input type="color" value={color2} onChange={e => setColor2(e.target.value)} />
        </div>
        <div>
          <label>Color 3:</label>
          <input type="color" value={color3} onChange={e => setColor3(e.target.value)} />
        </div>
        <div>
          <label>Angle:</label>
          <input type="number" value={angle} onChange={e => setAngle(e.target.value)} />
        </div>
      </div>

      <div className="preview" style={{ background: `linear-gradient(${angle}deg, ${color1}, ${color2}${color3 ? `, ${color3}` : ''})` }}>
        Preview
      </div>

      <textarea readOnly value={gradientCSS} rows={4} cols={50} />
    </div>
  );
}

export default App;
