"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Comment {
  id: number;
  name: string;
  email: string;
  text: string;
}

// Function to generate a Gravatar URL based on email
const getGravatarUrl = (email: string, size = 80) => {
  const hash = email.trim().toLowerCase();
  return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`;
};

export default function CommentSection({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [commentText, setCommentText] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null); // Track comment being edited
  const [errors, setErrors] = useState<{ name?: string; email?: string; commentText?: string }>({}); // Validation errors

  // Load comments from localStorage on the client side
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(`comments-${postId}`) || '[]');
    setComments(savedComments);
    setIsLoading(false); // Mark loading as complete
  }, [postId]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form fields
    const newErrors: { name?: string; email?: string; commentText?: string } = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!commentText.trim()) newErrors.commentText = 'Comment is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({}); // Clear errors if validation passes

    if (editingCommentId !== null) {
      // Edit existing comment
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, name, email, text: commentText }
          : comment
      );
      setComments(updatedComments);
      localStorage.setItem(`comments-${postId}`, JSON.stringify(updatedComments));
      setEditingCommentId(null); // Reset editing state
    } else {
      // Add new comment
      const newComment = {
        id: comments.length + 1,
        name,
        email,
        text: commentText,
      };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      localStorage.setItem(`comments-${postId}`, JSON.stringify(updatedComments));
    }

    // Clear the form
    setName('');
    setEmail('');
    setCommentText('');
  };

  const handleEdit = (comment: Comment) => {
    setName(comment.name);
    setEmail(comment.email);
    setCommentText(comment.text);
    setEditingCommentId(comment.id);
  };

  const handleDelete = (commentId: number) => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      const updatedComments = comments.filter((comment) => comment.id !== commentId);
      setComments(updatedComments);
      localStorage.setItem(`comments-${postId}`, JSON.stringify(updatedComments));
    }
  };

  return (
    <div className="mt-8">
      {/* Display Comments */}
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF9F0D]"></div>
        </div>
      ) : comments.length === 0 ? (
        <p className="text-gray-600 text-center">No comments yet. Be the first to comment!</p>
      ) : (
        <div className="space-y-6">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 transition-transform hover:scale-105 hover:shadow-lg"
            >
              {/* User Avatar */}
              <Image
                src={getGravatarUrl(comment.email)}
                alt={comment.name}
                className="w-12 h-12 rounded-full border-2 border-[#FF9F0D]"
              />
              {/* Comment Content */}
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{comment.name}</h3>
                <p className="text-sm text-gray-600">{comment.email}</p>
                <p className="mt-2 text-gray-700">{comment.text}</p>
                {/* Edit and Delete Buttons */}
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => handleEdit(comment)}
                    className="text-sm text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(comment.id)}
                    className="text-sm text-red-500 hover:text-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Post/Edit a Comment */}
      <div className="mt-8">
        <h1 className="text-xl border-b-[1px] h-10 border-[#E0E0E0] font-bold">
          {editingCommentId !== null ? 'Edit Comment' : 'Post a Comment'}
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="flex items-start space-x-4">
            {/* Profile Picture Preview */}
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {email ? (
                <Image
                  src={getGravatarUrl(email)}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500 text-lg">👤</span>
              )}
            </div>
            {/* Form Fields */}
            <div className="flex-1 space-y-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    id="name"
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-lg text-[#4F4F4F] font-semibold border-[1px] px-4 py-2 border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
                    required
                  />
                  {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div className="w-1/2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-lg text-[#4F4F4F] font-semibold border-[1px] px-4 py-2 border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
                    required
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                  Comment
                </label>
                <textarea
                  id="comment"
                  placeholder="Write a Comment"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full text-lg text-[#4F4F4F] font-semibold border-[1px] px-4 py-2 border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] resize-none"
                  rows={4}
                  required
                />
                {errors.commentText && <p className="text-sm text-red-500 mt-1">{errors.commentText}</p>}
              </div>
              <button
                type="submit"
                className="bg-[#FF9F0D] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#E08E0B] transition-colors"
              >
                {editingCommentId !== null ? 'Save Changes' : 'Post Comment'}
              </button>
              {editingCommentId !== null && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingCommentId(null);
                    setName('');
                    setEmail('');
                    setCommentText('');
                  }}
                  className="ml-4 bg-gray-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}