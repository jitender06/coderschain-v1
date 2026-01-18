"use client"
import { useAuth } from '@/hooks/useAuth';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Pencil, Save, X, Camera } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import Constants from '@/config/constants';
// import { useUpdateProfileMutation } from '@/store/services/authService';

function ProfilePage() {
    const { isAuthenticated, user, isLoading } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState({
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        email: user?.email || '',
        profilePicture: user?.profilePicture || ''
    });
    // const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();
    const updateProfile = (v: any) => ({ unwrap: () => Promise.resolve() });
    const isUpdating = false;


    const uploadFileToServer = async (file: File): Promise<string> => {
        const formData = new FormData();
        formData.append("coverImage", file);

        try {
            // Get user token from localStorage or your auth context
            const userToken = localStorage.getItem("token") || "";

            const response = await fetch(`${Constants.HOST}${Constants.API_VERSION}imageUpload`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`Upload failed with status: ${response.status}`);
            }

            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error("Upload error:", error);
            throw new Error("Failed to upload file");
        }
    };

    // Update editedUser when user data loads
    React.useEffect(() => {
        if (user) {
            setEditedUser({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                profilePicture: user.profilePicture
            });
        }
    }, [user]);

    const handleSave = async () => {
        try {
            let profileImageUrl = editedUser.profilePicture;

            if (profileImageUrl.startsWith("blob:")) {
                const fileInput = document.getElementById("profile-picture") as HTMLInputElement;
                if (fileInput?.files?.[0]) {
                    profileImageUrl = await uploadFileToServer(fileInput.files[0]);
                }
            }

            const payload = {
                firstName: editedUser.firstName,
                lastName: editedUser.lastName,
                profilePicture: profileImageUrl,
            };

            console.log(payload, ">dsf0payload")

            await updateProfile(payload).unwrap();
            setIsEditing(false);
        } catch (error) {
            console.error("Failed to update profile:", error);
        }
    };

    const handleCancel = () => {
        setEditedUser({
            firstName: user?.firstName || '',
            lastName: user?.lastName || '',
            email: user?.email || '',
            profilePicture: user?.profilePicture || ''
        });
        setIsEditing(false);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Create a temporary URL for the selected image
            const imageUrl = URL.createObjectURL(file);
            setEditedUser(prev => ({ ...prev, profilePicture: imageUrl }));
            // Here you would typically upload the image to your server
        }
    };

    if (isLoading) {
        return <ProfileSkeleton />;
    }

    if (!isAuthenticated || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Card className="w-full max-w-md">
                    <CardContent className="pt-6">
                        <p className="text-center text-muted-foreground">Please log in to view your profile.</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const getInitials = (firstName: string, lastName: string) => {
        return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    };

    return (
        <div className="container-web bg-background">
            <div className="max-w-2xl mx-auto">
                <Card className="w-full">
                    <CardHeader className="text-center pb-4">
                        <CardTitle className="text-2xl font-bold">Profile</CardTitle>
                        <CardDescription>
                            Manage your account information and profile picture
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {/* Profile Picture Section */}
                        <div className="flex flex-col items-center space-y-4">
                            <div className="relative">
                                <Avatar className="h-24 w-24 border-4 border-background">
                                    <AvatarImage
                                        src={editedUser.profilePicture}
                                        alt={`${user.firstName} ${user.lastName}`}
                                    />
                                    <AvatarFallback className="text-lg">
                                        {getInitials(user.firstName, user.lastName)}
                                    </AvatarFallback>
                                </Avatar>

                                {isEditing && (
                                    <label htmlFor="profile-picture" className="absolute bottom-0 right-0">
                                        <div className="bg-primary text-primary-foreground rounded-full p-2 cursor-pointer hover:bg-primary/90 transition-colors">
                                            <Camera className="h-4 w-4" />
                                        </div>
                                        <input
                                            id="profile-picture"
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleImageChange}
                                        />
                                    </label>
                                )}
                            </div>

                            {!isEditing && (
                                <Button
                                    onClick={() => setIsEditing(true)}
                                    variant="outline"
                                    className="flex items-center gap-2"
                                >
                                    <Pencil className="h-4 w-4" />
                                    Edit Profile
                                </Button>
                            )}
                        </div>

                        {/* User Information */}
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    {isEditing ? (
                                        <Input
                                            id="firstName"
                                            value={editedUser.firstName}
                                            onChange={(e) => setEditedUser(prev => ({ ...prev, firstName: e.target.value }))}
                                        />
                                    ) : (
                                        <div className="px-3 py-2 border border-transparent rounded-md text-sm">
                                            {user.firstName}
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    {isEditing ? (
                                        <Input
                                            id="lastName"
                                            value={editedUser.lastName}
                                            onChange={(e) => setEditedUser(prev => ({ ...prev, lastName: e.target.value }))}
                                        />
                                    ) : (
                                        <div className="px-3 py-2 border border-transparent rounded-md text-sm">
                                            {user.lastName}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                {isEditing ? (
                                    <Input
                                        id="email"
                                        type="email"
                                        value={editedUser.email}
                                        onChange={(e) => setEditedUser(prev => ({ ...prev, email: e.target.value }))}
                                        disabled // Email might not be editable
                                        className="opacity-70"
                                    />
                                ) : (
                                    <div className="px-3 py-2 border border-transparent rounded-md text-sm">
                                        {user.email}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        {isEditing && (
                            <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                <Button
                                    onClick={handleSave}
                                    disabled={isUpdating}
                                    className="flex-1 flex items-center gap-2"
                                >
                                    <Save className="h-4 w-4" />
                                    {isUpdating ? "Saving..." : "Save Changes"}
                                </Button>
                                <Button
                                    onClick={handleCancel}
                                    variant="outline"
                                    className="flex-1 flex items-center gap-2"
                                >
                                    <X className="h-4 w-4" />
                                    Cancel
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

// Skeleton loader for better UX
function ProfileSkeleton() {
    return (
        <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <Card className="w-full">
                    <CardHeader className="text-center pb-4">
                        <Skeleton className="h-8 w-32 mx-auto" />
                        <Skeleton className="h-4 w-64 mx-auto" />
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex flex-col items-center space-y-4">
                            <Skeleton className="h-24 w-24 rounded-full" />
                            <Skeleton className="h-10 w-32" />
                        </div>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-20" />
                                    <Skeleton className="h-10 w-full" />
                                </div>
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-20" />
                                    <Skeleton className="h-10 w-full" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-20" />
                                <Skeleton className="h-10 w-full" />
                            </div>
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-20" />
                                <Skeleton className="h-6 w-16" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default ProfilePage;