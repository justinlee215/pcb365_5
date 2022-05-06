import Home from '../../pages/index'
// import Home, { getServerSideProps } from '../../pages/index'

import 'bootstrap/dist/css/bootstrap.css'

export default {
  title: "Pages/Home",
  component: Home,
}

export const HomePage = () => <Home />
// export const HomePage = (args, { loaded: { name }}) => <Home {...args} name={name}/>


// HomePage.args = { name: "John Dough"}
// HomePage.loaders = [
//   async () => {
//     let data = await getServerSideProps()

//     return data.props
//   }
// ]
