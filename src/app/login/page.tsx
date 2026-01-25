import { LoginForm, SignupForm } from '@/components/auth/login-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react'

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-muted/20 px-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Admin Access</CardTitle>
                    <CardDescription className="text-center">
                        Enter your email and password to access the dashboard
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="login" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-4">
                            <TabsTrigger value="login">Login</TabsTrigger>
                            {/* <TabsTrigger value="signup">Sign Up</TabsTrigger> */}
                        </TabsList>

                        <TabsContent value="login">
                            <LoginForm />
                        </TabsContent>

                        {/* <TabsContent value="signup">
                            <SignupForm />
                        </TabsContent> */}
                    </Tabs>

                    {/* Social Auth (Optional Placeholder) */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" disabled>
                            <IconBrandGithub className="mr-2 h-4 w-4" /> Github
                        </Button>
                        <Button variant="outline" disabled>
                            <IconBrandGoogle className="mr-2 h-4 w-4" /> Google
                        </Button>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}
