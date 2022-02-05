// initial state
const items = [
  {
    id: "1",
    item: "T shirt",
    imgurl:
      "https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png",
    price: "500",
  },
  {
    id: "2",
    item: "Flower pot",
    imgurl:
      "https://media.istockphoto.com/photos/empty-flower-pot-picture-id1298515744?b=1&k=20&m=1298515744&s=170667a&w=0&h=bzWWSFweXQQXKr8jGZVM3dQT406kUemMb1p2EA1upyc=",
    price: "250",
  },
  {
    id: "3",
    item: "earphones",
    imgurl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYMC2?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1601053171000",
    price: "999",
  },
  {
    id: "4",
    item: "shoes",
    imgurl: "https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg",
    price: "2000",
  },
  {
    id: "5",
    item: "wallet",
    imgurl: "https://m.media-amazon.com/images/I/81k1z5+zKSL._SL1500_.jpg",
    price: "600",
  },
  {
    id: "6",
    item: "phone",
    imgurl:
      "https://lh3.googleusercontent.com/uq1pvz6hVro3CqeCGQlRWryafZiu-OLL1vuBCbcHmscIxAiOU2nUzDrY3WJe2XWNOgY4rLnJi7TgmcFGC12lyCP9jyfP8Ji3o-hpPPUDvDm6iMIAhrxjdg8XXAGIfyNyEUY9g_I=s512-c",
    price: "30000",
  },
  {
    id: "7",
    item: "football",
    imgurl: "https://m.media-amazon.com/images/I/81V5qz2qbhL._SY450_.jpg",
    price: "800",
  },
  {
    id: "8",
    item: "bottle",
    imgurl:
      "https://www.ikea.com/in/en/images/products/ikea-365-water-bottle-dark-grey__0916298_pe785100_s5.jpg",
    price: "350",
  },
  {
    id: "9",
    item: "Fire stick",
    imgurl:
      "https://www.reliancedigital.in/medias/AMAZON-FIRETV-STICK-ALEXA-VOICE-REMOTE-491431229-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzAxMTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDIwL2hhMC85MDkwODM2NDMwODc4LmpwZ3w2OTFjOTI4MjJkODA3YTFhMTM3NjRmODFjN2U1MjI2OWY3YmZlODhhMjA2Y2VkMzYxMDAwNGQwYjMxODY1MTIz",
    price: "2500",
  },
  {
    id: "10",
    item: "key stand",
    imgurl:
      "https://decorifylife.com/pub/media/catalog/product/cache/a527bf4ebe00554ccc7d3f1db1fe9587/s/k/skh12.jpg",
    price: "750",
  },
  {
    id: "11",
    item: "smart watch",
    imgurl: "https://p.globalsources.com/IMAGES/PDT/B1179903291/smartwatch.jpg",
    price: "4800",
  },
  {
    id: "12",
    item: "face wash",
    imgurl:
      "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-tea-tree-face-wash_1200x1200_pudifaeek7dmz8ge.jpg",
    price: "400",
  },
];

const productReducer = (state = [], action) => {
  if (action.type === "fetch") {
    if (state.length === items.length) {
      return state;
    }
    console.log(state);
    items.map((item) => (state = [...state, item]));
    console.log(state);
    return state;
  } else {
    return state;
  }
};

export default productReducer;
