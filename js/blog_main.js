fetch("https://somme.azurewebsites.net/api/HttpTrigger1?code=keyCMS", {})
  .then((res) => res.json())
  .then((json) => {
    const blogArea = document.getElementById("blog_main");
    for (i = 0; i < 2; i++) {
      const blogSet = document.createElement("div");
      blogSet.setAttribute("class", "blog__set");
      blogArea.appendChild(blogSet);

      const blogImg = document.createElement("div");
      blogImg.setAttribute("class", "blog__img");
      const blogTxt = document.createElement("div");
      blogTxt.setAttribute("class", "blog__title");

      blogSet.appendChild(blogImg);
      blogSet.appendChild(blogTxt);
//       <a href="/blog.html?id={ここにblogのID}">
//     <img>
// </a>
      const imgID = json.contents[i].id;
      const blogLink = document.createElement("a");
      blogLink.href = "/blog.html?id=" + imgID;
      blogImg.appendChild(blogLink);
      const img = document.createElement("img");
      img.src = json.contents[i].thum.url;
      blogLink.appendChild(img);
      blogTxt.innerHTML=json.contents[i].title;
    }
  });
