const getCards = () => {
  const items = document.querySelectorAll(".sc-1cc6vxk-2 section");
  const data = Array.from(items)
    .slice(0, -1)
    .map((elem) => {
      const headerText = elem.previousElementSibling.innerText;
      const id = elem.id;
      const elems = Array.from(elem.children).map((card) => {
        let imgUrls = card.children[0].children[0].children[0].srcset
          ? card.children[0].children[0].children[0].srcset
          : card.children[0].children[0].children[0].dataset.srcset;
        imgUrls = imgUrls.split(",").map((e) => e.split(" "));
        const title = card.children[0].children[1].innerText;
        const desc = card.children[0].innerText;
        const price =
          card.children[1].children[0].children[0].children[0].innerText;
        return {
          imgUrls: imgUrls,
          title: title,
          description: desc,
          price: price,
        };
      });
      return { title: headerText, id: id, items: elems };
    });
};
getCards();
