import React, { useState, useEffect } from 'react';
import MangaCard from './MangaCard';
import './mangaList.css'

// --- Placeholder Data ---
// In a real app, this would come from an API call inside useEffect
const sampleMangaData = [
  { id: 1, title: "Manga Title 1", imageUrl: "https://via.placeholder.com/150x225.png?text=Manga+Cover+1", latestChapter: "105", updatedTime: "1 hour ago", url: "#" },
  { id: 2, title: "Another Very Long Manga Title Example 2", imageUrl: "https://via.placeholder.com/150x225.png?text=Manga+Cover+2", latestChapter: "88", updatedTime: "3 hours ago", url: "#" },
  { id: 3, title: "Manga Title 3", imageUrl: "https://via.placeholder.com/150x225.png?text=Manga+Cover+3", latestChapter: "42", updatedTime: "5 hours ago", url: "#" },
  { id: 4, title: "Shonen Action Manga", imageUrl: "https://via.placeholder.com/150x225.png?text=Manga+Cover+4", latestChapter: "150", updatedTime: "1 day ago", url: "#" },
  { id: 5, title: "Romance Comedy Story", imageUrl: "https://via.placeholder.com/150x225.png?text=Manga+Cover+5", latestChapter: "30", updatedTime: "2 days ago", url: "#" },
  { id: 6, title: "Isekai Adventure", imageUrl: "https://via.placeholder.com/150x225.png?text=Manga+Cover+6", latestChapter: "75", updatedTime: "2 days ago", url: "#" },
  // Add more sample manga objects here (ideally 10-20)
];
// --- End Placeholder Data ---

function MangaList() {
  // State to hold manga data (initialized with sample data)
  const [mangaData, setMangaData] = useState(sampleMangaData);
  // Add state for loading, errors, currentPage etc. in a real app

  // Example of where you'd fetch data in a real app:
  // useEffect(() => {
  //   fetch('/api/manga/hot?page=1') // Replace with your actual API endpoint
  //     .then(response => response.json())
  //     .then(data => setMangaData(data.results)) // Adjust based on API response structure
  //     .catch(error => console.error("Error fetching manga:", error));
  // }, []); // Empty dependency array means this runs once on mount


  return (
    <>
      <h1 className="page-title">Hot Manga Updates</h1>
      <div className="manga-grid">
        {mangaData.length > 0 ? (
          mangaData.map(manga => (
            <MangaCard key={manga.id} manga={manga} />
          ))
        ) : (
          <p>Loading manga or no manga found...</p>
        )}
      </div>
    </>
  );
}

export default MangaList;