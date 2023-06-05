import instance from "./instance";

export const getAllUsers = async (page) => {
  const { data } = await instance.get("/", {
    params: {
      page,
    },
  });

  return data;
};

export const toggleFollowing = async ({ id, isUserFollowing, followers }) => {
  const { data } = await instance.put(`/${id}`, {
    isFollowing: isUserFollowing,
    followers: isUserFollowing ? followers + 1 : followers - 1,
  });
  return data;
};
