const imageBase = ".";

const data = [
  {
    id: "brand",
    title: "1.品牌设计",
    projects: [
      {
        title: "品牌手册 / 山野有蜜蜂蜜",
        type: "page",
        images: ["assets/images/work-003.jpg"]
      },
      {
        title: "品牌手册 / 九寨华美胜地",
        type: "page",
        images: ["assets/images/work-001.jpg"]
      },
      {
        title: "品牌手册 / 情绪商店文创",
        type: "page",
        images: ["assets/images/work-002.jpg"]
      },
      {
        title: "LOGO",
        type: "logo",
        images: [
          "assets/images/work-004.jpg",
          "assets/images/work-005.jpg",
          "assets/images/work-006.jpg",
          "assets/images/work-007.jpg",
          "assets/images/work-008.jpg",
          "assets/images/work-009.jpg",
          "assets/images/work-010.jpg",
          "assets/images/work-011.jpg",
          "assets/images/work-012.jpg",
          "assets/images/work-013.jpg",
          "assets/images/work-014.jpg"
        ]
      },
      {
        title: "核桃乐队",
        type: "page",
        images: ["assets/images/work-015.jpg"]
      },
      {
        title: "九寨华美胜地IP",
        type: "page",
        images: ["assets/images/work-016.jpg"]
      },
      {
        title: "校园IP",
        type: "page",
        images: ["assets/images/work-017.jpg"]
      },
      {
        title: "折页手册",
        type: "page",
        images: ["assets/images/work-018.jpg"]
      }
    ]
  },
  {
    id: "visual",
    title: "2.活动视觉",
    projects: [
      {
        title: "九寨槐夏越野赛",
        type: "page",
        images: ["assets/images/work-019.jpg"]
      },
      {
        title: "九寨中秋节",
        type: "page",
        images: ["assets/images/work-020.jpg"]
      },
      {
        title: "漫花庄园樱花季",
        type: "page",
        images: ["assets/images/work-021.jpg"]
      },
      {
        title: "漫花庄园玫瑰节",
        type: "page",
        images: ["assets/images/work-022.jpg"]
      },
      {
        title: "婚恋",
        type: "page",
        images: [
          "assets/images/work-024.jpg",
          "assets/images/work-023.jpg",
          "assets/images/work-025.jpg",
          "assets/images/work-026.jpg",
          "assets/images/work-027.jpg"
        ]
      },
      {
        title: "漫花庄园绣球花节",
        type: "page",
        images: [
          "assets/images/work-028.jpg",
          "assets/images/work-029.jpg"
        ]
      }
    ]
  },
  {
    id: "layout",
    title: "3.版式设计",
    projects: [
      {
        title: "海报",
        type: "board",
        images: [
          "assets/images/work-033.jpg",
          "assets/images/work-039.jpg",
          "assets/images/work-038.jpg",
          "assets/images/work-034.jpg",
          "assets/images/work-035.jpg",
          "assets/images/work-036.jpg",
          "assets/images/work-037.jpg",
          "assets/images/work-032.jpg",
          "assets/images/work-030.jpg",
          "assets/images/work-031.jpg"
        ]
      },
      {
        title: "长图",
        type: "board",
        images: [
          "assets/images/work-044.jpg",
          "assets/images/work-041.jpg",
          "assets/images/work-042.jpg",
          "assets/images/work-043.jpg",
          "assets/images/work-045.jpg",
          "assets/images/work-040.jpg"
        ]
      },
      {
        title: "美团套图",
        type: "board",
        images: [
          "assets/images/work-049.jpg",
          "assets/images/work-048.jpg",
          "assets/images/work-047.jpg",
          "assets/images/work-046.jpg",
          "assets/images/work-050.jpg"
        ]
      }
    ]
  },
  {
    id: "ui",
    title: "4.UI设计",
    projects: [
      {
        title: "网页设计",
        type: "page",
        images: [
          "assets/images/work-051.jpg",
          "assets/images/work-052.jpg",
          "assets/images/work-053.jpg",
          "assets/images/work-054.jpg",
          "assets/images/work-055.jpg"
        ]
      },
      {
        title: "App设计",
        type: "page",
        images: [
          "assets/images/work-056.jpg",
          "assets/images/work-057.jpg",
          "assets/images/work-058.jpg"
        ]
      }
    ]
  },
  {
    id: "ai",
    title: "5.AI设计",
    projects: [
      {
        title: "海南海颐澜度假酒店VI",
        type: "page",
        images: ["assets/images/work-059.jpg"]
      },
      {
        title: "夏日游园会活动视觉",
        type: "page",
        images: ["assets/images/work-060.jpg"]
      }
    ]
  }
];

const root = document.querySelector("#portfolio-root");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");

function asset(path) {
  return encodeURI(`${imageBase}/${path}`);
}

function slug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5]+/g, "-")
    .replace(/^-|-$/g, "");
}

function makeImage(path, title) {
  const img = document.createElement("img");
  img.src = asset(path);
  img.alt = title;
  img.loading = "lazy";
  return img;
}

function makeClickableImage(path, title, className = "image-tile") {
  const button = document.createElement("button");
  button.className = `${className} clickable-tile`;
  button.type = "button";
  button.setAttribute("aria-label", `查看 ${title}`);
  button.appendChild(makeImage(path, title));
  button.addEventListener("click", () => openLightbox(path, title));
  return button;
}

function renderProject(project, categoryId) {
  const section = document.createElement("section");
  section.className = "project";
  section.classList.add("full-page-project");
  section.id = `${categoryId}-${slug(project.title)}`;

  const head = document.createElement("div");
  head.className = "project-head";
  const hint = "单页展示，点击查看大图";
  head.innerHTML = `<h3 class="project-title">${project.title}</h3><span class="hint">${hint}</span>`;
  section.appendChild(head);

  const body = document.createElement("div");
  if (project.type === "logo") {
    body.className = "frame logo-board";
  } else if (project.type === "board") {
    body.className = project.title === "长图" ? "frame work-board long-board" : "frame work-board equal-board";
  } else if (categoryId === "brand" || categoryId === "visual") {
    body.className = "frame collage-board";
  } else {
    body.className = "frame page-board";
  }

  project.images.forEach((path) => {
    body.appendChild(makeClickableImage(path, project.title));
  });

  section.appendChild(body);
  return section;
}

function renderCategory(category) {
  const wrapper = document.createElement("section");
  wrapper.className = "category";
  wrapper.id = category.id;

  const directory = document.createElement("div");
  directory.className = "category-directory";
  const index = data.findIndex((item) => item.id === category.id) + 1;
  directory.innerHTML = `
    <span class="section-kicker">Portfolio / ${String(index).padStart(2, "0")}</span>
    <h2 class="category-title">${category.title}</h2>
    <span class="project-count">${category.projects.length} 个项目</span>
  `;

  const grid = document.createElement("div");
  grid.className = "directory-grid";
  category.projects.forEach((project) => {
    const link = document.createElement("a");
    link.href = `#${category.id}-${slug(project.title)}`;
    link.textContent = project.title;
    grid.appendChild(link);
  });
  directory.appendChild(grid);
  wrapper.appendChild(directory);

  category.projects.forEach((project) => {
    wrapper.appendChild(renderProject(project, category.id));
  });

  return wrapper;
}

function openLightbox(path, title) {
  lightboxImage.src = asset(path);
  lightboxImage.alt = title;
  lightbox.showModal();
}

document.querySelector(".lightbox-close").addEventListener("click", () => {
  lightbox.close();
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.open) {
    lightbox.close();
  }
});

data.forEach((category) => {
  root.appendChild(renderCategory(category));
});
