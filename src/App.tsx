import { useEffect, useState } from 'react'
import { getAll } from './api/products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Products from './pages/Products'
import Listproduct from './pages/admin/list'
import DetailPage from './pages/Detail'
import AddProduct from './pages/admin/add'
import EditProduct from './pages/admin/edit'
import SignUp from './pages/signUp'
import { getAllUser } from './api/users'
import SignIn from './pages/signIn'

function App() {
  const [producs, setP] = useState([])
  const [users, setU] = useState([])

  useEffect(() => {
    getAll().then(({ data }) => setP(data))
  }, [])

  useEffect(() => {
    getAllUser().then(({ data }) => setU(data))
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< HomePage />} />
          <Route path='/products' element={< Products data={producs} />} />
          <Route path='/products/:id' element={< DetailPage data={producs} />} />

          <Route path='/signup' element={< SignUp datas={users} />} />
          <Route path='/signin' element={< SignIn datas={users} />} />

          <Route path='/admin/products/add' element={< AddProduct />} />
          <Route path='/admin/products/edit/:id' element={< EditProduct data={producs} />} />
          <Route path='/admin/products' element={< Listproduct data={producs} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
