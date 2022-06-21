import Header from './../../components/Header';
import { getProviders, signIn } from "next-auth/react";

//client side
const signin = ({providers}) => {
  return (
    <>
        <Header/>
        <div className="mt-40">
            {Object.values(providers).map(provider =>(
                <div key={provider.name} className="flex flex-col items-center">
                    <img className="w-52 object-cover" src='https://purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png' alt='google-logo'/>
                    <p className='text-sm italic my-10 text-center'>This website is created for learning purposes.</p>
                    <button className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500" onClick={()=>signIn(provider.id, { callbackUrl: "/"})}>Sign in with {provider.name}</button>
                </div>
            ))}
        </div>
    </>
  )
}

//server side
// export const getServerSideProps = async () =>{
//     const providers = await getProviders();
//     return {
//         props: {providers},
//     }
// }
export async function getServerSideProps() {
    const providers = await getProviders();
    return {
      props: { providers },
    };
}

export default signin
