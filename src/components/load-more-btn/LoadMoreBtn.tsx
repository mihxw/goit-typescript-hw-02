import React from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={css.btn} onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;