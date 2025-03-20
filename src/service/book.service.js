export const getAllBookCategory = async () => {
  try {
    const res = await fetch(
      "https://nextjs-homework005.vercel.app/api/book_category"
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("getAllBookCategory : ", e);
  }
};

export const getBookCategoryById = async (id) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/book_category/search?query=${id}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("getBookCategoryById : ", e);
  }
};

export const getAllBook = async () => {
  try {
    const res = await fetch("https://nextjs-homework005.vercel.app/api/book");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("getAllBookCategory : ", e);
  }
};

export const getBookById = async (id) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/book/${id}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("getBookById : ", e);
  }
};

export const getAllCartoonGenre = async () => {
  try {
    const res = await fetch(
      "https://nextjs-homework005.vercel.app/api/cartoon_genre"
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("getAllCartoonGenre : ", e);
  }
};

export const getCartoonGenreById = async (id) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon_genre/search?genre=${id}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("getCartoonGenreById : ", e);
  }
};

export const getAllCartoon = async () => {
  try {
    const res = await fetch(
      "https://nextjs-homework005.vercel.app/api/cartoon"
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("getAllCartoonGenre : ", e);
  }
};

export const getCartoonById = async (id) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon/${id}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("getCartoonById : ", e);
  }
};
