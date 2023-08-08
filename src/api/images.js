const apiOrigin = "https://pixabay.com";
const apiKey = "26032813-5eca57a90774446a771ac3a81";

export const getImages = (searchTerm = "") => {
  return fetch(
    `${apiOrigin}/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&safesearch=true`
  ).then((result) => {
    if (!result.ok) {
      throw result;
    }

    return result.json();
  });
};
