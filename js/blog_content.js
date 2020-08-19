const button1 = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button1.style.display = "block";
  } else {
    button1.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
let id = new URLSearchParams(location.search).get("id");

//microCMSからコンテンツを取得
fetch(`https://mangolassi.microcms.io/api/v1/blogs/${id}`, {
  headers: {
    "X-API-KEY": "cc46cc4e-41a6-40e8-8e3f-7ac3488624dc",
  },
})
  .then((result) => result.json())
  .then((json) => {
    //画面表示
    const blogContentsArea = document.getElementById("blog_contents");
    const blogContentsImg = document.createElement("div");
    const blogContentsImgFile = document.createElement("img");
    const blogContentsTitle = document.createElement("div");
    const blogContentsTxt = document.createElement("div");
    const blogContentsTime = document.createElement("div");

    blogContentsImgFile.src = json.thum.url;
    blogContentsImg.appendChild(blogContentsImgFile);
    blogContentsTitle.innerHTML = json.title;
    blogContentsTime.innerHTML = json.updatedAt.split("T")[0];
    blogContentsTxt.innerHTML = json.body;
    blogContentsArea.appendChild(blogContentsImg);
    blogContentsArea.appendChild(blogContentsTitle);
    blogContentsArea.appendChild(blogContentsTime);
    blogContentsArea.appendChild(blogContentsTxt);

    blogContentsImg.setAttribute("class", "blogPage__Img");
    blogContentsTitle.setAttribute("class", "blogPage__BodyTitle");
    blogContentsTime.setAttribute("class", "blogPage__Time");
    blogContentsTxt.setAttribute("class", "blogPage__Txt");
  });
