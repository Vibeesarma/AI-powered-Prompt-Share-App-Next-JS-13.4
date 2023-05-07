"use client";

import { useState, useEffect } from "react";

import { useParams, useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const PostUserProfile = () => {
  const [posts, setPosts] = useState([]);

  const { id: userId } = useParams();
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${userId}/posts`);
      const data = await response.json();

      if (userId) setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName} personalized profile page. Explore ${userName}'s exceptional and inspired by the power of their imagination.`}
      data={posts}
    />
  );
};

export default PostUserProfile;
