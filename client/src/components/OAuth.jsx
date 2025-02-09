import { Button } from "flowbite-react"
// import {GoogleAuthProvider, signInWithPopup,getAuth} from "firebase/auth"
// import { app } from "../firebase"

const OAuth = () => {

  // const auth=getAuth(app)
  //   const handleGoogleClick=async()=>{
  //       const provider=new GoogleAuthProvider();
  //       provider.setCustomParameters({prompt:"select_account"})
  //       try {
  //         const resultFromGoogle = await signInWithPopup(auth,provider);
  //         console.log(resultFromGoogle)
  //       } catch (error) {
  //         console.log(error);
  //         console.log(error)
  //       }
  //   }
  return (
    <div>
     <Button className="w-full" type="button" gradientDuoTone="pinkToOrange" outline>
         <span className="font-bold text-white bg-gray-900 mr-5 rounded-full p-2 h-8 w-8 flex items-center text-xl">G</span>
        <span className="my-auto font-bold">Continue With Google </span>
     </Button>
    </div>
  )
}

export default OAuth
