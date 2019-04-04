export default {
  getUser: state => id => {
    return state.users.find(user => {
      return user.id == id;
    });
  }
};
