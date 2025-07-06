import React from "react";
import "./popularDocuments.css";
import DocumentBox from "../../../components/documentBox/DocumentBox";

const PopularDocuments = () => {
  return (
    <section className="popular-documents left-right">
      <h2>Popular Documents</h2>
      <div className="document-listBoxes">
        <DocumentBox></DocumentBox>
        <DocumentBox></DocumentBox>
        <DocumentBox></DocumentBox>
        <DocumentBox></DocumentBox>
      </div>
    </section>
  );
};

export default PopularDocuments;
