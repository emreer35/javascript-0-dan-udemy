const data = [...articles];

const toggleBtn = document.querySelector(".btn");
const articleContainer = document.querySelector(".articles");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

const article = data.map((article) => {
  const { title, date, lenght, snippet } = article;
  const formatDate = moment(date).format("MMMM Do, YYYY");
  return `
        <article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`;
}).join('');

articleContainer.innerHTML = article    
