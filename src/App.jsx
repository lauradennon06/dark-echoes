import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an Episode to learn more.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>
          Episode: {selectedEpisode.id} "{selectedEpisode.title}"
        </h2>
        <p>{selectedEpisode.description}</p>
      </section>
    );
  }

  //** List of Episodes that a user can select from */
  function EpisodeList() {
    return (
      <section className="list">
        <h2>Episode List</h2>
        <ul className="list">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Episodes to Stream</h1>
      </header>
      <main>
        <EpisodeList />
        <EpisodeDetails />
      </main>
    </>
  );
}
