import { auth } from "@/../firebase";
import { loginAction } from "@/app/actions";
import FilledButton from "@/components/common/Button/FilledButton";
import { GoogleColorIcon } from "@/constants/images.routes";
import { signUpAndLoginGoogle } from "@/services/auth.services";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
const provider = new GoogleAuthProvider();

interface Props {
  isLoading: boolean;
  isLoadingGoogle: boolean;
  setIsLoadingGoogle: (value: boolean) => void;
}

const LoginWithSocial = ({
  isLoading,
  isLoadingGoogle,
  setIsLoadingGoogle,
}: Props) => {
  const searchParams = useSearchParams();
  const redirectLink = searchParams.get("redirect");

  const signInWithGoogle = async () => {
    const auth2 = getAuth();
    signInWithPopup(auth2, provider)
      .then(async (result) => {
        setIsLoadingGoogle(true);
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const idToken = credential?.idToken;
        // The signed-in user info.
        const user = result.user;
        const idToken = await user.getIdToken();

        if (user && user.email && idToken) {
          const response: any = await signUpAndLoginGoogle({
            email: user.email,
            idToken,
          });

          if (response) {
            if (response && response.data) {
              loginAction({
                token: response.data.token,
                redirectLink,
                role: response.data.user.role,
              });
              setTimeout(() => {
                localStorage.setItem("loggedIn", "true");
              }, 1000);
            }
          } else {
            setIsLoadingGoogle(false);
            auth.signOut();
          }
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoadingGoogle(false);
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <FilledButton
      loading={isLoadingGoogle}
      disabled={isLoadingGoogle || isLoading}
      onClick={signInWithGoogle}
      secondary
      text="Google"
      startIcon={
        <Image
          priority
          src={GoogleColorIcon}
          alt={"google icon"}
          width={30}
          height={30}
        />
      }
      sx={{
        height: "3.125rem",
        gap: "0.63rem",
        fontSize: "1rem",
        borderRadius: "0.3125rem",
        boxShadow: "none",
        ":hover": {
          boxShadow: "none",
        },
      }}
    />
  );
};

export default LoginWithSocial;
