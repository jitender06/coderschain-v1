'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { login, signup } from '@/app/login/actions'
import { IconLoader } from '@tabler/icons-react'

export function LoginForm() {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleLogin = async (formData: FormData) => {
        setIsLoading(true)
        const result = await login(formData)
        setIsLoading(false)

        if (result?.error) {
            toast.error(result.error)
        } else {
            // Redirect handled by server action, but we can double check or show success
            toast.success("Login successful! Redirecting...")
        }
    }

    const handleSignup = async (formData: FormData) => {
        setIsLoading(true)
        const result = await signup(formData)
        setIsLoading(false)

        if (result?.error) {
            toast.error(result.error)
        } else {
            toast.success("Account created! Check your email to confirm.")
        }
    }

    return (
        <div className="space-y-4">
            <form action={handleLogin}>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="m@example.com" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" name="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading && <IconLoader className="mr-2 h-4 w-4 animate-spin" />}
                        Log In
                    </Button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Don't have an account?
                    </span>
                </div>
            </div>
            <form action={handleSignup}>
                {/* Hidden inputs to pass data if needed, or separate form fields */}
                {/* For simplicity reusing the separate Signup tab in parent, 
                   but here we can make a button that uses the same inputs 
                   IF we wrapped everything in one form. 
                   Since we have Tabs in page.tsx, let's keep it simple.
               */}
            </form>
        </div>
    )
}

export function SignupForm() {
    const [isLoading, setIsLoading] = useState(false)

    const handleSignup = async (formData: FormData) => {
        setIsLoading(true)
        const result = await signup(formData)
        setIsLoading(false)

        if (result?.error) {
            toast.error(result.error)
        } else {
            toast.success("Account created! Please check your email.")
        }
    }

    return (
        <form action={handleSignup}>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input id="signup-email" name="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" name="password" type="password" required />
                </div>
                <Button type="submit" className="w-full" variant="secondary" disabled={isLoading}>
                    {isLoading && <IconLoader className="mr-2 h-4 w-4 animate-spin" />}
                    Create Account
                </Button>
            </div>
        </form>
    )
}
