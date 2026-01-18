"use client";

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
// import { useGetCommentsReplyQuery } from '@/store/services/commentService';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { CommentForm } from './CommentForm';
import { Heart, MessageCircle, MoreHorizontal } from 'lucide-react';
import { ReplyList } from './ReplyList';

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
}

interface CommentItemProps {
    comment: Comment;
    blogId: number;
    refetch: any;
}

export const CommentItem = ({ comment, blogId, refetch }: CommentItemProps) => {
    console.log(comment, ":>commentjn98")
    const { isAuthenticated } = useAuth();
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [showReplies, setShowReplies] = useState(false);

    // const { data: repliesData, isLoading: repliesLoading } = useGetCommentsReplyQuery(
    //     comment.id,
    //     { skip: !showReplies || !comment.hasReply }
    // );

    const repliesData: any = null;
    const repliesLoading = false;

    const formatTime = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

        if (diffInHours < 1) return 'Just now';
        if (diffInHours < 24) return `${diffInHours}h ago`;
        if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;

        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const getUserInitials = (firstName: string, lastName: string) => {
        return `${firstName?.charAt(0)}${lastName?.charAt(0)}`.toUpperCase();
    };

    const replies = repliesData?.data || [];
    console.log(replies, ">repliesj98")
    return (
        <div className="flex gap-3">
            <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarImage src={comment.user.profilePicture} />
                <AvatarFallback className="text-xs">
                    {getUserInitials(comment.user.firstName, comment.user.lastName)}
                </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
                {/* Comment Header */}
                <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-foreground text-sm">
                        {comment.user.firstName} {comment.user.lastName}
                    </h4>
                    <span className="text-xs text-muted-foreground">
                        {formatTime(comment.createdAt)}
                    </span>
                </div>

                {/* Comment Content */}
                <p className="text-foreground mb-2 whitespace-pre-wrap">{comment.content}</p>

                {/* Comment Actions */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                        <Heart className="h-4 w-4 mr-1" />
                        Like
                    </Button>

                    {isAuthenticated && (
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2"
                            onClick={() => setShowReplyForm(!showReplyForm)}
                        >
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Reply
                        </Button>
                    )}

                    {comment.hasReply && (
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2"
                            onClick={() => setShowReplies(!showReplies)}
                            disabled={repliesLoading}
                        >
                            {repliesLoading ? 'Loading...' :
                                showReplies ? 'Hide replies' : `View replies (${replies.length})`}
                        </Button>
                    )}
                </div>

                {/* Reply Form */}
                {showReplyForm && isAuthenticated && (
                    <div className="mt-4">
                        <CommentForm
                            blogId={blogId}
                            parentId={comment.id}
                            replyTo={comment.user}
                            comment={comment}
                            onCancel={() => setShowReplyForm(false)}
                            onSubmitSuccess={() => {
                                refetch()
                                setShowReplyForm(false);
                                setShowReplies(true);
                            }}
                        />
                    </div>
                )}

                {/* Replies */}
                {showReplies && comment.hasReply && (
                    <div className="mt-4 border-l-2 border-border pl-4">
                        <ReplyList
                            replies={replies}
                            blogId={blogId}
                            parentComment={comment}
                            refetch={refetch}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};