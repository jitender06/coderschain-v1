"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
// import { useAuth } from '@/hooks/useAuth';
// import { useAddcommentMutation, useAddcommentreplyMutation } from '@/store/services/commentService';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from 'sonner';

const commentSchema = z.object({
    content: z.string().min(1, 'Comment cannot be empty').max(1000, 'Comment too long'),
});

type CommentFormData = z.infer<typeof commentSchema>;

interface CommentFormProps {
    blogId: number;
    parentId?: number;
    comment?: any;
    replyTo?: {
        id: number;
        firstName: string;
        lastName: string;
    };
    onCancel?: () => void;
    onSubmitSuccess?: () => void;
}

export const CommentForm = ({
    blogId,
    parentId,
    comment,
    replyTo,
    onCancel,
    onSubmitSuccess
}: CommentFormProps) => {
    console.log(blogId,
        parentId,
        replyTo, comment, ":DFsdfds")
    // const { user } = useAuth();
    const user: any = null;
    const [isSubmitting, setIsSubmitting] = useState(false);

    // const [addComment] = useAddcommentMutation();
    // const [addCommentReply] = useAddcommentreplyMutation();

    const addComment = (v: any) => ({ unwrap: () => Promise.resolve() });
    const addCommentReply = (v: any) => ({ unwrap: () => Promise.resolve() });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<CommentFormData>({
        resolver: zodResolver(commentSchema)
    });

    const onSubmit = async (data: CommentFormData) => {
        if (!user) return;

        setIsSubmitting(true);
        try {
            if (parentId && replyTo) {
                // Add reply - use the parent comment ID and the user we're replying to
                await addCommentReply({
                    commentId: parentId, // This should be the original parent comment ID
                    to: replyTo.id,      // The user ID we're replying to
                    content: data.content
                }).unwrap();
            } else {
                // Add main comment
                await addComment({
                    blogId,
                    content: data.content
                }).unwrap();
            }

            reset();
            onSubmitSuccess?.();
            toast.success(parentId ? 'Reply added!' : 'Comment added!');
        } catch (error) {
            console.error('Error adding comment:', error);
            toast.error('Failed to add comment');
        } finally {
            setIsSubmitting(false);
        }
    };
    const getUserInitials = (firstName: string, lastName: string) => {
        return `${firstName?.charAt(0)}${lastName?.charAt(0)}`.toUpperCase();
    };

    return (
        <div className="flex gap-3">
            <Avatar className="h-8 w-8">
                <AvatarImage src={user?.profilePicture} />
                <AvatarFallback className="text-xs">
                    {getUserInitials(user?.firstName || '', user?.lastName || '')}
                </AvatarFallback>
            </Avatar>

            <div className="flex-1">
                {replyTo && (
                    <div className="mb-2 text-sm text-muted-foreground">
                        Replying to <span className="font-medium text-foreground">
                            {replyTo.firstName} {replyTo.lastName}
                        </span>
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    <Textarea
                        placeholder={parentId ? "Write a reply..." : "Add a comment..."}
                        className="min-h-[80px] resize-none"
                        {...register('content')}
                    />

                    {errors.content && (
                        <p className="text-sm text-destructive">{errors.content.message}</p>
                    )}

                    <div className="flex gap-2 justify-end">
                        {onCancel && (
                            <Button
                                type="button"
                                variant="outline"
                                onClick={onCancel}
                                disabled={isSubmitting}
                            >
                                Cancel
                            </Button>
                        )}
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Posting...' : (parentId ? 'Reply' : 'Comment')}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};