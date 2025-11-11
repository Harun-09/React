import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import CreateRole from "./pages/roles/CreateRole"
import EditRole from "./pages/roles/EditRole"
import RoleList from "./pages/roles/RoleList"
import UserList from "./pages/users/UserList"
import CreateUser from "./pages/users/CreateUser"
import EditUser from "./pages/users/EditUser"

function App() {


  return (
    <>
      
 <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route path="/role/create" element={<CreateRole />}/>
          <Route path="/role/edit/:roleId" element={<EditRole />} />
          <Route path="/role" element={<RoleList />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/user/create" element={<CreateUser />} />
          <Route path="/user/edit/:id" element={<EditUser/>} />
        </Route>
        
      </Routes>
    </BrowserRouter>









    </>
  )
}

export default App
