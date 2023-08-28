const addBlogButton=document.getElementById("blogButton");
const addBlogForm = document.getElementById("addBlogForm");
const submitBlogButton = document.getElementById("submitBlog");
const blogContainer1=document.querySelector(".home-article");
const blogContainer=blogContainer1.parentElement.parentElement;
console.log(addBlogButton);
console.log(addBlogForm);


addBlogButton.addEventListener("click",function(){
    // addBlogForm.classList.remove("hidden");
    // addBlogForm.classList.remove("form-container");
    addBlogForm.style.display = addBlogForm.style.display === 'none' ? 'block' : 'none';
    // addBlogForm.classList.toggle("form-container");
})

submitBlogButton.addEventListener("click",function(ev){
    ev.preventDefault();
    const imgURL=document.getElementById("blogImage").value;
    const heading=document.getElementById("blogHeading").value;
    const name=document.getElementById("name").value;
    const content=document.getElementById("blogContent").value;

    if(imgURL && heading && name &&content){
        const newBlog=document.createElement("li");
        // newBlog.classList.add("");
        newBlog.innerHTML=`
         <div class="home-article">
            <div class="home-article-img">
              <img src="${imgURL}" alt="article" >
            </div>
            <div class="home-article-content font1">
              <a href="blogpost.html">
                <h2>${heading}</h2>
              </a>
              <div> <h4>Written By:- ${name}</h4></div>
              <div>${content}</div>
            </div>
          </div>
          <div class="deleteButton"> 
            <button class="deletepost">Delete Blog</button> 
          </div>
        `;

        blogContainer.append(newBlog);

        document.getElementById("blogImage").value = "";
        document.getElementById("blogHeading").value = "";
        document.getElementById("name").value="";
        document.getElementById("blogContent").value = "";

        // Hide the form
        // addBlogForm.classList.add("hidden");
        addBlogForm.style.display = addBlogForm.style.display === 'none' ? 'block' : 'none';
    }
})


blogContainer.addEventListener("click",function(ev){
    let currelement=ev.target;
    let className=ev.target.className;
    if(className=="deletepost"){
        let item=currelement.parentElement.parentElement;
        console.log(item);
        item.remove();
    }
})