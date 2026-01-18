"use client";

import { CommentItem } from "./CommentItem";

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

interface CommentListProps {
    comments: Comment[];
    blogId: number;
    refetch:any
}

export const CommentList = ({ comments, blogId, refetch }: CommentListProps) => {
    console.log(comments,"@>commentskoi")
    if (comments.length === 0) {
        return (
            <div className="text-center py-8 text-muted-foreground">
                <p>No comments yet. Be the first to comment!</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {comments.map((comment) => (
                <CommentItem
                    key={comment.id}
                    comment={comment}
                    blogId={blogId}
                    refetch={refetch}
                />
            ))}
        </div>
    );
};