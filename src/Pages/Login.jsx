import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin=()=>{
        if (email === "pulu@index.co" && password === "12345") {
            // setMasuk(true)
            navigate('/products')
            console.log("anda berhasil login")
            alert("anda berhasil login")
      
          } else if (email === "pulu@index.co" || password === "12345") {
            console.log("salah password atau email")
            alert("salah password atau email")
          } else if (email === "" || password === "") {
            console.log("belum isi email atau password")
            alert("belum isi email atau password")
          }
          else {
            console.log("email dan password salah")
            alert("email dan password salah")
          }
    }

    return (
        <div className="login">
            <div className="header-login">
            <h1>
                cashier.id
            </h1>
            </div>
            <div className="card-login">
                <div className="form-login">
                    <div className="form">
                        <label>Email</label>
                        <div>
                        <input type='text' placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="form">
                        <label>Password</label>
                        <div>
                        <input type='password' placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="form">
                        <button onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}