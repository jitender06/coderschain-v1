"use client";

import { useState } from 'react';
// import { useAuth } from '@/hooks/useAuth';
import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';

interface Comment {
    id: number;
    blogId: number;
    userId: number;
    hasReply: boolean;
    content: string;
    createdAt: string;
    updatedAt: string;
    user: {
        firstName: string;
        lastName: string;
        email: string;
        profilePicture: string;
        id: number;
    };
    replies?: Comment[];
}

interface CommentSectionProps {
    blogId: number;
    comments: Comment[];
    refetch: any;
}

export const CommentSection = ({ blogId, comments, refetch }: CommentSectionProps) => {
    // const { isAuthenticated, user, isLoading } = useAuth();
    const isAuthenticated = false;
    const user: any = null;
    const isLoading = false;
    const [showLoginDialog, setShowLoginDialog] = useState(false);

    const handleAddComment = () => {
        if (!isAuthenticated) {
            setShowLoginDialog(true);
        }
    };

    return (
        <section className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                    Comments {comments.length > 0 && `(${comments.length})`}
                </h2>
            </div>

            {/* Comment Input */}
            <div className="mb-8">
                {isAuthenticated ? (
                    <CommentForm
                        blogId={blogId}
                        onSubmitSuccess={() => { refetch() }}
                    />
                ) : (
                    <div
                        className="border border-border rounded-lg p-4 bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors"
                        onClick={handleAddComment}
                    >
                        <p className="text-muted-foreground">Login to add a comment...</p>
                    </div>
                )}
            </div>

            {/* Comments List */}
            <CommentList
                comments={comments}
                blogId={blogId}
                refetch={refetch}
            />

            {/* <LoginDialog
                open={showLoginDialog}
                onOpenChange={setShowLoginDialog}
            /> */}
        </section>
    );
};