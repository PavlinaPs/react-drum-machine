const today = new Date();
const greet = () => {
  switch (true) {
    case today.getHours() >= 6 && today.getHours() < 12:
      return "Good Morning";
    case today.getHours() >= 12 && today.getHours() < 18:
      return "Good Afternoon";
    case today.getHours() >= 18 && today.getHours() <= 23:
      return "Good Evening";
    case today.getHours() < 6:
      return "Good Night";
    default:
      return "Hello";
  }
};

export default greet;
