import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [gün, setGun] = useState();
  const [ders, setDers] = useState();
  const [saat, setSaat] = useState();
  const [datas, setData] = useState([]);


  const dersEkle = () => {
    axios.post('http://localhost:3000/', { gün, ders, saat })
      .then((res) => {
        setData(res.data)
        console.log(res.data);

      })
  }

  const getAllData = () => {
    axios.get('http://localhost:3000/getir')
      .then((res) => {
        setData(res.data)
        console.log("data");
      })
  }
  const getData = () => {
    axios.post('http://localhost:3000/getir/gun', { gün })
      .then((res) => {
        datas.push(setData(res.data))
        console.log(res.data);

      })
  }
  const programEkle = () => {
    axios.post('http://localhost:3000/program-yap', { gün, ders, saat })
      .then((res) => {
        datas.push(setData(res.data))
        console.log(res.data);

      })
  }


  return (
    <div className="App">
      <h2>Ders Programı</h2>
      <div style={{ display: 'block', height: 'auto' }}>
        <div style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
          <input type="text" placeholder="ders girin" onChange={e => setDers(e.target.value)} /><br></br>
          <input type="text" placeholder="saat girin" onChange={e => setSaat(e.target.value)} /><br></br>
          <input type="text" placeholder="gün girin" onChange={e => setGun(e.target.value)} /><br></br>
        </div>

        <div>


          <button style={{ justifyContent: 'center', alignItems: 'center' }} onClick={() => { getAllData() }}>Get All data</button>
          <button style={{ justifyContent: 'center', alignItems: 'center' }} onClick={() => { getData() }}>Ekleme</button>
          <button style={{ justifyContent: 'center', alignItems: 'center' }} onClick={() => { programEkle() }}>Program yenile</button>
          <button style={{ justifyContent: 'center', alignItems: 'center' }} onClick={() => { dersEkle() }}>Ekle</button>
        </div>
      </div>


      <table className="table">
        {datas.map((item) => {
          return (<tr>
            <td>{item.gün}</td>
            <td>{item.saat}</td>
            <td>{item.ders}</td>

          </tr>)
        })}
      </table>
    </div>
  )


}


export default App;
