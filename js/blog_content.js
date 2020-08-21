let id = new URLSearchParams(location.search).get("id");

//microCMSからコンテンツを取得
fetch(`https://somme.azurewebsites.net/api/HttpTrigger2?code=keyCMS&id=${id}`, {})
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
