import Login from '../../pages/logIn/index'
// import Login, { getServerSideProps } from '../../pages/index'

import 'bootstrap/dist/css/bootstrap.css'

export default {
  title: "Pages/Login",
  component: Login,
}

export const LoginPage = () => <Login />
// export const LoginPage = (args, { loaded: { name }}) => <Login {...args} name={name}/>


// LoginPage.args = { name: "John Dough"}
// LoginPage.loaders = [
//   async () => {
//     let data = await getServerSideProps()

//     return data.props
//   }
// ]
