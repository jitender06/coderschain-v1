"use client";

import { useEffect, useState } from "react";
// import { useGoogleLogin } from '@react-oauth/google';
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
// import { useGetGoogleUserInfoQuery, useSocialLoginMutation } from "@/store/services/authService";
import { toast } from "sonner";
// // import { FcGoogle } from "react-icons/fc";
import { RiLoginCircleLine } from "react-icons/ri";

export function AuthDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const [accessToken, setAccessToken] = useState<string | null>(null);
  // const { data: profile, isLoading: loadingProfile } = useGetGoogleUserInfoQuery(accessToken!, { skip: !accessToken });
  // const [login, { isLoading: loginLoading }] = useSocialLoginMutation();

  const profile: any = null;
  const loadingProfile = false;
  const login = (v: any) => ({ unwrap: () => Promise.resolve() });
  const loginLoading = false;

  // const handleGoogleOAuth = useGoogleLogin({
  //   onSuccess: (tokenResponse: { access_token: string }) => {
  //     setAccessToken(tokenResponse.access_token);
  //   },
  //   onError: () => {
  //     toast("Google login failed.");
  //   },
  // });

  // useEffect(() => {
  //   if (profile) {
  //     const payload = {
  //       authType: "google",
  //       googleId: profile.sub,
  //       firstName: profile.given_name,
  //       lastName: profile.family_name,
  //       email: profile.email,
  //       profilePicture: profile.picture,
  //       role: "USER",
  //     };
  //     login(payload).unwrap()
  //       .then((result) => {
  //         if (result?.success) {
  //           toast.success("Login successfully!");
  //           if (result.data?.role === "ADMIN") {
  //             router.push("/admin/dashboard");
  //           }
  //           setIsOpen(false);
  //         }
  //       })
  //       .catch(() => {
  //         toast("Google login failed!");
  //       });
  //   }
  // }, [profile, login]);


  return (
    <>
      <Button
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
        className="
        items-center justify-center 
        text-sm font-medium
        px-4 py-2 rounded-md hidden sm:flex
      "
      >
        Get Started
      </Button>

      <span className="px-4"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
      >
        <RiLoginCircleLine className="sm:hidden w-6 h-6 text-black dark:text-white" />
      </span>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">
              Welcome to Coderschain
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="text-center mb-4">
              <p className="text-sm text-muted-foreground" >
                Authentication is currently disabled.
              </p>
            </div>

            {/* <Button
              variant="outline"
              className="w-full py-6 flex items-center justify-center gap-2"
              disabled={loginLoading || loadingProfile}
              onClick={(e) => {
                e.preventDefault();
                handleGoogleOAuth();
              }}
            >
              <FcGoogle className="h-5 w-5" />
              <span>Continue with Google</span>
            </Button> */}

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Happy Coding 🙂
                </span>
              </div>
            </div>

            <p className="px-8 text-center text-sm text-muted-foreground">
              By continuing, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}