const buttonsOfTabHeader = document.querySelectorAll(".tab-header ul li");
const tableContents = document.querySelectorAll(".tab-content div");

let showedContent = "";

buttonsOfTabHeader.forEach((btn) => {
  btn.addEventListener("click", function () {
    let activeTab = document.querySelector(".active-tab");
    activeTab.classList.remove("active-tab");
    this.classList.add("active-tab");

    showedContent = this.getAttribute("data-id");

    console.log(this.nextElementSibling);
    console.log(this.previousElementSibling);

    tableContents.forEach((tableContent) => {
      if (tableContent.id === showedContent) {
        tableContent.classList.remove("disp-none");
      } else {
        tableContent.classList.add("disp-none");
      }
    });
  });
});