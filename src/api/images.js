const apiOrigin = "https://pixabay.com";
const apiKey = "38441939-931b3727bebd0c9cc1a36f19b";

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
