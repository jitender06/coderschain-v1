// "use client";

// import { ReplyItem } from "./ReplyItem";

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

// interface ReplyListProps {
//     replies: Comment[];
//     blogId: number;
//     parentComment: Comment;
// }

// export const ReplyList = ({ replies, blogId, parentComment }: ReplyListProps) => {
//     if (replies.length === 0) {
//         return null;
//     }

//     return (
//         <div className="space-y-4">
//             {replies.map((reply) => (
//                 <ReplyItem
//                     key={reply.id}
//                     reply={reply}
//                     blogId={blogId}
//                     parentComment={parentComment}
//                 />
//             ))}
//         </div>
//     );
// };

"use client";

import { ReplyItem } from './ReplyItem';

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

interface ReplyListProps {
    replies: Reply[];
    blogId: number;
    parentComment: any;
    refetch: any;
}

export const ReplyList = ({ replies, blogId, parentComment, refetch }: ReplyListProps) => {
    if (replies.length === 0) {
        return null;
    }

    return (
        <div className="space-y-4">
            {replies.map((reply) => (
                <ReplyItem
                    key={reply.id}
                    reply={reply}
                    blogId={blogId}
                    parentComment={parentComment}
                    refetch={refetch}
                />
            ))}
        </div>
    );
};