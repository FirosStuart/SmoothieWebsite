fetch("https://mangolassi.microcms.io/api/v1/blogs/", {
  headers: {
    "X-API-KEY": "cc46cc4e-41a6-40e8-8e3f-7ac3488624dc",
  },
})
  .then((res) => res.json())
  .then((json) => {
    const blogArea = document.getElementById("blogs");
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

      const img = document.createElement("img");
      img.src = json.contents[i].thum.url;
      blogImg.appendChild(img);
      
      blogTxt.innerHTML=json.contents[i].title;
    }
  });
