export const getAllUsers = ({ users }) => users.items;

export const getFilteredUsers = ({ users: { items, following }, filter }) => {
  if (filter === "show all") return items;
  if (filter === "follow") {
    return items.filter(({ id }) => following.every((item) => item.id !== id));
  }
  if (filter === "followings") {
    return following;
  }
};

export const getFollowingUsers = ({ following }) => following;

export const getLoading = ({ users }) => users.isLoading;
