import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchImages,
  fetchSortedImages,
  selectImages,
  setCategory,
  setPage,
} from "./features/gallery/imagesGallerySlice";
import styles from "./App.module.scss";
import Modal from "./components/Modal/Modal";

function App() {
  const dispatch = useDispatch();
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(true);
  const [isSortModalOpen, setSortModalOpen] = useState(true);

  const { images, loading, error, category, page } = useSelector(selectImages);

  useEffect(() => {
    dispatch(fetchImages(category, page));
  }, [dispatch, category, page]);

  const handlePrev = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  const handleNext = () => {
    dispatch(setPage(page + 1));
  };

  const handleChangeCategory = (newCategory: string) => {
    dispatch(setCategory(newCategory));
    dispatch(setPage(1));
  };

  const handleSort = (sortBy: string) => {
    dispatch(fetchSortedImages(category, sortBy, page)); // Pass the current category and page
    setSortModalOpen(false); // Close the modal after sorting
  };

  return (
    <div className={styles.app}>
      <div className={styles.navigation}>
        <button onClick={handlePrev}>Prev</button>
        <div>
          <button onClick={() => setCategoryModalOpen(true)}>Change Category</button>
          <button onClick={() => setSortModalOpen(true)}>Sort Images</button>
        </div>
        <button onClick={handleNext}>Next</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className={styles.imageGrid}>
        {images.map((image) => (
          <div key={image.id} className={styles.imageItem}>
            <img src={image.webformatURL} alt={image.tags} />
          </div>
        ))}
      </div>
      <Modal show={isCategoryModalOpen}>
        <button onClick={() => setCategoryModalOpen(false)}>X</button>
        <h1>Category Modal</h1>
        <p>This is a modal with text content</p>
        <button
          onClick={() => {
            handleChangeCategory("cars");
            setCategoryModalOpen(false);
          }}
        >
          Cars
        </button>
        <button
          onClick={() => {
            handleChangeCategory("animals");
            setCategoryModalOpen(false);
          }}
        >
          Animals
        </button>
        <button
          onClick={() => {
            handleChangeCategory("buildings");
            setCategoryModalOpen(false);
          }}
        >
          Buildings
        </button>
      </Modal>
      <Modal show={isSortModalOpen}>
        <button onClick={() => setSortModalOpen(false)}>X</button>
        <h1>SortModal </h1>
        <p>This is a modal with text content</p>
        <div>
          <button onClick={() => handleSort("views")}>By Views</button>
          <button onClick={() => handleSort("id")}>By Id</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
