export default (context, inject) => {
  inject("scrollToMailingList", () => {
    const element = document.getElementById("mailing-list");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });
};
