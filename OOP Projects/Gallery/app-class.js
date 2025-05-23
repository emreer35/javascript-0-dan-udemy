 function getElement(Selection) {
   const element = document.querySelector(Selection);
   if (element) {
     return element;
   }
   throw new Error(`Please chec "${Selection}"selector no such element exists`);
}
 class Gallery {
   constructor(element) {
     this.container = element;
     this.list = [...element.querySelectorAll(".img")];
     // console.log(this.list)
     this.modal = getElement(".modal");
     this.modalImg = getElement(".main-img");
     this.modalImages = getElement(".modal-images");
     this.imageName = getElement(".image-name");
     this.closeBtn = getElement(".close-btn");
     this.nextBtn = getElement(".next-btn");
     this.prevBtn = getElement(".prev-btn")
     // this gallery i gosteriyor o yuzden asagida self.openmodel yazarak prototypine ulasti
     // let self = this
     // let i kapatirsak asagiya bind fonskiyonunu kullanmamaiz lazim cunku this ile
     // gallery i gostermesi lazim
     // this.openModal = this.openModal.bind(this)
     this.closeModel = this.closeModal.bind(this);
     this.nextImage = this.nextImage.bind(this);
     this.prevImage = this.prevImage.bind(this)
     this.container.addEventListener(
       "click",
       (e)=> {
         // console.log(this);
         if (e.target.classList.contains("img")) {
           this.openModal(e.target, this.list);
         }
       }
     );
     this.closeBtn.addEventListener("click", this.closeModel);
     this.nextBtn.addEventListener("click", this.nextImage);
     this.prevBtn.addEventListener("click", this.prevImage);
   }
   openModal(selectedImage, list) {
     // console.log(this);
     // console.log('open modal');
     // console.log(selectedImage,list);
     this.setMainImage(selectedImage);
     this.modalImages.innerHTML = list
       .map(function (image) {
         // console.log(image);
         return `<img src="${
           image.src
         }" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}"/>`;
       })
       .join("");
     this.modal.classList.add("open");
   }
   setMainImage(selectedImage) {
     this.modalImg.src = selectedImage.src;
     this.imageName.textContent = selectedImage.title;
   }
   closeModal() {
     this.modal.classList.remove("open");
   }
   nextImage() {
     const selected = this.modalImages.querySelector(".selected");
     const next =
       selected.nextElementSibling || this.modalImages.firstElementChild;
     selected.classList.remove("selected");
     next.classList.add("selected");
     this.setMainImage(next);
   }
   prevImage() {
     const selected = this.modalImages.querySelector(".selected");
     const prev =
       selected.previousElementSibling || this.modalImages.lastElementChild;
     selected.classList.remove("selected");
     prev.classList.add("selected");
     this.setMainImage(prev);
   }
 }
 const nature = new Gallery(getElement(".nature"));
 const city = new Gallery(getElement(".city"));

// function getElement(selection) {
//   const element = document.querySelector(selection);
//   if (element) {
//     return element;
//   }
//   throw new Error(
//     `Please check "${selection}" selector, no such element exists`
//   );
// }

// class Gallery {
//   constructor(element) {
//     this.container = element;
//     this.list = [...element.querySelectorAll(".img")];

//     this.modal = getElement(".modal");
//     this.modalImg = getElement(".main-img");
//     this.modalImages = getElement(".modal-images");
//     this.imageName = getElement(".image-name");
//     this.closeBtn = getElement(".close-btn");
//     this.nextBtn = getElement(".next-btn");
//     this.prevBtn = getElement(".prev-btn");

//     this.openModal = this.openModal.bind(this);
//     this.closeModal = this.closeModal.bind(this);
//     this.nextImage = this.nextImage.bind(this);
//     this.prevImage = this.prevImage.bind(this);

//     this.container.addEventListener("click", (e) => {
//       if (e.target.classList.contains("img")) {
//         this.openModal(e.target, this.list);
//       }
//     });

//     this.closeBtn.addEventListener("click", this.closeModal);
//     this.nextBtn.addEventListener("click", this.nextImage);
//     this.prevBtn.addEventListener("click", this.prevImage);
//   }

//   openModal(selectedImage, list) {
//     this.setMainImage(selectedImage);
//     this.modalImages.innerHTML = list
//       .map((image) => {
//         return `<img src="${image.src}" title="${image.title}" data-id="${
//           image.dataset.id
//         }" class="${
//           selectedImage.dataset.id === image.dataset.id
//             ? "modal-img selected"
//             : "modal-img"
//         }"/>`;
//       })
//       .join("");
//     this.modal.classList.add("open");
//   }

//   setMainImage(selectedImage) {
//     this.modalImg.src = selectedImage.src;
//     this.imageName.textContent = selectedImage.title;
//   }

//   closeModal() {
//     this.modal.classList.remove("open");
//   }

//   nextImage() {
//     const selected = this.modalImages.querySelector(".selected");
//     const next =
//       selected.nextElementSibling || this.modalImages.firstElementChild;
//     selected.classList.remove("selected");
//     next.classList.add("selected");
//     this.setMainImage(next);
//   }

//   prevImage() {
//     const selected = this.modalImages.querySelector(".selected");
//     const prev =
//       selected.previousElementSibling || this.modalImages.lastElementChild;
//     selected.classList.remove("selected");
//     prev.classList.add("selected");
//     this.setMainImage(prev);
//   }
// }

// const nature = new Gallery(getElement(".nature"));
// const city = new Gallery(getElement(".city"));
