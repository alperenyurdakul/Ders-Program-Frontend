import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [gün, setGun] = useState();
  const [ders, setDers] = useState([]);
  const [saat, setSaat] = useState([]);
  const [datas, setData] = useState([]);
  const [datas1, setData1] = useState([]);
  const [datas2, setData2] = useState([]);
  const [datas3, setData3] = useState([]);
  const [datas4, setData4] = useState([]);
  const [datas5, setData6] = useState([]);




  const getData = () => {
    axios.get('http://localhost:3000/kayit/getir', { ders, saat, gün })
      .then((res) => {
        setData(res.data)

      })
  }
  const postData = () => {
    axios.post('http://localhost:3000/kayit', { ders, saat, gün })
      .then((res) => {
        getData()
      })
  }
  const removeData = () => {
    axios.post('http://localhost:3000/kayit/sil', { ders })
      .then((res) => {
        getData();
      })
  }

  useEffect(() => {
    axios.get('http://localhost:3000/kayit/getir', { ders, saat, gün })
      .then((res) => {
        setData(res.data)

      })
  })

  return (
    <div className="App">
      <h2 style={{ color: 'red' }}>Ders Programı Oluşturma Web</h2>
      <div style={{ display: 'block', height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h3>Ders Girin:</h3>
          <input style={{ width: '15%', height: 40, justifyContent: 'center', alignItems: 'center', margin: 20 }} type="text" placeholder="" onChange={e => { setDers(e.target.value) }} /><br></br>
          <h3>Saat Girin:</h3>
          <input style={{ width: '15%', height: 40, justifyContent: 'center', alignItems: 'center', margin: 20 }} type="text" placeholder="" onChange={e => setSaat(e.target.value)} /><br></br>
          <h3>Gün Girin:</h3>
          <input style={{ width: '15%', height: 40, justifyContent: 'center', alignItems: 'center', margin: 20 }} type="text" placeholder="" onChange={e => setGun(e.target.value)} /><br></br>

        </div>

        <div>
          <button style={{ justifyContent: 'center', alignItems: 'center', width: '15%', height: 40, margin: 20 }} onClick={() => { postData() }}>  Kaydet </button>
          <button style={{ justifyContent: 'center', alignItems: 'center', margin: 20 }} onClick={() => { removeData() }}>Sil </button>




        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', padding: 20, justifyContent: 'center', flexDirection: 'row' }}>
        <table>
          <thead>

            <tr style={{ justifyContent: 'center', alignItems: 'center' }}>
              <th style={{ width: '20%', justifyContent: 'center' }}>Günler-Saat</th>
              <th style={{ width: '20%', justifyContent: 'center' }}>Pazartesi</th>
              <th style={{ width: '20%', justifyContent: 'center' }}>Salı</th>
              <th style={{ width: '20%', justifyContent: 'center' }}>Çarşamba</th>
              <th style={{ width: '40', justifyContent: 'center' }}>Perşembe</th>
              <th style={{ width: '11%', justifyContent: 'center' }}>Cuma</th>
              <th style={{ width: '11%', justifyContent: 'center' }}>Cumartesi</th>
              <th style={{ width: '11%', justifyContent: 'center' }}>Pazar</th>

            </tr>
          </thead>
          <tbody>

            <tr>

            </tr>

            {datas.map((item) => {
              return (
                <tr>
                  <td>{item.saat}</td>
                  <td>{item.ders}</td>
                </tr>

              )

            })}




          </tbody>
        </table>
      </div>


    </div>
  )


}


export default App;
