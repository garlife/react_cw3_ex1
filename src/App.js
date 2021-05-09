import "./App.css";
import { Column, Table, Cell } from "@blueprintjs/table";

function App() {
  const dataSource = {
    headers: {
      artists: "Исполнители",
      album: "Альбомы",
      song: "Песны",
    },
    rows: [
      {
        artists: "Queen",
        album: "Innuendo",
        song: "Innuendo",
      },
      {
        artists: "AWOLNATION",
        album: "Run",
        song: "Run",
      },
      {
        artists: "Kanye West",
        album: "Yeezus",
        song: "Black Skinhead",
      },
    ],
  };

  const cellRenderer = (name) => (rowIndex) => {
    return <Cell>{dataSource.rows[rowIndex][name]}</Cell>;
  };

  return (
    <div className="App">
      <Table numRows={dataSource.rows.length}>
        <Column
          name={dataSource.headers.artists}
          cellRenderer={cellRenderer("artists")}
        />
        <Column
          name={dataSource.headers.album}
          cellRenderer={cellRenderer("album")}
        />
        <Column
          name={dataSource.headers.song}
          cellRenderer={cellRenderer("song")}
        />
      </Table>
    </div>
  );
}

export default App;
