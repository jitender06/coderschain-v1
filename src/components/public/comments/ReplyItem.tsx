// "use client";

// import { useState } from 'react';
// import { useAuth } from '@/hooks/useAuth';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Button } from '@/components/ui/button';
// import { CommentForm } from './CommentForm';
// import { Heart, MessageCircle } from 'lucide-react';

// interface Comment {
//     id: number;
//     blogId: number;
//     userId: number;
//     hasReply: boolean;
//     content: string;
//     createdAt: string;
//     updatedAt: string;
//     user: {
//         firstName: string;
//         lastName: string;
//         email: string;
//         profilePicture: string;
//         id: number;
//     };
// }

// interface ReplyItemProps {
//     reply: any;
//     blogId: number;
//     parentComment: Comment;
// }

// export const ReplyItem = ({ reply, blogId, parentComment }: ReplyItemProps) => {
//     console.log(parentComment,reply,":>parentCommentjk98")
//     const { isAuthenticated } = useAuth();
//     const [showReplyForm, setShowReplyForm] = useState(false);

//     const formatTime = (dateString: string) => {
//         const date = new Date(dateString);
//         const now = new Date();
//         const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

//         if (diffInHours < 1) return 'Just now';
//         if (diffInHours < 24) return `${diffInHours}h ago`;
//         if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;

//         return date.toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'short',
//             day: 'numeric'
//         });
//     };

//     const getUserInitials = (firstName: string, lastName: string) => {
//         return `${firstName?.charAt(0)}${lastName?.charAt(0)}`.toUpperCase();
//     };

//     return (
//         <div className="flex gap-3">
//             <Avatar className="h-6 w-6 flex-shrink-0">
//                 <AvatarImage src={reply.sender.profilePicture} />
//                 <AvatarFallback className="text-[10px]">
//                     {getUserInitials(reply?.sender?.firstName, reply?.sender?.lastName)}
//                 </AvatarFallback>
//             </Avatar>

//             <div className="flex-1 min-w-0">
//                 {/* Reply Header */}
//                 <div className="flex items-center gap-2 mb-1">
//                     <h4 className="font-semibold text-foreground text-sm">
//                         {reply?.sender?.firstName} {reply?.sender?.lastName}
//                     </h4>
//                     <span className="text-xs text-muted-foreground">
//                         {formatTime(reply?.createdAt)}
//                     </span>
//                 </div>

//                 {/* Reply Content */}
//                 <p className="text-foreground mb-2 text-sm whitespace-pre-wrap">{reply?.content}</p>

//                 {/* Reply Actions */}
//                 {isAuthenticated && (
//                     <div className="flex items-center gap-4 text-xs text-muted-foreground">
//                         <Button variant="ghost" size="sm" className="h-6 px-2">
//                             <Heart className="h-3 w-3 mr-1" />
//                             Like
//                         </Button>

//                         <Button
//                             variant="ghost"
//                             size="sm"
//                             className="h-6 px-2"
//                             onClick={() => setShowReplyForm(!showReplyForm)}
//                         >
//                             <MessageCircle className="h-3 w-3 mr-1" />
//                             Reply
//                         </Button>
//                     </div>
//                 )}

//                 {/* Nested Reply Form */}
//                 {showReplyForm && isAuthenticated && (
//                     <div className="mt-3">
//                         <CommentForm
//                             blogId={blogId}
//                             parentId={parentComment.id}
//                             replyTo={reply.user}
//                             onCancel={() => setShowReplyForm(false)}
//                             onSubmitSuccess={() => setShowReplyForm(false)}
//                         />
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };


"use client";

import { useState } from 'react';
// import { useAuth } from '@/hooks/useAuth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { CommentForm } from './CommentForm';
import { Heart, MessageCircle } from 'lucide-react';
import Image from 'next/image';

interface Reply {
    id: number;
    commentId: number;
    to: number;
    userId: number;
    content: string;
    createdAt: string;
    updatedAt: string;
    sender: {
        firstName: string;
        lastName: string;
        email: string;
        id: number;
        profilePicture: string;
    };
    recipient: {
        firstName: string;
        lastName: string;
        email: string;
        id: number;
        profilePicture: string;
    };
}

interface ReplyItemProps {
    reply: Reply;
    blogId: number;
    parentComment: any;
    refetch: any;
}

export const ReplyItem = ({ reply, blogId, parentComment, refetch }: ReplyItemProps) => {
    // const { isAuthenticated } = useAuth();
    const isAuthenticated = false;
    const [showReplyForm, setShowReplyForm] = useState(false);

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

    console.log(reply.sender.profilePicture, ">jn89unjreply")
    return (
        <div className="flex gap-3">
            <Avatar className="h-6 w-6 flex-shrink-0">
                <Image
                    src={reply.sender.profilePicture}
                    alt="profile"
                    width={24}
                    height={24}
                    className="rounded-full"
                />
                <AvatarFallback>
                    {getUserInitials(reply.sender.firstName, reply.sender.lastName)}
                </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
                {/* Reply Header */}
                <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-foreground text-sm">
                        {reply.sender.firstName} {reply.sender.lastName}
                    </h4>
                    <span className="text-xs text-muted-foreground">
                        {formatTime(reply.createdAt)}
                    </span>
                </div>

                {/* Reply Content with mention */}
                <p className="text-foreground mb-2 text-sm whitespace-pre-wrap">
                    {reply.recipient && (
                        <span className="text-blue-600 font-medium">
                            @{reply.recipient.firstName} {reply.recipient.lastName}{' '}
                        </span>
                    )}
                    {reply.content}
                </p>

                {/* Reply Actions */}
                {isAuthenticated && (
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                            <Heart className="h-3 w-3 mr-1" />
                            Like
                        </Button>

                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 px-2"
                            onClick={() => setShowReplyForm(!showReplyForm)}
                        >
                            <MessageCircle className="h-3 w-3 mr-1" />
                            Reply
                        </Button>
                    </div>
                )}

                {/* Nested Reply Form */}
                {showReplyForm && isAuthenticated && (
                    <div className="mt-3">
                        <CommentForm
                            blogId={blogId}
                            parentId={parentComment.id} // Use the original parent comment ID
                            replyTo={reply.sender} // Pass the sender of the reply as the user to reply to
                            comment={parentComment}
                            onCancel={() => setShowReplyForm(false)}
                            onSubmitSuccess={() => {
                                refetch();
                                setShowReplyForm(false);
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};